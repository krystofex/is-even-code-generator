import { Generate } from '../src';

describe('Test if generated code works', () => {
  const IsEven = (num: number) => eval('(' + Generate(0, 100) + ')')(num);

  it('test', () => {
    expect(IsEven(1)).toEqual(false);
    expect(IsEven(2)).toEqual(true);
    // if it works now, it will probably work with any number but whatever
    expect(IsEven(3)).toEqual(false);
    expect(IsEven(4)).toEqual(true);
    expect(IsEven(5)).toEqual(false);
    expect(IsEven(6)).toEqual(true);
    expect(IsEven(7)).toEqual(false);
  });
});
