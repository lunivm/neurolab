import { Layer } from './layer';
import { LayerType } from './layer.type';

export class InputLayer extends Layer {
  readonly type = LayerType.Input;
}
