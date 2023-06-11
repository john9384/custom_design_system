import React from 'react';
import styled from 'styled-components';
import { Colors } from 'constants/Colors';
import { Dimensions } from 'constants/Dimensions';
import { Radius } from 'constants/Radius';
import { Spacing } from 'constants/Spacing';
import { BoxProps } from 'types/containers';
import { ColorType } from 'types/constants';

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  ${({ width }) => width && `width: ${Dimensions[width]};`}
  ${({ height }) => height && `height: ${Dimensions[height]};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${Dimensions[maxWidth]};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${Dimensions[maxHeight]};`}
  ${({ minWidth }) => minWidth && `min-width: ${Dimensions[minWidth]};`}
  ${({ minHeight }) => minHeight && `min-height: ${Dimensions[minHeight]};`}

  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  ${({ gap }) => gap && `gap: ${Spacing[gap]};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  

  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${Colors[backgroundColor]};`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}

  ${({ margin }) => margin && `margin: ${Spacing[margin]};`}
  ${({ marginTop }) => marginTop && `margin-top: ${Spacing[marginTop]};`}
  ${({ marginRight }) =>
    marginRight && `margin-right: ${Spacing[marginRight]};`}
  ${({ marginBottom }) =>
    marginBottom && `margin-bottom: ${Spacing[marginBottom]};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${Spacing[marginLeft]};`}
  ${({ marginX }) =>
    marginX &&
    `margin-left: ${Spacing[marginX]}; margin-right: ${Spacing[marginX]};`}
  ${({ marginY }) =>
    marginY &&
    `margin-top: ${Spacing[marginY]}; margin-bottom: ${Spacing[marginY]};`}

  ${({ padding }) => padding && `padding: ${Spacing[padding]};`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${Spacing[paddingTop]};`}
  ${({ paddingRight }) =>
    paddingRight && `padding-right: ${Spacing[paddingRight]};`}
  ${({ paddingBottom }) =>
    paddingBottom && `padding-bottom: ${Spacing[paddingBottom]};`}
  ${({ paddingLeft }) =>
    paddingLeft && `padding-left: ${Spacing[paddingLeft]};`}
  ${({ paddingX }) =>
    paddingX &&
    `padding-left: ${Spacing[paddingX]}; padding-right: ${Spacing[paddingX]};`}
  ${({ paddingY }) =>
    paddingY &&
    `padding-top: ${Spacing[paddingY]}; padding-bottom: ${Spacing[paddingY]};`}

  ${({ borderRadius }) => {
    if (!borderRadius) return;
    if (typeof borderRadius === 'string')
      return `border-radius: ${Radius[borderRadius]};`;

    if (borderRadius.all) return `border-radius: ${Radius[borderRadius.all]};`;

    borderRadius.topRight &&
      `border-top-right-radius: ${Radius[borderRadius.topRight]};`;
    borderRadius.bottomRight &&
      `border-bottom-right-radius: ${Radius[borderRadius.bottomRight]};`;
    borderRadius.bottomLeft &&
      `border-bottom-left-radius: ${Radius[borderRadius.bottomLeft]};`;
    borderRadius.topLeft &&
      `border-top-left-radius: ${Radius[borderRadius.topLeft]};`;
  }}

  ${({ border, theme }) => {
    if (!border) return;

    const borderStyle = border.style || 'solid';
    const borderColor = border.color
      ? Colors[border.color]
      : theme.color.border;
    if (typeof border === 'string')
      return `border: ${Dimensions[border]} ${borderStyle} ${borderColor};`;

    if (border.all)
      return `border: ${Dimensions[border.all]} ${borderStyle} ${borderColor};`;

    border.top &&
      `border-top: ${Dimensions[border.top]} ${borderStyle} ${borderColor};`;
    border.right &&
      `border-right: ${
        Dimensions[border.right]
      } ${borderStyle} ${borderColor};`;
    border.bottom &&
      `border-bottom: ${
        Dimensions[border.bottom]
      } ${borderStyle} ${borderColor};`;
    border.left &&
      `border-left: ${Dimensions[border.left]} ${borderStyle} ${borderColor};`;
  }}

  ${({ position }) => position && `position: ${position};`}
`;

export const BoxWithBackground = styled(Box)<{ background?: ColorType }>`
  background-color: ${({ background, theme }) =>
    background ? Colors[background] : theme.color.background};
`;
