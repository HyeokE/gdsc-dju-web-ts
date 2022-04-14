import 'styled-components';

import { colors } from './colors';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
  }
}
