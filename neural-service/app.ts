import netCore, { FeedforwardNetworkConfigInterface, NetworkType } from './neural-core';

const config: FeedforwardNetworkConfigInterface = {
  type: NetworkType.Feedforward,
  hiddenLayers: 0
};
const n = netCore.getNetwork(config);

console.log('input', n.layers[0].neurons);
console.log('\noutput', n.layers[1].neurons);
