enum Context {
    sum = "sum",
    multiply = "multiply",
    subtract = "subtract",
}

type CalculateFnReturn = number | string;

type CalcualteByContext = (context: Context, valueArr: number[]) => CalculateFnReturn;