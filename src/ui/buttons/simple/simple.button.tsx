import React from 'react';
import { Button } from './simple.style';

export interface ISimpleButtonProps {}

export const SimpleButton = (props: ISimpleButtonProps | any) => (
  <Button {...props} />
);
