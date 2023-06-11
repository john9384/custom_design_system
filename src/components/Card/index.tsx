import React from 'react';
import { Dimensions } from 'constants/Dimensions';
import { Spacing } from 'constants/Spacing';
import {
  AlignItems,
  BorderRadius,
  FlexDirection,
  FlexGrow,
  FlexWrap,
  JustifyContent,
} from '../../types/containers';
import styled from 'styled-components';
import { DimensionType, SpacingType } from 'types/constants';

interface CardProps {
  children?: React.ReactNode;
  flexWrap?: FlexWrap;
  flexGrow?: FlexGrow;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: SpacingType;
  wrap?: boolean;
  padding?: SpacingType;
  paddingTop?: SpacingType;
  paddingRight?: SpacingType;
  paddingBottom?: SpacingType;
  paddingLeft?: SpacingType;
  paddingX?: SpacingType;
  paddingY?: SpacingType;
  borderRadius?: BorderRadius;
  width?: DimensionType;
  maxWidth?: DimensionType;
  minWidth?: DimensionType;
  height?: DimensionType;
  maxHeight?: DimensionType;
  minHeight?: DimensionType;
  onClick?: () => void;
  withShadow?: boolean;
  withBorder?: boolean;
}

export const Card: React.FC<CardProps> = styled.div<CardProps>`
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
    justifyContent && `justifyContent: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`}

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

  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.05);
  ${({ withBorder, theme }) =>
    withBorder && `border: 1px solid rgba(0, 0, 0, 0.05); box-shadow: none;`};
`;
