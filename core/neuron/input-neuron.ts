import { Neuron } from './neuron.ts';

export class InputNeuron extends Neuron {
  constructor() {
    super();
    this.output = [];
  }
}