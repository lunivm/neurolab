import { Layer } from './layer.ts';
import { LayerType } from './layer.type.ts';

export class OutputLayer extends Layer {
  public readonly type = LayerType.Output;
}