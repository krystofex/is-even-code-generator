export const Generate = (min: number, max: number): string => {
  let generatedFunction = 'function IsEven(number){\n';

  for (let number = min; number < max; number++)
    generatedFunction += ` ${
      number == 0 ? '' : 'else '
    }if (number == ${number}) return ${number % 2 == 0};\n`;

  generatedFunction += '}';

  return generatedFunction;
};
