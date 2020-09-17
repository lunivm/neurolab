import { Layer } from './layer';
import { LayerType } from './layer.type';

export class OutputLayer extends Layer {
  readonly type = LayerType.Output;
}
