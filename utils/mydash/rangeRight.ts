import {range} from './range';

export function rangeRight(
  start: number,
  end: number,
  step: number
): Array<any> {
  return range(end, step, start);
}
