import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap -> number
R.divide(number, number);
// @dts-jest:pass:snap -> number
R.divide(number)(number);
