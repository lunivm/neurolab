import { NetworkBuilder } from '../network.builder.ts';
import { FeedforwardNetwork } from './feedforward-network.ts';
import { InputLayer } from '../../layer/input-layer.ts';
import { OutputLayer } from '../../layer/output-layer.ts';
import { FeedforwardNetworkConfig } from './feedforward-network-config.ts';
import { InputNeuron } from '../../neuron/input-neuron.ts';
import { OutputNeuron } from '../../neuron/output-neuron.ts';
import { LayerType } from '../../layer/layer.type.ts';
import { Layer } from '../../layer/layer.ts';
import { NetworkInputSynapse } from '../../synapse/network-input-synapse.ts';
import { Synapse } from '../../synapse/synapse.ts';
import { NetworkOutputSynapse } from '../../synapse/network-output-synapse.ts';

export class FeedforwardNetworkBuilder extends NetworkBuilder {
  constructor(config: FeedforwardNetworkConfig) {
    super(config);
  }

  public reset(): void {
    this.result = new FeedforwardNetwork();
  }

  public buildLayers(): void {
    this.result.setLayers([
      new InputLayer(),
      new OutputLayer()
    ]);
  }

  public buildNeurons(): void {
    const i = [
      new InputNeuron(),
      new InputNeuron()
    ];
    const o = [
      new OutputNeuron()
    ];

    this.result.layers[0].setNeurons(i);
    this.result.layers[1].setNeurons(o);
  }

  public buildSynapses(): void {
    this.result.layers.forEach((item, index) => this.setLayerConnections(item, this.result.layers[index + 1] || null));
  }

  private setLayerConnections(curr: Layer, next: Layer | null): void {
    const nextLayerNeuronsCount = next && next.neurons ? next.neurons.length : 0;

    switch (curr.type) {
      case LayerType.Input:
        curr.neurons.forEach(neuron => {
          const nextLayerSynapses = new Array(nextLayerNeuronsCount)
            .fill(null)
            .map((item, index) => {
              const nextLayerNeuron = (next as Layer).neurons[index];
              const synapse = new Synapse(neuron, nextLayerNeuron);

              nextLayerNeuron.input.push(synapse);

              return synapse;
            });

          neuron.input.push(new NetworkInputSynapse(neuron));
          neuron.output.push(...nextLayerSynapses);
        });
        return;

      case LayerType.Hidden:
        return;

      case LayerType.Output:
        curr.neurons.forEach(i => i.output.push(new NetworkOutputSynapse(i)));
        return;
    }
  }
}