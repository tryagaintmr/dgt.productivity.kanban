import { IsoToShortPipe } from './iso-to-short.pipe';

describe('IsoToShortPipe', () => {

  let pipe: IsoToShortPipe;

  beforeEach(() => {
    pipe = new IsoToShortPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform ISO string to formatted date in french', () => {
    const input = '2022-03-16T15:12:00.000Z';
    const output = pipe.transform(input);
    expect(output).toBe('16 mars 2022');
  });

  it('should return "date is undefined" for undefined input', () => {
    const input = undefined;
    const output = pipe.transform(input);
    expect(output).toBe('date is undefined');
  });
});
