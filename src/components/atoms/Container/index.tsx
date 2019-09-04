import styled from '@src/styles/styled-components';

export const Container = styled.main(({ theme }) => ({
  backgroundColor: theme.colorThin,
  minHeight: `100vh`,
  boxSizing: `border-box`,
}));

export default Container;
