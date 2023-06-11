import React from 'react';
import { Colors } from 'constants/Colors';
import { Spacing } from 'constants/Spacing';
import { Dimensions } from 'constants/Dimensions';
import { ButtonProps } from '../../types/button';
import styled from 'styled-components';

const Base: React.FC<ButtonProps> = styled.button<ButtonProps>`
  height: ${({ height }) => (height ? Dimensions[height] : 'fit-content')};
  width: ${({ width }) => (width ? Dimensions[width] : 'fit-content')};
  padding: 1rem 1.6rem;
  ${({ paddingX }) =>
    paddingX &&
    `padding-left: ${Spacing[paddingX]}; padding-right: ${Spacing[paddingX]};`}

  ${({ paddingY }) =>
    paddingY &&
    `padding-top: ${Spacing[paddingY]}; padding-bottom: ${Spacing[paddingY]};`}

  ${({ disabled }) => disabled && `cursor: not-allowed;`}

  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 1.6rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  outline: none;

  &:hover {
    opacity: 0.5;
  }
`;

const Primary = styled(Base)<ButtonProps>`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${Colors.WHITE};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;

const Secondary = styled(Base)<ButtonProps>`
  background-color: ${Colors.TRANSPARENT};
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;

// type AllowedButtonProps = Pick<
//   ButtonProps,
//   | 'children'
//   | 'onClick'
//   | 'disabled'
//   | 'width'
//   | 'height'
//   | 'paddingX'
//   | 'paddingY'
// >;

// type ButtonLinProps = AllowedButtonProps & {
//   link: string;
//   background?: ColorType;
//   color?: ColorType;
// };

/* const Link = styled(NextLink)<ButtonLinProps>`
  background-color: none;
`; */

export const Button = (props: ButtonProps) => {
  switch (props.type) {
    case 'secondary':
      return <Secondary {...props}>{props.children}</Secondary>;
    default:
      return <Primary {...props}>{props.children}</Primary>;
  }
};
