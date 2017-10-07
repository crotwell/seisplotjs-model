
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
  locationCode(value) {
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
    if (arguments.length) {
      // setter
      if (typeof this._response == 'undefined') {
        this._response = new Response(value);
      } else {
        this._response._instrumentSensitivity = value;
      }
      return this;
    } else {
      if (this._response) {
        return this._response._instrumentSensitivity;
      } else {
        return 'undefined';
      }
    }
  }
  response(value) {
    return arguments.length ? (this._response = value, this) : this._response;
  }

  codes() {
    return this.station().codes()+"."+this.locationId()+"."+this.channelCode();
  }
}

export class InstrumentSensitivity {
  constructor(sensitivity, frequency, inputUnits, outputUnits) {
    this._sensitivity = sensitivity;
    this._frequency = frequency;
    this._inputUnits = inputUnits;
    this._outputUnits = outputUnits;
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

export class Response {
  constructor(instrumentSensitivity) {
    this._instrumentSensitivity = instrumentSensitivity;
  }
  instrumentSensitivity(value) {
    return arguments.length ? (this._instrumentSensitivity = value, this) : this._instrumentSensitivity;
  }
  stages(value) {
    return arguments.length ? (this._stages = value, this) : this._stages;
  }
}

export class Stage {
  constructor(filter, decimation, gain) {
    this._filter = filter;
    this._decimation = decimation;
    this._gain = gain;
  }
  filter(value) {
    return arguments.length ? (this._filter = value, this) : this._filter;
  }
  decimation(value) {
    return arguments.length ? (this._decimation = value, this) : this._decimation;
  }
  gain(value) {
    return arguments.length ? (this._gain = value, this) : this._gain;
  }
}

export class AbstractFilterType {
  constructor(inputUnits, outputUnits) {
    this._inputUnits = inputUnits;
    this._outputUnits = outputUnits;
  }
  name(value) {
    return arguments.length ? (this._name = value, this) : this._name;
  }
  description(value) {
    return arguments.length ? (this._description = value, this) : this._description;
  }
  inputUnits(value) {
    return arguments.length ? (this._inputUnits = value, this) : this._inputUnits;
  }
  outputUnits(value) {
    return arguments.length ? (this._outputUnits = value, this) : this._outputUnits;
  }
}

export class PolesZeros extends AbstractFilterType {
  constructor(inputUnits, outputUnits) {
    super(inputUnits, outputUnits);
  }
  pzTransferFunctionType(value) {
    return arguments.length ? (this._pzTransferFunctionType = value, this) : this._pzTransferFunctionType;
  }
  normalizationFactor(value) {
    return arguments.length ? (this._normalizationFactor = value, this) : this._normalizationFactor;
  }
  normalizationFrequency(value) {
    return arguments.length ? (this._normalizationFrequency = value, this) : this._normalizationFrequency;
  }
  zeros(value) {
    return arguments.length ? (this._zeros = value, this) : this._zeros;
  }
  poles(value) {
    return arguments.length ? (this._poles = value, this) : this._poles;
  }
}

export class FIR extends AbstractFilterType {
  constructor(inputUnits, outputUnits) {
    super(inputUnits, outputUnits);
  }
  symmetry(value) {
    return arguments.length ? (this._symmetry = value, this) : this._symmetry;
  }
  numerator(value) {
    return arguments.length ? (this._numerator = value, this) : this._numerator;
  }
}

export class CoefficientsFilter extends AbstractFilterType {
  constructor(inputUnits, outputUnits) {
    super(inputUnits, outputUnits);
  }
  cfTransferFunction(value) {
    return arguments.length ? (this._cfTransferFunction = value, this) : this._cfTransferFunction;
  }
  numerator(value) {
    return arguments.length ? (this._numerator= value, this) : this._numerator;
  }
  denominator(value) {
    return arguments.length ? (this._denominator= value, this) : this._denominator;
  }
}

export class Decimation {
  inputSampleRate(value) {
    return arguments.length ? (this._inputSampleRate= value, this) : this._inputSampleRate;
  }
  factor(value) {
    return arguments.length ? (this._factor= value, this) : this._factor;
  }
  offset(value) {
    return arguments.length ? (this._offset= value, this) : this._offset;
  }
  delay(value) {
    return arguments.length ? (this._delay= value, this) : this._delay;
  }
  correction(value) {
    return arguments.length ? (this._correction= value, this) : this._correction;
  }
}

export class Gain {
  value(value) {
    return arguments.length ? (this._value= value, this) : this._value;
  }
  frequency(value) {
    return arguments.length ? (this._frequency= value, this) : this._frequency;
  }

}

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
  yValueAt(i) {
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

// allow overriding the complex object to use
// if OregonDSP is loaded we want to use
// its Complex instead of the simple one defined here
export function createComplex(real, imag) {
  return {
    real: real,
    imag: imag
  };
}
