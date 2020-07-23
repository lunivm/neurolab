import { Layer } from '../layer/layer.ts';

export abstract class Network {
  protected _layers: Layer[] = [];

  public get layers(): Layer[] {
    return this._layers;
  }

  setLayers(val: Layer[]): void {
    this._layers = val || [];
  }
}