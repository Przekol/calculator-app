import { OperationData } from '../../../types';
import { Operation } from '../components/buttons/OperationButton';

const calculateResult = (operationData: OperationData): number => {
  const { num1, num2, operation } = operationData;

  if (operation === Operation.DIVIDE && num2 === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  switch (operation) {
    case Operation.ADD:
      return num1 + num2;
    case Operation.SUBTRACT:
      return num1 - num2;
    case Operation.MULTIPLY:
      return num1 * num2;
    case Operation.DIVIDE:
      return num1 / num2;
    default:
      throw new Error('Invalid operation');
  }
};

export { calculateResult };
