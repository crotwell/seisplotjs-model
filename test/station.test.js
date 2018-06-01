import * as model from '../src/model';

test("simple station", () => {
  const NET_CODE = "AA";
  const STA_CODE = "JSC";
  let net = new model.Network(NET_CODE);
  let station = new model.Station(net, STA_CODE);
  expect(station.latitude(47)).toBe(station);
  expect(station.latitude()).toBe(47);
  expect(station.stationCode()).toBe(STA_CODE);
  expect(station.stationCode(STA_CODE)).toBe(station);
});
