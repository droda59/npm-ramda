import * as R from '../ramda/dist/index';

declare const object: object;
declare const string: string;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap
R.pick([string])(object);
// @dts-jest:pass:snap
R.pick([string], object);

// @dts-jest:pass:snap
R.pick(['a', 'c'])(a_1_b_2_c_3);
// @dts-jest:pass:snap
R.pick(['a', 'c'], a_1_b_2_c_3);
