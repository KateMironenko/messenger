import { isEmpty } from "./isEmpty";

export function getObject(
  obj: unknown,
  path: string,
  defaultValue: unknown
): unknown {
  const keys = path.split(".");

  let result: any = obj;
  for (let key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }

    if (isEmpty(result) && typeof result != "function") {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}
