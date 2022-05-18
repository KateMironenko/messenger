// [1, 2, 3, 4] => 1

export function first(list: Array<any>): undefined | unknown {
  if (!Array.isArray(list)) {
    return undefined;
  }

  return list.length ? list[0] : undefined;
}
