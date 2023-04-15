import React from 'react';
import { Button, Container, Input } from './search-box.style';

interface IInputProps {
  autoComplete?: string;
}

interface IButtonProps {}

export interface ISearchBoxInput {
  input?: IInputProps | any;
  button?: IButtonProps | any;
}

export const SearchBoxInput = ({
  input = {
    autoComplete: 'off',
  },
  button,
  ...rest
}: ISearchBoxInput) => {
  return (
    <Container {...rest}>
      <Input {...input} />
      <Button {...button} />
    </Container>
  );
};
