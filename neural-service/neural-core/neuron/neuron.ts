import { Synapse } from '../synapse/synapse';
import { NeuronType } from './neuron.type';

export abstract class Neuron {
  public readonly abstract type: NeuronType;

  public get inputs(): Synapse[] {
    return this._inputs.slice();
  }

  public get outputs(): Synapse[] {
    return this._outputs.slice();
  }

  public addInputSynapse(...synapse: Synapse[]) {
    this._inputs.push(...synapse);
  }

  public addOutputSynapse(...synapse: Synapse[]) {
    this._outputs.push(...synapse);
  }

  public toString(): string {
    return this.type;
  }

  protected setOutputs(val: Synapse[]) {
    this._outputs = val;
  }

  private _inputs: Synapse[] = [];

  private _outputs: Synapse[] = [];
}
