import { Synapse } from './synapse';
import { Neuron } from '../neuron/neuron';

export class NetworkOutputSynapse extends Synapse {
  readonly weight: number = 1;

  constructor(inputNeuron: Neuron) {
    super(inputNeuron, null);
  }
}
