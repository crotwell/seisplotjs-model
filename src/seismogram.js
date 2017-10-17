
export class Seismogram {
  constructor(yArray, sampleRate, start) {
    this._y = yArray;
    this._sampleRate = sampleRate;
    this._start = start;
    this._netCode = null;
    this._staCode = null;
    this._locCode = null;
    this._chanCode = null;
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
    return this.locCode(value);
  }
  locCode(value) {
    return arguments.length ? (this._locCode = value, this) : this._locCode;
  }
  chanCode(value) {
    return arguments.length ? (this._chanCode = value, this) : this._chanCode;
  }
  y(value) {
    return arguments.length ? (this._y = value, this) : this._y;
  }
  yAtIndex(i) {
    return this._y[i];
  }

  timeOfSample(i) {
    return new Date(this._start.getTime() + 1000*i/this._sampleRate);
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
