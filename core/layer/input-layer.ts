import { Layer } from './layer.ts';
import { LayerType } from './layer.type.ts';

export class InputLayer extends Layer {
  public readonly type = LayerType.Input;
}