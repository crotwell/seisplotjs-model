import * as model from '../src/model';

test("simple network", () => {
  let NET_CODE = "AA";
  let net = new model.Network(NET_CODE);
  expect(net.networkCode()).toBe(NET_CODE);
  expect(net.networkCode(NET_CODE)).toBe(net);
});
