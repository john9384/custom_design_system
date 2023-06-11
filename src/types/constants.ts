import { Colors } from '../constants/Colors';
import { Dimensions } from '../constants/Dimensions';
import { FontSize } from '../constants/FontSize';
import { Radius } from '../constants/Radius';
import { Spacing } from '../constants/Spacing';

export type ColorType = keyof typeof Colors;
export type DimensionType = keyof typeof Dimensions;
export type FontSizeType = keyof typeof FontSize;
export type RadiusType = keyof typeof Radius;
export type SpacingType = keyof typeof Spacing;
