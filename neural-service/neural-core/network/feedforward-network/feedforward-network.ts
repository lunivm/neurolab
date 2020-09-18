import { Network } from '../network';
import { NetworkType } from '../network.type';

export class FeedforwardNetwork extends Network {
  public readonly type = NetworkType.Feedforward;
}
