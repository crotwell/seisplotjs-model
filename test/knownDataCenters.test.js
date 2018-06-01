import * as model from '../src/model';
require('isomorphic-fetch');


test("fetch directly", () => {
  return fetch(model.knownDataCenters.knownDataCentersJsonURL)
  .then(response => {
    expect(response.status).toBe(200);
    expect(response.json()).toBeDefined();
  });
});


test("load known DCs", () => {
  return model.knownDataCenters.getKnownDataCenters().then(knownDCs => {
    expect(knownDCs).toBeDefined();
  });
});
