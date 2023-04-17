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
  font-size: ${SIZES.EXTRA_LARGE + SIZES.LARGE + SIZES.MEDIUM}px;
  color: ${COLORS.BLUE.RICH};
  border-bottom: 3px solid ${COLORS.RED.ALIZARIN_CRIMSON};
  text-align: center;
  line-height: 100px;
  margin: 0;
  padding: 0;
`;

export const Address = styled.h3`
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.LARGE + SIZES.MEDIUM}px;
  color: ${COLORS.GRAY.REGENT};
  margin-top: ${SIZES.LARGE}px;
  margin-bottom: ${SIZES.LARGE * 2}px;
`;

export const Grid = styled.section`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Period = styled.div`
  width: 240px;
  height: 480px;
  display: flex;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.MEDIUM + SIZES.LARGE}px;
  color: ${COLORS.BLUE.RICH};
  text-align: center;
  background-color: white;
  border: 2px solid ${COLORS.GRAY.BOTTICELLI};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  margin-bottom: ${SIZES.LARGE + SIZES.MEDIUM}px;
`;

export const Day = styled.div`
  display: flex;
  margin-bottom: ${SIZES.LARGE + SIZES.MEDIUM}px;
`;

export const Name = styled.span`
  border-bottom: 3px solid ${COLORS.RED.ALIZARIN_CRIMSON};
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Source = styled.img`
width: 40%;
border-radius: ${PERCENTAGE.HALF}%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Temperature = styled.div`
  font-size: ${SIZES.EXTRA_LARGE * 3}px;
  line-height: 80px;
`;

export const Unit = styled.div`
  font-size: ${SIZES.EXTRA_LARGE}px;
  font-weight: bolder;
  color: ${COLORS.RED.ALIZARIN_CRIMSON};
`;

export const ShortDescription = styled.div`
  line-height: 26px;
`;
