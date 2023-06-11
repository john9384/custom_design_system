import React from 'react';
import sprite from 'assets/icon-pack/heroics/sprite.svg';
import styled from 'styled-components';
import { IconName } from 'types';
import { ColorType } from 'types/constants';
import { Colors } from 'constants/Colors';
import { Dimensions } from 'constants/Dimensions';

export interface IconProps {
  iconName: IconName;
  color?: ColorType;
  size?: 'D8' | 'D12' | 'D16' | 'D20' | 'D24' | 'D32' | 'D40';
  onClick?: () => void;
}

interface SVGProps {
  children: React.ReactNode;
  xmlns: string;
  color?: ColorType;
  size?: 'D8' | 'D12' | 'D16' | 'D20' | 'D24' | 'D32' | 'D40';
}

export const Icon = ({ iconName, color, size }: IconProps) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      color={color as ColorType}
      size={size}
    >
      <use href={'/sprite.svg/' + `#${iconName}`} />
    </SVG>
  );
};

export const IconButton = ({ iconName, color, size, onClick }: IconProps) => {
  return (
    <Div onClick={onClick}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        color={color as ColorType}
        size={size}
      >
        <use href={sprite + `#${iconName}`} />
      </SVG>
    </Div>
  );
};

const SVG: React.FC<SVGProps> = styled.svg<SVGProps>`
  fill: ${({ color, theme }) => (color ? Colors[color] : theme.color.icon)};
  stroke: ${({ color, theme }) => (color ? Colors[color] : theme.color.icon)};
  height: ${({ size }) => (size && Dimensions[size]) || Dimensions.D24};
  width: ${({ size }) => (size && Dimensions[size]) || Dimensions.D24};
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: ${({ color, theme }) =>
      (color && Colors[color]) || theme.color.icon} !important;
    stroke: ${({ color, theme }) =>
      (color && Colors[color]) || theme.color.icon} !important;
  }

  stop {
    stop-color: ${({ color, theme }) =>
      (color && Colors[color]) || theme.color.icon} !important;
    stroke: ${({ color, theme }) =>
      (color && Colors[color]) || theme.color.icon} !important;
  }
`;

const Div = styled('div')`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
`;
