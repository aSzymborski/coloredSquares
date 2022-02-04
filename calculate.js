export const calculateByContext = (context, valueArr) => {
  if (
    !context ||
    !["sum", "subtract", "multiply"].includes(context) ||
    !valueArr ||
    valueArr.length < 1 ||
    !(valueArr instanceof Array)
  ) {
    return "Wrong input data";
  }

  return valueArr.reduce((acc, value) => {
    if (context === "sum") return acc + value;
    if (context === "subtract") return acc - value;
    if (context === "multiply") {
      if (value === 0) return acc;
      return acc * value;
    }

    return acc;
  });
};
