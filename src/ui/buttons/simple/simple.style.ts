import styled, { css } from 'styled-components';
import { COLORS, FONTS, SIZES, PERCENTAGE } from '../../../ui';

export const Button = styled.button`
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.LARGE + SIZES.SMALL}px;
  color: white;
  border: none;
  border-radius: ${SIZES.MEDIUM}px;
  line-height: ${SIZES.LARGE * 2}px;
  box-sizing: border-box;
  height: ${SIZES.LARGE * 2}px;
  width: ${PERCENTAGE.FULL}%;
  padding: 0;
  margin: 0;
  background-color: ${COLORS.RED.ALIZARIN_CRIMSON};
  cursor: pointer;
  transition: ease all .15s;

  :focus:not(:disabled),
  :hover:not(:disabled) {
    outline: none;
    box-shadow: 0px 0px 14px 4px rgba(235, 31, 52, 0.5);
    border-color: ${COLORS.RED.ALIZARIN_CRIMSON};
    line-height: ${SIZES.LARGE * 2 + SIZES.SMALL}px;
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
