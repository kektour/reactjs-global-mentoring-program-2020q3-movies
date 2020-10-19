import { getColorByRating } from './common';

describe('Helpers', () => {
  describe('Common', () => {
    describe('getColorByRating', () => {
      it('should return red color in range > 0 and <= 2', () => {
        expect(getColorByRating(0)).toEqual('red');
        expect(getColorByRating(0.5)).toEqual('red');
        expect(getColorByRating(1)).toEqual('red');
        expect(getColorByRating(1.5)).toEqual('red');
        expect(getColorByRating(2)).toEqual('red');
      });

      it('should return orange color in range > 2 and <= 4', () => {
        expect(getColorByRating(2.5)).toEqual('orange');
        expect(getColorByRating(3)).toEqual('orange');
        expect(getColorByRating(3.5)).toEqual('orange');
        expect(getColorByRating(4)).toEqual('orange');
      });

      it('should return yellow color in range > 4 and <= 6', () => {
        expect(getColorByRating(4.5)).toEqual('yellow');
        expect(getColorByRating(5)).toEqual('yellow');
        expect(getColorByRating(5.5)).toEqual('yellow');
        expect(getColorByRating(6)).toEqual('yellow');
      });

      it('should return green color in range > 6 and <= 8', () => {
        expect(getColorByRating(6.5)).toEqual('green');
        expect(getColorByRating(7)).toEqual('green');
        expect(getColorByRating(7.5)).toEqual('green');
        expect(getColorByRating(8)).toEqual('green');
      });

      it('should return deepskyblue color in range > 8', () => {
        expect(getColorByRating(8.5)).toEqual('deepskyblue');
        expect(getColorByRating(9)).toEqual('deepskyblue');
        expect(getColorByRating(9.5)).toEqual('deepskyblue');
        expect(getColorByRating(10)).toEqual('deepskyblue');
      });
    });
  });
});
