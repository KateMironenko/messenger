function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

function range(start=0, end, step, isRight) {
     if (end === undefined) {
    end = start;
          start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;
  return isRight ? baseRange(start, end, step).reverse() : baseRange(start, end, step);
}