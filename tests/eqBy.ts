import * as R from '../ramda/dist/index';

declare const string_to_number: (x: string) => number;
declare const string: string;

// @dts-jest:pass:snap
R.eqBy(string_to_number, string);
// @dts-jest:pass:snap
R.eqBy(string_to_number)(string)(string);
// @dts-jest:pass:snap
R.eqBy(string_to_number, string, string);
