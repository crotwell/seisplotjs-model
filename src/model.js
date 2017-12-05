
import { moment, checkStringOrDate } from './util';

import {Quake, Magnitude, Origin, Arrival, Pick} from './quakeml';
import {Network,
        Station,
        Channel,
        InstrumentSensitivity,
        Response,
        Stage,
        AbstractFilterType,
        PolesZeros,
        FIR,
        CoefficientsFilter,
        Decimation,
        Gain
      } from './stationxml';
import {Seismogram } from './seismogram';


/* re-export */
export  { moment,
          checkStringOrDate,
          Quake,
          Magnitude,
          Origin,
          Arrival,
          Pick,
          Network,
          Station,
          Channel,
          InstrumentSensitivity,
          Response,
          Stage,
          AbstractFilterType,
          PolesZeros,
          FIR,
          CoefficientsFilter,
          Decimation,
          Gain,
          Seismogram };

// allow overriding the complex object to use
// if OregonDSP is loaded we want to use
// its Complex instead of the simple one defined here
export function createComplex(real, imag) {
  return {
    real: real,
    imag: imag
  };
}
