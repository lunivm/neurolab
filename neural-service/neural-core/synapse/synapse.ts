import { Neuron } from '../neuron/neuron';

export class Synapse {
 private _weight = NaN;

  constructor(
    private readonly inputNeuron: Neuron | null,
    private readonly  outputNeuron: Neuron | null
  ) {}

  get input(): Neuron | null {
    return this.inputNeuron;
  }

  get output(): Neuron | null {
    return this.outputNeuron;
  }
}
