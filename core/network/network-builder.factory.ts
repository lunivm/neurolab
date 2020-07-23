import { NetworkConfig } from './network-config.ts';
import { NetworkType } from './network.type.ts';
import { FeedforwardNetworkBuilder } from './feedforward-network/feedforward-network.builder.ts';
import { NetworkBuilder } from './network.builder.ts';
import { FeedforwardNetworkConfig } from './feedforward-network/feedforward-network-config.ts';

export function createNetworkBuilder(config: NetworkConfig): NetworkBuilder {
  switch (config.type) {
    case NetworkType.Feedforward:
      return new FeedforwardNetworkBuilder(config as FeedforwardNetworkConfig);
    default:
      throw new Error('Incorrect network type');
  }
}