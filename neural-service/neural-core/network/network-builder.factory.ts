import { NetworkConfig } from './network-config.interface';
import { NetworkType } from './network.type';
import { FeedforwardNetworkBuilder } from './feedforward-network/feedforward-network.builder';
import { NetworkBuilder } from './network.builder';
import { FeedforwardNetworkConfigInterface } from './feedforward-network/feedforward-network-config.interface';

export function createNetworkBuilder(config: NetworkConfig): NetworkBuilder {
  switch (config.type) {
    case NetworkType.Feedforward:
      return new FeedforwardNetworkBuilder(config as FeedforwardNetworkConfigInterface);
    default:
      throw new Error('Incorrect network type');
  }
}
