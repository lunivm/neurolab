import { Neuron } from './neuron';
import { NeuronType } from './neuron.type';

export class InputNeuron extends Neuron {
  public readonly type = NeuronType.Input;

  constructor() {
    super();
    this.setOutputs([]);
  }
}
