import netCore, { FeedforwardNetworkConfig, NetworkType } from './core/mod.ts';

const config: FeedforwardNetworkConfig = {
  type: NetworkType.Feedforward,
  hiddenLayers: 0
};
const n = netCore.getNetwork(config);

console.log('input', n.layers[0].neurons);
console.log('\noutput', n.layers[1].neurons);