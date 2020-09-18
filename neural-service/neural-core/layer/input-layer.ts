import { Layer } from './layer';
import { LayerType } from './layer.type';

export class InputLayer extends Layer {
  public readonly type = LayerType.Input;
}
