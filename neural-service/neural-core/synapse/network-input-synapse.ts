import { Synapse } from './synapse';
import { Neuron } from '../neuron/neuron';

export class NetworkInputSynapse extends Synapse {
  readonly weight: number = 1;

  constructor(outputNeuron: Neuron) {
    super(null, outputNeuron);
  }
}
