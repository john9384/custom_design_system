import React from 'react';
import styled from 'styled-components';
import { Dimensions } from '../../constants/Dimensions';
import { Radius } from '../../constants/Radius';
import { DimensionType, RadiusType } from '../../types/constants';

interface ImageProps {
  src: string;
  alt?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  width?: DimensionType;
  maxWidth?: DimensionType;
  minWidth?: DimensionType;
  height?: DimensionType;
  maxHeight?: DimensionType;
  minHeight?: DimensionType;
  borderRadius?: RadiusType;
}

export const CustomImage = (props: ImageProps) => {
  const { src, alt, objectFit } = props;
  return (
    <Div {...props}>
      <Image src={src} alt={alt} objectFit={objectFit} />
    </Div>
  );
};

type ImageDivType = Pick<
  ImageProps,
  | 'width'
  | 'maxWidth'
  | 'minWidth'
  | 'height'
  | 'maxHeight'
  | 'minHeight'
  | 'borderRadius'
>;

type ImageComponentProp = Pick<ImageProps, 'objectFit'>;

const Div = styled.div<ImageDivType & { children: React.ReactNode }>`
  width: ${({ width }) => (width ? Dimensions[width] : '100%')};
  height: ${({ height }) => (height ? Dimensions[height] : '100%')};
  ${({ maxWidth }) => maxWidth && `max-width: ${Dimensions[maxWidth]};`}
  ${({ minWidth }) => minWidth && `min-width: ${Dimensions[minWidth]};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${Dimensions[maxHeight]};`}
  ${({ minHeight }) => minHeight && `min-height: ${Dimensions[minHeight]};`}


  ${({ borderRadius }) =>
    borderRadius && `border-radius: ${Radius[borderRadius]};`}

  overflow: hidden;
  position: relative;
`;

const Image = styled.img<ImageComponentProp>`
  ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
`;
