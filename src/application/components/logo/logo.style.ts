import styled, { css } from 'styled-components';
import { COLORS, FONTS, SIZES } from '../../../ui';

/* =======================================
  - Setup
======================================= */

const fontStyle = css`
  color: ${COLORS.RED.ALIZARIN_CRIMSON};
  font-family: ${FONTS.LOBSTER}, cursive;
  font-size: ${SIZES.LARGE * 3}px;
`;

const rotateStyle = css`
  transform: translate(-50%,-50%) rotate(-15deg);
  position: absolute;
  left: 50%;
  top: 40%;
`;

/* =======================================
  - Structure
======================================= */

export const Container = styled.section`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const Leading = styled.span`
  ${fontStyle}
  ${rotateStyle}
  margin: auto;
`;

export const Trailing = styled.span`
  ${fontStyle}
  ${rotateStyle}
  margin: 45px auto 0 auto;
`;
