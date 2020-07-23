import { Layer } from './layer.ts';
import { LayerType } from './layer.type.ts';

export class HiddenLayer extends Layer {
  public readonly type = LayerType.Hidden;
  public readonly id: string = '';

  constructor(id: string) {
    super();
    this.id = id;
  }
}