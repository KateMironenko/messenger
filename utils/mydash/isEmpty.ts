function isLength(value: unknown): boolean {
    return (
      typeof value === "number" &&
      value > -1 &&
      value % 1 === 0 &&
      value <= Number.MAX_SAFE_INTEGER
    );
  }
   
  function isNil(value: unknown): boolean{
    return value === null || value === undefined;
  }
   
  function isArrayLike(value: any): boolean{
    return !isNil(value) && typeof value !== "function" && isLength(value.length);
  }
   
  function isObjectLike(value: unknown): boolean{
    return typeof value === "object" && value !== null;
  }
   
  function getTag(value: unknown): boolean | string{
    if (value === null) {
      return value === undefined ? "[object Undefined]" : "[object Null]";
    }
    return toString.call(value);
  }
   
  const objectProto = Object.prototype;
  function isPrototype(value: any): boolean{
    const ctor = value && value.constructor;
    const proto = (typeof ctor === "function" && ctor.prototype) || objectProto;
   
    return value === proto;
  }
   
  function isArguments(value: unknown): boolean{
    return isObjectLike(value) && getTag(value) === "[object Arguments]";
  }
   
  function isEmpty(value: any): boolean{
    if (value === null) {
      return true;
    }
   
    if (
      isArrayLike(value) &&
      (Array.isArray(value) ||
        typeof value === "string" ||
        typeof value.splice === "function" ||
        isArguments(value))
    ) {
      return !value.length;
    }
   
    const tag: boolean | string = getTag(value);
    if (tag === "[object Map]" || tag === "[object Set]") {
      return !value.size;
    }
   
    if (isPrototype(value)) {
      return !Object.keys(value).length;
    }
   
    return true;
  }