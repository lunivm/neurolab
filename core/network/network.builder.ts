import { Network } from './network.ts';
import { NetworkConfig } from './network-config.ts';

export abstract class NetworkBuilder {
  private _result: Network | null = null;
  protected readonly config: NetworkConfig;

  protected constructor(config: NetworkConfig) {
    this.config = config;
  }

  public get result(): Network {
    if (!this._result) {
      throw new Error('Get Network value: not initialized');
    }

    return this._result;
  }

  public set result(val: Network) {
    if (!val) {
      throw new Error('Set Network value: not defined');
    }

    this._result = val;
  }

  public abstract reset(): void;

  public abstract buildLayers(): void;
  public abstract buildNeurons(): void;
  public abstract buildSynapses(): void;
}