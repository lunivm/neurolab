import { Network } from './network/network.ts';
import { NetworkDirector } from './network/network.director.ts';
import { NetworkConfig } from './network/network-config.ts';
import { createNetworkBuilder } from './network/network-builder.factory.ts';

export * from './network/feedforward-network/feedforward-network-config.ts';
export * from './network/network.type.ts';

export default {
  getNetwork(config: NetworkConfig): Network {
    const director = new NetworkDirector();
    const builder = createNetworkBuilder(config);

    director.constructNetwork(builder);

    return <Network>builder.result;
  }
};