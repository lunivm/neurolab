import { NetworkConfig } from '../network-config.ts';
import { NetworkType } from '../network.type.ts';

export interface FeedforwardNetworkConfig extends NetworkConfig {
  type: NetworkType.Feedforward;
  hiddenLayers: number;
}