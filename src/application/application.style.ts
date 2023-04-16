import styled from 'styled-components';
import { COLORS } from '../ui';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Content = styled.section`
  background-color: white;
  flex-grow: 1;
`;

export const Navigation = styled.aside`
  width: 400px;
  background-color: ${COLORS.BLUE.RICH};
`;
