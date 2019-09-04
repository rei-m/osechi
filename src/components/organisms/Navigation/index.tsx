import * as React from 'react';
import { Link } from '@reach/router';
import styled from '@src/styles/styled-components';
import { MenuType } from '@src/enums';
import { ROUTE_PATHS } from '@src/constants';
import NavIcon from '@src/components/molecules/NavIcon';
import { PeopleRangeConditionKey, PriceRangeConditionKey } from '@src/types';

export type Props = {
  currentMenuType: MenuType;
  className?: string;
};

const Container = styled.nav(({ theme }) => ({
  display: `flex`,
  height: theme.bottomNavHeight,
  width: `100vw`,
  backgroundColor: theme.colorPrimary,
  boxSizing: `border-box`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    height: `100vh`,
    width: theme.sideNavWidth,
    paddingTop: theme.headerHeightWide,
    flexDirection: `column`,
  },
}));

const IconBox = styled.span(({ theme }) => ({
  flexGrow: 1,
  width: `100%`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    flexGrow: 0,
    height: theme.sideNavWidth,
  },
}));

const Navigation = ({ currentMenuType, className }: Props) => (
  <Container className={className}>
    <IconBox>
      <Link to={ROUTE_PATHS.ROOT} style={{ width: '100%', height: '100%' }}>
        <NavIcon
          iconType={MenuType.All}
          isCurrent={currentMenuType === MenuType.All}
        />
      </Link>
    </IconBox>
    <IconBox>
      <Link
        to={`/categories/ja/${PeopleRangeConditionKey.All}/${PriceRangeConditionKey.All}`}
        style={{ width: '100%', height: '100%' }}
      >
        <NavIcon
          iconType={MenuType.Japanese}
          isCurrent={currentMenuType === MenuType.Japanese}
        />
      </Link>
    </IconBox>
    <IconBox>
      <Link
        to={`/categories/we/${PeopleRangeConditionKey.All}/${PriceRangeConditionKey.All}`}
        style={{ width: '100%', height: '100%' }}
      >
        <NavIcon
          iconType={MenuType.Western}
          isCurrent={currentMenuType === MenuType.Western}
        />
      </Link>
    </IconBox>
    <IconBox>
      <Link
        to={`/categories/ch/${PeopleRangeConditionKey.All}/${PriceRangeConditionKey.All}`}
        style={{ width: '100%', height: '100%' }}
      >
        <NavIcon
          iconType={MenuType.Chinese}
          isCurrent={currentMenuType === MenuType.Western}
        />
      </Link>
    </IconBox>
  </Container>
);

export default Navigation;
