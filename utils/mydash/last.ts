// [1, 2, 3, 4] => 4

export default function last(list: Array<any>): undefined | unknown {
  if (!Array.isArray(list)) {
    return undefined;
  }

  const {length} = list;
  return length ? list[length - 1] : undefined;
}
