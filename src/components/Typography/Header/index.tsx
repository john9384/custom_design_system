import { Colors } from 'constants/Colors';
import { Spacing } from 'constants/Spacing';
import { HeaderProps } from '../../../types/typography';
import styled from 'styled-components';

const H1 = styled.h1<HeaderProps>`
  color: ${({ color, theme }) => (color ? Colors[color] : theme.color.text)};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${Spacing[letterSpacing]};`}
  ${({ textAlign }) => textAlign && `text-align: ${[textAlign]};`}
  font-weight: ${({ weight }) => (weight ? weight : 'bolder')};

  font-size: 2.8rem;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const H2 = styled.h2<HeaderProps>`
  color: ${({ color, theme }) => (color ? Colors[color] : theme.color.text)};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${Spacing[letterSpacing]};`}
  ${({ textAlign }) => textAlign && `text-align: ${[textAlign]};`}
  font-weight: ${({ weight }) => (weight ? weight : 'bolder')};

  font-size: 2rem;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const H3 = styled.h3<HeaderProps>`
  color: ${({ color, theme }) => (color ? Colors[color] : theme.color.text)};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${Spacing[letterSpacing]};`}
  ${({ textAlign }) => textAlign && `text-align: ${[textAlign]};`}
  font-weight: ${({ weight }) => (weight ? weight : 'bolder')};

  font-size: 1.6rem;
  margin: 0;
`;

export const Header = { H1, H2, H3 };
