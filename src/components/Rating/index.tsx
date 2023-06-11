import styled from 'styled-components';
import { Icon } from 'components/Icon';

const RatingDiv = styled.div<{ isDarkMode?: boolean }>`
  display: flex;
  gap: 0.1rem;
  ${({ isDarkMode }) => isDarkMode && `opacity: 0.8;`}
`;

export const Rating = ({ isDarkMode, rating }: any) => {
  const starTotal = [1, 2, 3, 4, 5];
  const validStar = starTotal.splice(0, rating);
  const emptyStar = starTotal;

  return (
    <RatingDiv isDarkMode={isDarkMode}>
      {validStar.length > 0 &&
        validStar.map(index => (
          // Todo Add to sprite
          <Icon iconName="star" key={index} size="D24" />
        ))}
      {emptyStar.length > 0 &&
        emptyStar.map(index => (
          // Todo Add to sprite
          <Icon iconName="empty-star" key={index} size="D24" />
        ))}
    </RatingDiv>
  );
};
