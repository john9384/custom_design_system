import React from 'react';
import { ButtonProps } from 'types/button';
import { Button as CustomButton } from 'components';

/**
 * Primary UI component for user interaction
 */

type StoryBookButtonType = ButtonProps & { label: string };
export const Button = (props: StoryBookButtonType) => {
  return (
    <CustomButton {...props}>{props.label || 'Sample button'}</CustomButton>
  );
};
