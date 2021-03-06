import * as model from '../src/model';

test("simple seismogram creation", () => {
  let yValues = [0, 1, 2];
  let sampleRate = 20.0;
  let start = moment.utc();
  let netCode = "XX";
  let staCode = "ABCD";
  let locCode = "00";
  let chanCode = "BHZ";
  let seis = new model.Seismogram(yValues, sampleRate, start);
  seis.netCode(netCode).staCode(staCode).locCode(locCode).chanCode(chanCode);
  expect(seis.y().length).toBe(3);
  expect(seis.yAtIndex(0)).toBe(0);
  expect(seis.yAtIndex(1)).toBe(1);
  expect(seis.yAtIndex(2)).toBe(2);
  expect(seis.sampleRate()).toBe(sampleRate);
  expect(seis.start()).toBe(start);
  expect(seis.netCode()).toBe(netCode);
  expect(seis.staCode()).toBe(staCode);
  expect(seis.locCode()).toBe(locCode);
  expect(seis.chanCode()).toBe(chanCode);
  expect(seis.numPoints()).toBe(yValues.length);
  expect(seis.timeOfSample(0).toISOString()).toEqual(start.toISOString());
  expect(seis.codes()).toBe(netCode+"."+staCode+"."+locCode+"."+chanCode);
});

test("seismogram clone", () => {
  let yValues = [0, 1, 2];
  let sampleRate = 20.0;
  let start = new Date();
  let netCode = "XX";
  let staCode = "ABCD";
  let locCode = "00";
  let chanCode = "BHZ";
  let seis = new model.Seismogram(yValues.slice(), sampleRate, start);
  seis.netCode(netCode).staCode(staCode).locCode(locCode).chanCode(chanCode);
  let cloneSeis = seis.clone();
  expect(cloneSeis.y().length).toBe(seis.y().length);
  expect(cloneSeis.yAtIndex(0)).toBe(yValues[0]);
  expect(cloneSeis.yAtIndex(1)).toBe(yValues[1]);
  expect(cloneSeis.yAtIndex(2)).toBe(yValues[2]);
  expect(cloneSeis.yAtIndex(0)).toBe(seis.yAtIndex(0));
  expect(cloneSeis.yAtIndex(1)).toBe(seis.yAtIndex(1));
  expect(cloneSeis.yAtIndex(2)).toBe(seis.yAtIndex(2));
  expect(cloneSeis.sampleRate()).toBe(seis.sampleRate());
  expect(cloneSeis.start()).toEqual(seis.start());
  expect(cloneSeis.start().toISOString()).toEqual(seis.start().toISOString());
  expect(cloneSeis.netCode()).toBe(seis.netCode());
  expect(cloneSeis.staCode()).toBe(seis.staCode());
  expect(cloneSeis.locCode()).toBe(seis.locCode());
  expect(cloneSeis.chanCode()).toBe(seis.chanCode());
  expect(cloneSeis.numPoints()).toBe(seis.numPoints());
  expect(cloneSeis.timeOfSample(0).toISOString()).toEqual(seis.timeOfSample(0).toISOString());
  expect(cloneSeis.codes()).toEqual(seis.codes());
  expect(cloneSeis.end().toISOString()).toEqual(seis.end().toISOString());
  // test after replace data Array
  let x = new Array(seis.y().length);
  x[0] = 4;
  x[1] = 5;
  x[2] = 6;
  cloneSeis.y(x);
  expect(cloneSeis.yAtIndex(0)).toBe(x[0]);
  expect(cloneSeis.yAtIndex(1)).toBe(x[1]);
  expect(cloneSeis.yAtIndex(2)).toBe(x[2]);
});
