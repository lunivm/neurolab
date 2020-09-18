import { Layer } from './layer';
import { LayerType } from './layer.type';

export class OutputLayer extends Layer {
  public readonly type = LayerType.Output;
}
