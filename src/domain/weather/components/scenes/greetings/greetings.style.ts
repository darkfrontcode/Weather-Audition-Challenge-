import styled from 'styled-components';
import { COLORS, FONTS, PERCENTAGE, SIZES } from '../../../../../ui';

export const Container = styled.section`
  height: ${PERCENTAGE.FULL}%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const RaisedHands = styled.span`
  font-size: ${SIZES.EXTRA_LARGE * 2}px;
  text-align: center;
  margin: 0 0 ${SIZES.LARGE + SIZES.MEDIUM}px 0;
  padding: 0;
`;

export const Heading = styled.h2`
font-family: ${FONTS.DONGLE}, cursive;
font-size: ${SIZES.EXTRA_LARGE * 2}px;
color: ${COLORS.BLUE.RICH};
text-align: center;
line-height: 80px;
margin: 0;
padding: 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
