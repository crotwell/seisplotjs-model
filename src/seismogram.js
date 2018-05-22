// flow

import { moment, checkStringOrDate } from './util';

/**
* A Seismogram object.
* @param {Array} yArray array of Y sample values, ie the timeseries
* @param {number} sampleRate sample rate of the seismogram, hertz
* @param {moment} start start time of seismogrm as a momentjs moment in utc or a string that can be parsed
*/
export class Seismogram {
  constructor(yArray, sampleRate, start) {
    this._y = yArray;
    this._sampleRate = sampleRate;
    this._start = checkStringOrDate(start);
    this._netCode = null;
    this._staCode = null;
    this._locCode = null;
    this._chanCode = null;
    this._yUnit = 'count';
  }
/**
 * Get or set the sampleRate.
 * If value is defined, sets the sampleRate and returns the seismogram.
 * If undefined, returns the sampleRate.
 * @returns {number} the sample rate in hertz or this.
 */
  sampleRate(value) {
    return arguments.length ? (this._sampleRate = value, this) : this._sampleRate;
  }
  start(value) {
    return arguments.length ? (this._start = checkStringOrDate(value), this) : this._start;
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
    return this.locCode(value);
  }
  locCode(value) {
    return arguments.length ? (this._locCode = value, this) : this._locCode;
  }
  chanCode(value) {
    return arguments.length ? (this._chanCode = value, this) : this._chanCode;
  }
  yUnit(value) {
    return arguments.length ? (this._yUnit = value, this) : this._yUnit;
  }
  y(value) {
    return arguments.length ? (this._y = value, this) : this._y;
  }
  yAtIndex(i) {
    return this._y[i];
  }

  timeOfSample(i) {
    return moment.utc(this._start).add(i/this._sampleRate, 'seconds');
  }
  codes()  {
    return this._netCode+"."+this._staCode+"."+this._locCode+"."+this._chanCode;
  }
  seisId() {
   return (this.codes()+"_"+this._start.toISOString()+"_"+this._end.toISOString()).replace(/\./g,'_').replace(/:/g,'');
  }
  clone() {
    let out = new Seismogram(this.y().slice(),
                          this.sampleRate(),
                          this.start());
    out._netCode = this._netCode;
    out._staCode = this._staCode;
    out._locCode = this._locCode;
    out._chanCode = this._chanCode;
    return out;
  }
}
