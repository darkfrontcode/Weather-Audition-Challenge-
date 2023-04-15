import styled from 'styled-components';
import { COLORS, FONTS, SIZES, PERCENTAGE } from '../../../ui';

export const Container = styled.div`
  display: flex;
`;

export const Input = styled.input`
  flex: 2;
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.LARGE + SIZES.SMALL}px;
  color: ${COLORS.GRAY.LIGHT_SLATE};
  background: ${COLORS.BLUE.BIG_STONE};
  border: 2px solid ${COLORS.BLUE.BIG_STONE};
  border-top-left-radius: ${SIZES.MEDIUM}px;
  border-bottom-left-radius: ${SIZES.MEDIUM}px;
  line-height: ${SIZES.LARGE * 2}px;
  box-sizing: border-box;
  height: ${SIZES.LARGE * 2}px;
  width: ${PERCENTAGE.FULL}%;
  padding: 0 ${SIZES.MEDIUM}px;
  margin: 0;
  transition: ease all .15s;

  ::placeholder {
    color: ${COLORS.GRAY.LIGHT_SLATE};
    opacity: 0.25;
  }

  :focus, :hover {
    outline: none;
    box-shadow: 0px 0px 14px 4px rgba(235, 31, 52, 0.5);
    border-color: ${COLORS.RED.ALIZARIN_CRIMSON};
  }
`;

export const Button = styled.button`
  flex: 1;
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.LARGE + SIZES.SMALL}px;
  color: white;
  border: none;
  border-top-right-radius: ${SIZES.MEDIUM}px;
  border-bottom-right-radius: ${SIZES.MEDIUM}px;
  line-height: ${SIZES.LARGE * 2}px;
  box-sizing: border-box;
  height: ${SIZES.LARGE * 2}px;
  width: ${PERCENTAGE.FULL}%;
  padding: 0;
  margin: 0;
  background-color: ${COLORS.RED.ALIZARIN_CRIMSON};
  cursor: pointer;
  transition: ease all .15s;

  :focus, :hover {
    outline: none;
    box-shadow: 0px 0px 14px 4px rgba(235, 31, 52, 0.5);
    border-color: ${COLORS.RED.ALIZARIN_CRIMSON};
    line-height: ${SIZES.LARGE * 2 + SIZES.SMALL}px;
  }
`;
