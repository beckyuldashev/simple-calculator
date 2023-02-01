const OPERATORS = {
  sum: '+',
  substract: '-',
  multiply: '*',
  divide: '/',
};


function calculate({
  a,
  b,
  operator
}) {
  let result = null;

  switch (operator) {
    case OPERATORS.sum:
      result = sum(a, b)
      break;

    case OPERATORS.substract:
      result = substract(a, b)
      break;

    case OPERATORS.multiply:
      result = multiply(a, b)
      break;

    case OPERATORS.divide:
      result = divide(a, b)
      break;

    default:
      result = 'Что-то пошло не так!'
      break;
  }

  return result;
}
