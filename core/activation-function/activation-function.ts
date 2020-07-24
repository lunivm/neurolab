import { ActivationFunctionType } from './activation-function-type.ts';

export type ActivationFunction = (x: number) => number;

function linear(x: number): number {
  return x;
}

function sigmoid(x: number): number {
  return 1 / (1 + Math.pow(Math.E, -x));
}

export function getActivationFunction(type: ActivationFunctionType): ActivationFunction {
  switch (type) {
    case ActivationFunctionType.Linear:
      return linear;
    case ActivationFunctionType.Sigmoid:
      return sigmoid;
    default:
      throw new Error('Invalid activation function type');
  }
}