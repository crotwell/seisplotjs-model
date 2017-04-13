
// QuakeML classes

export class Quake {
  constructor() {
// what is essential???
  }
  eventid(value) {
    return arguments.length ? (this._eventid = value, this) : this._eventid;
  }
  time(value) {
    return arguments.length ? (this._time = value, this) : this._time;
  }
  latitude(value) {
    return arguments.length ? (this._latitude = value, this) : this._latitude;
  }
  longitude(value) {
    return arguments.length ? (this._longitude = value, this) : this._longitude;
  }
  depth(value) {
    return arguments.length ? (this._depth = value, this) : this._depth;
  }
  description(value) {
    return arguments.length ? (this._description = value, this) : this._description;
  }
  magnitude(value) {
    return arguments.length ? (this._magnitude = value, this) : this._magnitude;
  }
  arrivals(value) {
    return arguments.length ? (this._arrivals = value, this) : this._arrivals;
  }
}

export class Magnitude {
  constructor(mag, type) {
    this._mag = mag;
    this._type = type;
  }
  mag(value) {
    return arguments.length ? (this._mag = value, this) : this._mag;
  }
  type(value) {
    return arguments.length ? (this._type = value, this) : this._type;
  }
}

export class Arrival {
  constructor(phase, pick) {
    this._phase = phase;
    this._pick = pick;
  }
  phase(value) {
    return arguments.length ? (this._phase = value, this) : this._phase;
  }
  publicID(value) {
    return arguments.length ? (this._publicID = value, this) : this._publicID;
  }
  pick(value) {
    return arguments.length ? (this._pick = value, this) : this._pick;
  }
}

export class Pick {
  constructor(time, networkCode, stationCode, locationCode, channelCode) {
    this._time = time;
    this._networkCode = networkCode;
    this._stationCode = stationCode;
    this._locationCode = locationCode;
    this._channelCode = channelCode;
  }
  publicID(value) {
    return arguments.length ? (this._publicID = value, this) : this._publicID;
  }
  time(value) {
    return arguments.length ? (this._time = value, this) : this._time;
  }
  networkCode(value) {
    return arguments.length ? (this._networkCode = value, this) : this._networkCode;
  }
  stationCode(value) {
    return arguments.length ? (this._stationCode = value, this) : this._stationCode;
  }
  locationCode(value) {
    return arguments.length ? (this._locationCode = value, this) : this._locationCode;
  }
  channelCode(value) {
    return arguments.length ? (this._channelCode = value, this) : this._channelCode;
  }
}

// StationXML classes

export class Network {
  constructor(networkCode) {
    this.networkCode(networkCode);
    this._stations = [];
  }
  networkCode(value) {
    return arguments.length ? (this._networkCode = value, this) : this._networkCode;
  }
  startDate(value) {
    return arguments.length ? (this._startDate = value, this) : this._startDate;
  }
  endDate(value) {
    return arguments.length ? (this._endDate = value, this) : this._endDate;
  }
  restrictedStatus(value) {
    return arguments.length ? (this._restrictedStatus = value, this) : this._restrictedStatus;
  }
  description(value) {
    return arguments.length ? (this._description = value, this) : this._description;
  }
  stations(value) {
    return arguments.length ? (this._stations = value, this) : this._stations;
  }
  codes() {
    return this.networkCode();
  }
}

export class Station {
  constructor(network, stationCode) {
    this._network = network;
    this._stationCode = stationCode;
  }
  network(value) {
    return arguments.length ? (this._network = value, this) : this._network;
  }
  stationCode(value) {
    return arguments.length ? (this._stationCode = value, this) : this._stationCode;
  }
  startDate(value) {
    return arguments.length ? (this._startDate = value, this) : this._startDate;
  }
  endDate(value) {
    return arguments.length ? (this._endDate = value, this) : this._endDate;
  }
  restrictedStatus(value) {
    return arguments.length ? (this._restrictedStatus = value, this) : this._restrictedStatus;
  }
  name(value) {
    return arguments.length ? (this._name = value, this) : this._name;
  }
  latitude(value) {
    return arguments.length ? (this._latitude = value, this) : this._latitude;
  }
  longitude(value) {
    return arguments.length ? (this._longitude = value, this) : this._longitude;
  }
  elevation(value) {
    return arguments.length ? (this._elevation = value, this) : this._elevation;
  }
  channels(value) {
    return arguments.length ? (this._channels = value, this) : this._channels;
  }
  codes() {
    return this.network().codes()+"."+this.stationCode();
  }
}

export class Channel {
  constructor(station, channelCode, locationId) {
    this._station = station;
    this._channelCode = channelCode;
    this._locationId = locationId;
  }
  station(value) {
    return arguments.length ? (this._station = value, this) : this._station;
  }
  channelCode(value) {
    return arguments.length ? (this._channelCode = value, this) : this._channelCode;
  }
  locationId(value) {
    return arguments.length ? (this._locationId = value, this) : this._locationId;
  }
  startDate(value) {
    return arguments.length ? (this._startDate = value, this) : this._startDate;
  }
  endDate(value) {
    return arguments.length ? (this._endDate = value, this) : this._endDate;
  }
  restrictedStatus(value) {
    return arguments.length ? (this._restrictedStatus = value, this) : this._restrictedStatus;
  }
  latitude(value) {
    return arguments.length ? (this._latitude = value, this) : this._latitude;
  }
  longitude(value) {
    return arguments.length ? (this._longitude = value, this) : this._longitude;
  }
  elevation(value) {
    return arguments.length ? (this._elevation = value, this) : this._elevation;
  }
  depth(value) {
    return arguments.length ? (this._depth = value, this) : this._depth;
  }
  azimuth(value) {
    return arguments.length ? (this._azimuth = value, this) : this._azimuth;
  }
  dip(value) {
    return arguments.length ? (this._dip = value, this) : this._dip;
  }
  sampleRate(value) {
    return arguments.length ? (this._sampleRate = value, this) : this._sampleRate;
  }
  instrumentSensitivity(value) {
    return arguments.length ? (this._instrumentSensitivity = value, this) : this._instrumentSensitivity;
  }

  codes() {
    return this.station().codes()+"."+this.locationId()+"."+this.channelCode();
  }
}

export class InstrumentSensitivity {
  constructor(sensitivity, frequency, inputUnit, outputUnit) {
    this._sensitivity = sensitivity;
    this._frequency = frequency;
    this._inputUnit = inputUnit;
    this._outputUnit = outputUnit;
  }
  sensitivity(value) {
    return arguments.length ? (this._sensitivity = value, this) : this._sensitivity;
  }
  frequency(value) {
    return arguments.length ? (this._frequency = value, this) : this._frequency;
  }
  inputUnits(value) {
    return arguments.length ? (this._inputUnits = value, this) : this._inputUnits;
  }
  outputUnits(value) {
    return arguments.length ? (this._outputUnits = value, this) : this._outputUnits;
  }

}

export class Seismogram {
  constructor(yArray, sampleRate, start) {
    this._y = yArray;
    this._sampleRate = sampleRate;
    this._start = start;
  }
  sampleRate(value) {
    return arguments.length ? (this._sampleRate = value, this) : this._sampleRate;
  }
  start(value) {
    return arguments.length ? (this._start = value, this) : this._start;
  }
  end() {
    return this.timeOfSample(this.numPoints()-1);
  }
  numPoints() {
    return this._y.length;
  }
  netCode(value) {
    return arguments.length ? (this._netCode = value, this) : this._netCode;
  }
  staCode(value) {
    return arguments.length ? (this._staCode = value, this) : this._staCode;
  }
  locId(value) {
    return arguments.length ? (this._locId = value, this) : this._locId;
  }
  chanCode(value) {
    return arguments.length ? (this._chanCode = value, this) : this._chanCode;
  }
  y(value) {
    return arguments.length ? (this._y = value, this) : this._y;
  }
  
  timeOfSample(i) {
    return new Date(this._start.getTime() + 1000*i/this._sampleRate);
  }
  codes()  {
    return this._netCode+"."+this._staCode+"."+this._locId+"."+this._chanCode;
  }
  seisId() {
   return (this.codes()+"_"+this._start.toISOString()+"_"+this._end.toISOString()).replace(/\./g,'_').replace(/\:/g,'');
  }
  clone() {
    let out = new Seismogram(this.y().slice(),
                          this.sampleRate(),
                          this.start());
    out._netCode = this._netCode;
    out._staCode = this._staCode;
    out._locId = this._locId;
    out._chanCode = this._chanCode;
console.log("Inside clone(): "+out.codes());
    return out;
  }
}
