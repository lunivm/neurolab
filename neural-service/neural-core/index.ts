import { Network } from './network/network';
import { NetworkDirector } from './network/network.director';
import { NetworkConfig } from './network/network-config.interface';
import { createNetworkBuilder } from './network/network-builder.factory';

export * from './network/feedforward-network/feedforward-network-config.interface';
export * from './network/network.type';

export default {
  getNetwork(config: NetworkConfig): Network {
    const director = new NetworkDirector();
    const builder = createNetworkBuilder(config);

    director.constructNetwork(builder);

    return builder.result as Network;
  }
};
