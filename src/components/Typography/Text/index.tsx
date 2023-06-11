import styled from 'styled-components';
import { Colors } from 'constants/Colors';
import { FontSize } from 'constants/FontSize';
import { Spacing } from 'constants/Spacing';
import { Link } from 'react-router-dom';
import { LinkTextProp, TextProps } from 'types/typography';

const Plain = styled.p<TextProps>`
  color: ${({ color, theme }) => (color ? Colors[color] : theme.color.text)};
  font-size: ${({ size }) => (size ? FontSize[size] : '1.6rem')};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${Spacing[letterSpacing]};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${Spacing[lineHeight]};`}
  ${({ textAlign }) => textAlign && `text-align: ${[textAlign]};`}
`;

const Bold = styled.strong<TextProps>`
  color: ${({ color, theme }) => (color ? Colors[color] : theme.color.text)};
  font-size: ${({ size }) => (size ? FontSize[size] : '1.6rem')};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${Spacing[letterSpacing]};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${Spacing[lineHeight]};`}
  ${({ textAlign }) => textAlign && `text-align: ${[textAlign]};`}
`;

const Emphasized = styled.em<TextProps>`
  color: ${({ color, theme }) => (color ? Colors[color] : theme.color.text)};
  font-size: ${({ size }) => (size ? FontSize[size] : '1.6rem')};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${Spacing[letterSpacing]};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${Spacing[lineHeight]};`}
  ${({ textAlign }) => textAlign && `text-align: ${[textAlign]};`}
`;

const LinkComponent = (props: LinkTextProp) => {
  return (
    <LinkDiv {...props} to={props.link}>
      <LinkTag>{props.children}</LinkTag>
    </LinkDiv>
  );
};

const LinkDiv = styled(Link)<LinkTextProp>`
  color: ${Colors.PRIMARY};
  font-size: ${({ size }) => (size ? FontSize[size] : '1.6rem')};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${Spacing[letterSpacing]};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${Spacing[lineHeight]};`}
  ${({ textAlign }) => textAlign && `text-align: ${[textAlign]};`}
`;

const LinkTag = styled.a`
  color: ${Colors.PRIMARY};
  font-size: inherit;
`;

export const Text = {
  Plain,
  Bold,
  Emphasized,
  Link: LinkComponent,
};
