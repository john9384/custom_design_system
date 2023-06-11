import { ColorType, DimensionType, RadiusType, SpacingType } from './constants';

export type FlexDirection = 'row' | 'column';
export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexGrow = number | 'initial' | 'inherit' | 'unset' | 'auto';
export type BorderWidthType = 'D1' | 'D2';
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface BorderRadius {
  all?: RadiusType;
  topRight?: RadiusType;
  bottomRight?: RadiusType;
  bottomLeft?: RadiusType;
  topLeft?: RadiusType;
}

export interface Border {
  color?: ColorType;
  style?: 'solid' | 'dashed' | 'dotted' | 'none';
  all?: BorderWidthType;
  top?: BorderWidthType;
  right?: BorderWidthType;
  bottom?: BorderWidthType;
  left?: BorderWidthType;
}

export interface BoxProps {
  children?: React.ReactNode;
  flexWrap?: FlexWrap;
  flexGrow?: FlexGrow;
  flex?: number;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: SpacingType;
  wrap?: boolean;
  backgroundColor?: ColorType;
  margin?: SpacingType;
  marginTop?: SpacingType;
  marginRight?: SpacingType;
  marginBottom?: SpacingType;
  marginLeft?: SpacingType;
  marginX?: SpacingType;
  marginY?: SpacingType;
  padding?: SpacingType;
  paddingTop?: SpacingType;
  paddingRight?: SpacingType;
  paddingBottom?: SpacingType;
  paddingLeft?: SpacingType;
  paddingX?: SpacingType;
  paddingY?: SpacingType;
  borderRadius?: RadiusType | BorderRadius;
  border?: Border;
  width?: DimensionType;
  maxWidth?: DimensionType;
  minWidth?: DimensionType;
  height?: DimensionType;
  maxHeight?: DimensionType;
  minHeight?: DimensionType;
  position?: 'relative' | 'absolute';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  onClick?: () => void;
  cursor?: string;
}
