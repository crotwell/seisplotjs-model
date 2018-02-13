import { moment, checkStringOrDate } from './util';

export const knownDataCentersJsonURL = "http://www.seis.sc.edu/fdsnServiceCheck/fdsnDataCenters.json";

export const DS = "fdsnws-dataselect";
export const EV = "fdsn-event";
export const ST = "fdsn-station";
export const RS = "ringserver";
export const allDCTypes = [ DS, EV, ST, RS ];

const BestDCIdMap = new Map();

BestDCIdMap.set(DS, "IRIS");
BestDCIdMap.set(ST, "IRIS");
BestDCIdMap.set(RS, "IRIS");
BestDCIdMap.set(EV, "USGS");

let knownDCs = null;

export function getDefaultDC(type) {
  return getDataCenter(BestDCIdMap.get(type));
}

/** Loads all known data centers. JSON top level has:
 *  created - modification date,
 *  datacenters - array of objects, each with
 *  id, name, website, email, host, region and
 *  and supports that is an array of type and version.
 *   Returns a Promise that resolves to the returned json. */
export function getKnownDataCenters() {
  console.log("before getKnownDataCenters "+knownDataCentersJsonURL);
  if ( ! knownDCs) {
    knownDCs = fetch(knownDataCentersJsonURL)
      .then(function(response) {
        let json = response.json();
        json.accesstime = moment.utc();
        return json;
      });
  }
  return knownDCs;
}

/** Forces a reload of the remote json. In general, because the data
 *  is updated infrequently, this is unlikely to be needed. However,
 *  a very long running instance may wish to update this periodically,
 *  likely at most daily. Returns a Promise. */
export function updateKnownDataCenters() {
  knownDCs = null;
  return getKnownDataCenters();
}

/** Gets the data center associated with the id.
 *   Returns a Promise. */
export function getDataCenter(id) {
  return getKnownDataCenters().then(kdcs => {
    for (const dc of kdcs.datacenters) {
      if (dc.id === id) {
        return dc;
      }
    }
    return null;
  });
}

/** returns true is the dc datacenter supports type web service,
 *false otherwise.
 */
export function doesSupport(dc, type) {
  let out = dc.supports.find(function(s) { return s.type === type;});
  return typeof out != 'undefined';
}

/** returns the hostname for type web service. In many cases this
 *  is the same as the host for the overall datacenter, but sometimes
 *  not all web services are hosted on the same machine. For example
 *  all fdsn web services at IRIS are hosted at service.iris.edu
 *  but the ringserver is hosted at rtserve.iris.edu
 */
export function serviceHost(dc, type) {
  let does = doesSupport(dc, type);
  if (does) {
    return does.host ? does.host : dc.host;
  }
  return null;
}

/** returns the port for type web service. In many cases this
 *  is 80, but sometimes web services are hosted on alternative
 *  ports.
 */
export function servicePort(dc, type) {
  let does = doesSupport(dc, type);
  if (does) {
    return does.port ? does.port : 80;
  }
  return null;
}
