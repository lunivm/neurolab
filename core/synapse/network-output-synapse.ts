import { Synapse } from './synapse.ts';
import { Neuron } from '../neuron/neuron.ts';

export class NetworkOutputSynapse extends Synapse {
  public readonly weight: number = 1;

  constructor(inputNeuron: Neuron) {
    super(inputNeuron, null);
  }
}