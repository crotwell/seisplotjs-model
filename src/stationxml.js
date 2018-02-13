import { checkStringOrDate } from './util';

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
    return arguments.length ? (this._startDate = checkStringOrDate(value), this) : this._startDate;
  }
  endDate(value) {
    return arguments.length ? (this._endDate = checkStringOrDate(value), this) : this._endDate;
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
  isTempNet() {
    const first = this.networkCode().charAt(0);
    return first === 'X' || first === 'Y' || first === 'Z';
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
    return arguments.length ? (this._startDate = checkStringOrDate(value), this) : this._startDate;
  }
  endDate(value) {
    return arguments.length ? (this._endDate = checkStringOrDate(value), this) : this._endDate;
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
    return arguments.length ? (this._startDate = checkStringOrDate(value), this) : this._startDate;
  }
  endDate(value) {
    return arguments.length ? (this._endDate = checkStringOrDate(value), this) : this._endDate;
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
