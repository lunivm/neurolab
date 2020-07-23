import { Neuron } from '../neuron/neuron.ts';

export class Synapse {
  public weight: number = NaN;

  constructor(
    private readonly inputNeuron: Neuron | null,
    private readonly  outputNeuron: Neuron | null
  ) {}

  public get input(): Neuron | null {
    return this.inputNeuron;
  }

  public get output(): Neuron | null {
    return this.outputNeuron;
  }
}