// @flow

import { moment, createComplex, checkStringOrDate, cleanUnitName, UNITS,
         hasArgs, hasNoArgs, isStringArg, isNumArg } from './util';

//import { Qty } from 'js-quantities';
import Qty from 'js-quantities';

// import { knownDataCentersJsonURL,
//         getKnownDataCenters,
//         updateKnownDataCenters,
//         doesSupport,
//         serviceHost,
//         servicePort,
//         DS, ST, EV, RS,
//         allDCTypes,
//         getDefaultDC,
//         getDataCenter } from './knownDataCenters';

import * as knownDataCenters from './knownDataCenters';

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
          Qty,
          createComplex,
          checkStringOrDate,
          cleanUnitName,
          UNITS,
          knownDataCenters,
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
          Seismogram,
          hasArgs, hasNoArgs, isStringArg, isNumArg };
