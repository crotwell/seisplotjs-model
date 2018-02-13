import { checkStringOrDate } from './util';

// QuakeML classes

export class Quake {
  constructor() {
// what is essential???
  }
  eventid(value) {
    return arguments.length ? (this._eventid = value, this) : this._eventid;
  }
  time(value) {
    return arguments.length ? (this._time = checkStringOrDate(value), this) : this._time;
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
  originList(value) {
    return arguments.length ? (this._originList = value, this) : this._originList;
  }
  magnitudeList(value) {
    return arguments.length ? (this._magnitudeList = value, this) : this._magnitudeList;
  }
  arrivals(value) {
    return arguments.length ? (this._arrivals = value, this) : this._arrivals;
  }
  picks(value) {
    return arguments.length ? (this._picks = value, this) : this._picks;
  }
}
export class Origin {
  constructor() {
// what is essential???
  }
  time(value) {
    return arguments.length ? (this._time = checkStringOrDate(value), this) : this._time;
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
    this._time = checkStringOrDate(time);
    this._networkCode = networkCode;
    this._stationCode = stationCode;
    this._locationCode = locationCode;
    this._channelCode = channelCode;
  }
  publicID(value) {
    return arguments.length ? (this._publicID = value, this) : this._publicID;
  }
  time(value) {
    return arguments.length ? (this._time = checkStringOrDate(value), this) : this._time;
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
