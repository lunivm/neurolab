import { Synapse } from './synapse.ts';
import { Neuron } from '../neuron/neuron.ts';

export class NetworkInputSynapse extends Synapse {
  public readonly weight: number = 1;

  constructor(outputNeuron: Neuron) {
    super(null, outputNeuron);
  }
}