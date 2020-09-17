import { Layer } from './layer';
import { LayerType } from './layer.type';

export class HiddenLayer extends Layer {
  readonly type = LayerType.Hidden;
  readonly id: string = '';

  constructor(id: string) {
    super();
    this.id = id;
  }
}
