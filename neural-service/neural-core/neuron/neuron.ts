import { Synapse } from '../synapse/synapse';

export abstract class Neuron {
  get inputs(): Synapse[] {
    return this._inputs.slice();
  }

  get outputs(): Synapse[] {
    return this._outputs.slice();
  }

  addInputSynapse(...synapse: Synapse[]) {
    this._inputs.push(...synapse);
  }

  addOutputSynapse(...synapse: Synapse[]) {
    this._outputs.push(...synapse);
  }

  protected setOutputs(val: Synapse[]) {
    this._outputs = val;
  }

  private _inputs: Synapse[] = [];

  private _outputs: Synapse[] = [];
}
