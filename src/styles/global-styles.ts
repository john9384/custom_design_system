import { createGlobalStyle } from 'styled-components';
import { Colors } from 'constants/Colors';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
    width: 100%;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    max-width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.bodyBackground};
  }

  button {
    border: none;
  }

  a {
    color: inherit;
    transition: all 0.3s;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: ${Colors.PRIMARY};
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  .scroll {
    .scrollbar-track {
      background: transparent;

      &.scrollbar-track-y {
        width: 4px;
      }
    }

    .scrollbar-thumb {
      opacity: 0.5;
      transition: height 0.3s;
      cursor: pointer;
      background: ${p => p.theme.color.colorScrollbar};
    }
  }
`;
