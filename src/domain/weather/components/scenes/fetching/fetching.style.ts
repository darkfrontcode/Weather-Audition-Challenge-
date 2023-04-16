import styled from 'styled-components';
import { COLORS, FONTS, PERCENTAGE, SIZES } from '../../../../../ui';

export const Container = styled.section`
  height: ${PERCENTAGE.FULL}%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Truck = styled.span`
  font-size: ${SIZES.EXTRA_LARGE}px;
  transform: scale(-1, 1);
  margin: 0;
  padding: 0;
`;

export const Heading = styled.h2`
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.EXTRA_LARGE * 2}px;
  color: ${COLORS.BLUE.RICH};
  margin: 0;
  padding: 0;
`;
