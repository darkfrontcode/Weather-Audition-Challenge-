import styled from 'styled-components';
import { COLORS, FONTS, PERCENTAGE, SIZES } from '../../../../../ui';

/* =======================================
  - Structure
======================================= */

export const Container = styled.section`
  height: ${PERCENTAGE.FULL}%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const RaisedHands = styled.span`
  font-size: ${SIZES.EXTRA_LARGE}px;
`;

export const Heading = styled.h2`
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.EXTRA_LARGE * 2}px;
  color: ${COLORS.BLUE.RICH};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
