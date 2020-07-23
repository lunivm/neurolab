import { Neuron } from '../neuron/neuron.ts';
import { LayerType } from './layer.type.ts';

export abstract class Layer {
  public abstract readonly type: LayerType;

  protected _neurons: Neuron[] = [];

  public get neurons(): Neuron[] {
    return this._neurons;
  }

  public setNeurons(val: Neuron[]) {
    this._neurons = val || [];
  }
}