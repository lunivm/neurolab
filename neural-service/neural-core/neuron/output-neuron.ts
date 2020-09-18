import { Neuron } from './neuron';
import { NeuronType } from './neuron.type';

export class OutputNeuron extends Neuron {
  public readonly type = NeuronType.Output;
}
