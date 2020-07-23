import { NetworkBuilder } from './network.builder.ts';

export class NetworkDirector {
  public constructNetwork(builder: NetworkBuilder): void {
    builder.reset();

    builder.buildLayers();
    builder.buildNeurons();
    builder.buildSynapses();
  }
}