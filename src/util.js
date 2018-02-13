import moment from 'moment';

//reexport
export { moment, };

export function checkStringOrDate(d) {
  if (moment.isMoment(d)) {
    return d;
  } else if (d instanceof Date) {
      return moment.utc(d);
  } else if (d instanceof Number || typeof d === "number") {
    return moment.utc(d);
  } else if (d instanceof String || typeof d === "string") {
    return moment.utc(d);
  }
  throw new Error("unknown date type: "+d+" "+(typeof d)+" "+findTypeOf(d));
}
function findTypeOf(value) {
    var type = typeof value;

    switch(type) {
        case 'object':
        return value === null ? 'null' : Object.prototype.toString.call(value).
            match(/^\[object (.*)\]$/)[1];

        case 'function':
        return 'Function';

        default:
        return type;
    }
}
