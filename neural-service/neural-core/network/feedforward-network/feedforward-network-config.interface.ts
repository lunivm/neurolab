import { NetworkConfig } from '../network-config.interface';
import { NetworkType } from '../network.type';

export interface FeedforwardNetworkConfigInterface extends NetworkConfig {
  type: NetworkType.Feedforward;
  hiddenLayers: number;
}
