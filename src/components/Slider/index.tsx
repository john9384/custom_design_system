import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/Colors';
import { default as ReactSlider } from 'react-slider';

interface SliderProps {
  min: number;
  max: number;
  minText?: string;
  maxText?: string;
  values: number[];
  setValues: any;
}

const CustomSlider = ({
  min,
  max,
  values,
  setValues,
  minText,
  maxText,
}: SliderProps) => {
  return (
    <RangeDiv>
      <RangeSlider value={values} onChange={setValues} min={min} max={max} />
      <MaxMinDiv>
        <span>{minText ? minText : min}</span>
        <span>{max ? maxText : max}</span>
      </MaxMinDiv>
    </RangeDiv>
  );
};

const RangeDiv = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MaxMinDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 1.4rem;
  color: ${Colors.GRAY600};
`;

const RangeSlider = styled(ReactSlider)`
  height: 1rem;
  background-color: ${Colors.GRAY200};
  border-radius: 10px;

  .thumb {
    background-color: ${Colors.PRIMARY};
    border: 1px solid ${Colors.PRIMARY_DIM};
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-top: -5px;
    position: relative;
    cursor: pointer;

    &:focus {
      outline: none
    }
  }

  .thumb-0::after,
  .thumb-1::after {
    height: 100%;
    width: 100%;
    position: absolute;
    top: -100%;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: ${Colors.PRIMARY};
  }

  .thumb-0::after {
    content: attr(aria-valuenow);
    justify-content: flex-start;
  }

  .thumb-1::after {
    content: attr(aria-valuenow);
    justify-content: flex-end;
  }
}

.track-1 {
  background-color: ${Colors.PRIMARY};
  height: 100%;
  border-radius: 10px;
}
`;

export { CustomSlider as Slider };
