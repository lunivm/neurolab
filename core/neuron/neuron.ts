import { Synapse } from '../synapse/synapse.ts';

export abstract class Neuron {
  public input: Synapse[] = [];
  public output: Synapse[] = [];
}