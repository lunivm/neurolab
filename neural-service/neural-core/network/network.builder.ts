import { Network } from './network';
import { NetworkConfig } from './network-config.interface';

export abstract class NetworkBuilder {
 private _result: Network | null = null;
  protected readonly config: NetworkConfig;

  protected constructor(config: NetworkConfig) {
    this.config = config;
  }

  get result(): Network {
    if (!this._result) {
      throw new Error('Get Network value: not initialized');
    }

    return this._result;
  }

  set result(val: Network) {
    if (!val) {
      throw new Error('Set Network value: not defined');
    }

    this._result = val;
  }

  abstract reset(): void;

  abstract buildLayers(): void;
  abstract buildNeurons(): void;
  abstract buildSynapses(): void;
}
