import { Layer } from '../layer/layer';
import { NetworkType } from './network.type';

export abstract class Network {
  public abstract readonly type: NetworkType;

  public get layers(): Layer[] {
    return this._layers.slice();
  }

  public set layers(val: Layer[]) {
    this._layers = val ? val.slice() : [];
  }

  private _layers: Layer[] = [];
}
