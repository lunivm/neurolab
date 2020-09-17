import { NetworkBuilder } from './network.builder';

export class NetworkDirector {
  constructNetwork(builder: NetworkBuilder): void {
    builder.reset();

    builder.buildLayers();
    builder.buildNeurons();
    builder.buildSynapses();
  }
}
