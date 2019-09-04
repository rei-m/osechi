import React from 'react';
import styled from '@src/styles/styled-components';
import Heading from '@src/components/atoms/Heading';

export type Props = {
  title: string;
  onClickBack?: () => void;
  className?: string;
};

const Container = styled.header<{ canBack: boolean }>(({ theme, canBack }) => ({
  display: `flex`,
  alignItems: `center`,
  backgroundColor: theme.colorPrimary,
  height: theme.headerHeight,
  boxSizing: `border-box`,
  paddingLeft: canBack ? '0' : theme.spacing(2),
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    height: theme.headerHeightWide,
  },
}));

const StyledHeading = styled(Heading)({
  color: `#fff`,
  fontWeight: `normal`,
  textAlign: `left`,
});

const Icon = styled.i`
  line-height: ${({ theme }) => theme.headerHeight};
  width: ${({ theme }) => theme.headerHeight};
  color: #fff;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    line-height: ${({ theme }) => theme.headerHeightWide};
    width: ${({ theme }) => theme.headerHeightWide};
  }
`;

const Header = ({ title, onClickBack, className }: Props) => (
  <Container canBack={!!onClickBack} className={className}>
    {onClickBack && (
      <Icon className="material-icons" onClick={onClickBack} data-test="back">
        arrow_back
      </Icon>
    )}
    <StyledHeading level={1} visualLevel={2}>
      {title}
    </StyledHeading>
  </Container>
);

export default Header;
