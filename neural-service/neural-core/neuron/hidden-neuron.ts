import { Neuron } from './neuron';
import { NeuronType } from './neuron.type';

export class HiddenNeuron extends Neuron {
  public readonly type = NeuronType.Hidden;

}
