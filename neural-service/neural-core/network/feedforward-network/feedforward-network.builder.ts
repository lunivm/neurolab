import { NetworkBuilder } from '../network.builder';
import { FeedforwardNetwork } from './feedforward-network';
import { InputLayer } from '../../layer/input-layer';
import { OutputLayer } from '../../layer/output-layer';
import { FeedforwardNetworkConfigInterface } from './feedforward-network-config.interface';
import { InputNeuron } from '../../neuron/input-neuron';
import { OutputNeuron } from '../../neuron/output-neuron';
import { LayerType } from '../../layer/layer.type';
import { Layer } from '../../layer/layer';
import { NetworkInputSynapse } from '../../synapse/network-input-synapse';
import { Synapse } from '../../synapse/synapse';
import { NetworkOutputSynapse } from '../../synapse/network-output-synapse';

export class FeedforwardNetworkBuilder extends NetworkBuilder {
  constructor(config: FeedforwardNetworkConfigInterface) {
    super(config);
  }

  reset(): void {
    this.result = new FeedforwardNetwork();
  }

  buildLayers(): void {
    this.result.layers = [
      new InputLayer(),
      new OutputLayer()
    ];
  }

  buildNeurons(): void {
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

  buildSynapses(): void {
    this.result.layers.forEach((item, index) => this.setLayerConnections(item, this.result.layers[index + 1]));
  }

  private setLayerConnections(curr: Layer, next: Layer): void {
    const nextLayerNeuronsCount = next && next.neurons ? next.neurons.length : 0;

    switch (curr.type) {
      case LayerType.Input:
        curr.neurons.forEach(neuron => {
          const nextLayerSynapses = new Array(nextLayerNeuronsCount)
            .fill(null)
            .map((item, index) => {
              const nextLayerNeuron = (next as Layer).neurons[index];
              const synapse = new Synapse(neuron, nextLayerNeuron);

              nextLayerNeuron.addInputSynapse(synapse);

              return synapse;
            });

          neuron.addInputSynapse(new NetworkInputSynapse(neuron));
          neuron.addOutputSynapse(...nextLayerSynapses);
        });
        return;

      case LayerType.Hidden:
        return;

      case LayerType.Output:
        curr.neurons.forEach(i => i.addOutputSynapse(new NetworkOutputSynapse(i)));
        return;
    }
  }
}
