import { Layer } from './layer';
import { LayerType } from './layer.type';

export class HiddenLayer extends Layer {
  public readonly type = LayerType.Hidden;
  public readonly id: string = '';

  constructor(id: string) {
    super();
    this.id = id;
  }
}
