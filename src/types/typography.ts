import React from 'react';
import { ColorType, FontSizeType } from './constants';

export type LineHeight = 'S0' | 'S16' | 'S24';
export type LetterSpacing = 'S1' | 'S2';
export type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'initial'
  | 'inherit';

export interface TextProps {
  children: string | React.ReactNode;
  color?: ColorType;
  colorType?: 'plain' | 'additional' | 'bold' | 'black';
  size?: FontSizeType;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  textAlign?: TextAlign;
  whiteSpace?: 'normal' | 'nowrap';
  overflow?: 'hidden' | 'auto';
  textOverflow?: 'ellipsis' | 'inherit';
}

export interface LinkProps {
  link: string;
}

export type LinkTextProp = TextProps & LinkProps;

export interface HeaderProps {
  children: string | React.ReactNode;
  color?: ColorType;
  letterSpacing?: LetterSpacing;
  textAlign?: TextAlign;
  weight?: '500' | '600' | '700' | 'semibold' | 'bold' | 'bolder';
}
