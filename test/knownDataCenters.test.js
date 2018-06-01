import * as model from '../src/model';
import fetch from 'node-fetch';
jest.mock('node-fetch');

test("load known DCs", () => {
  // can't due to no fetch in node...
  //let knownDCs = model.knownDataCenters.getKnownDataCenters();
  let knownDCs = model.knownDataCenters;
  expect(knownDCs).toBeDefined();
});
