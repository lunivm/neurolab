import { Neuron } from '../neuron/neuron';
import { LayerType } from './layer.type';

export abstract class Layer {
  abstract readonly type: LayerType;

  protected _neurons: Neuron[] = [];

  get neurons(): Neuron[] {
    return this._neurons;
  }

  setNeurons(val: Neuron[]) {
    this._neurons = val || [];
  }
}
