import React, { useState } from 'react';
import { Input } from './simple.style';

export interface ISimpleInputProps {
  autoComplete?: string;
}

export const SimpleInput = ({
  autoComplete = 'off',
  ...props
}: ISimpleInputProps | any) => <Input autoComplete={autoComplete} {...props} />;
