import { Neuron } from './neuron';

export class InputNeuron extends Neuron {
  constructor() {
    super();
    this.setOutputs([]);
  }
}
