import styled, { css } from 'styled-components';
import {
  COLORS,
  FONTS,
  PERCENTAGE,
  SearchBoxInput,
  SimpleButton,
  SIZES,
} from '../../../../ui';
import { SimpleInput } from '../../../../ui';

/* =======================================
  - Setup
======================================= */

const fontStyle = css`
  font-family: ${FONTS.DONGLE}, cursive;
  font-size: ${SIZES.MEDIUM + SIZES.LARGE}px;
  color: white;
`;

/* =======================================
  - Structure
======================================= */

export const Container = styled.section``;

export const Form = styled.form`
  padding: 0 ${SIZES.LARGE + SIZES.MEDIUM}px;
  box-sizing: border-box;
`;

export const Divider = styled.div`
  position: relative;
  height: 40px;
`;

export const HorizontalLine = styled.hr`
  position: absolute;
  width: ${PERCENTAGE.FULL}%;
  top: ${PERCENTAGE.HALF}%;
  bottom: ${PERCENTAGE.HALF}%;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid ${COLORS.BLUE.BIG_STONE};
  border-top: none;
  box-sizing: border-box;
`;

export const Or = styled.span`
  ${fontStyle}
  color: ${COLORS.RED.ALIZARIN_CRIMSON};
  position: absolute;
  width: 18px;
  height: ${PERCENTAGE.FULL}%;
  left: ${PERCENTAGE.HALF}%;
  right: ${PERCENTAGE.HALF}%;
  background-color: ${COLORS.BLUE.RICH};
  margin: ${PERCENTAGE.ZERO}px -28px;
  padding: ${PERCENTAGE.ZERO}px 18px;
  font-weight: bold;
`;

export const Heading = styled.h3`
  ${fontStyle}
  text-align: center;
`;

export const Grid = styled.section`
  display: grid;
  grid-template:
    'street street street street street street number'
    'city city city city state state state'
    'zipcode 1fr 1fr 1fr 1fr 1fr 1fr';
  grid-gap: ${SIZES.LARGE}px;
  margin: ${SIZES.LARGE}px 0;
`;

export const FullAddressSearchInput = styled(SearchBoxInput)`
  margin: ${SIZES.LARGE}px 0;
`;

export const StreetInput = styled(SimpleInput)`
  grid-area: street;
`;

export const NumberInput = styled(SimpleInput)`
  grid-area: number;
`;

export const StateInput = styled(SimpleInput)`
  grid-area: state;
`;

export const CityInput = styled(SimpleInput)`
  grid-area: city;
`;

export const ZipCodeInput = styled(SimpleInput)`
  grid-area: zipcode;
`;

export const SubmitButton = styled(SimpleButton)`
  margin-top: ${SIZES.LARGE}px;
`;
