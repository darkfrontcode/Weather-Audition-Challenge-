import styled from 'styled-components';
import { COLORS, FONTS, PERCENTAGE, SIZES } from '../../../../../ui';

export const Container = styled.section`
  height: ${PERCENTAGE.FULL}%;
  flex-direction: column;
  display: flex;
  overflow-y: auto;
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
  justify-content: space-evenly;
`;

export const Period = styled.div`
  width: 240px;
  height: 360px;
`;

export const Card = styled.div`
  margin: ${SIZES.MEDIUM}px;
  border: 2px solid ${COLORS.GRAY.BOTTICELLI};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.MEDIUM + SIZES.LARGE}px;
  color: ${COLORS.BLUE.RICH};
  text-align: center;
`;

export const Day = styled.div`
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const Temperature = styled.div`
  font-size: ${SIZES.EXTRA_LARGE * 3}px;
`;

export const Unit = styled.div``;

export const ShortDescription = styled.div`
  line-height: 26px;
`;
