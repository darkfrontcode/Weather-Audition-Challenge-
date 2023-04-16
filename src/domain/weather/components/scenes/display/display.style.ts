import styled from 'styled-components';
import { COLORS, FONTS, PERCENTAGE, SIZES } from '../../../../../ui';

export const Container = styled.section`
  height: ${PERCENTAGE.FULL}%;
  flex-direction: column;
  display: flex;
`;

export const Heading = styled.h2`
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.EXTRA_LARGE}px;
  color: ${COLORS.BLUE.RICH};
  text-align: center;
  line-height: 80px;
  margin: 0;
  padding: 0;
`;

export const Grid = styled.section`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
`;

export const Period = styled.div`
  width: ${PERCENTAGE.HALF / 2}%;
`;
