import * as React from 'react';
import { Link } from '@reach/router';
import styled from '@src/styles/styled-components';
import { ROUTE_PATHS } from '@src/constants';
import { ThemeInterface } from '@src/styles/theme';

export type Props = {
  className?: string;
};

const Container = styled.footer(({ theme }) => ({
  textAlign: `center`,
  backgroundColor: theme.colorThin,
  borderTop: ` 1px solid #ccc`,
  padding: theme.spacing(3),
}));

const LinkList = styled.ul(({ theme }) => ({
  listStyle: `none`,
  padding: 0,
  margin: 0,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  flexDirection: `column`,
  '& > :nth-child(n+1)': {
    margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    flexDirection: `row`,
  },
}));

const linkStyles = ({ theme }: { theme: ThemeInterface }) => ({
  cursor: `pointer`,
  color: theme.colorPrimaryDark,
  textDecoration: `none`,
  '&:hover': {
    color: theme.colorPrimaryDark,
    textDecoration: `none`,
    borderBottom: `1px dotted ${theme.colorPrimaryDark}`,
  },
});

const ExternalLink = styled.a(linkStyles);

const InnerLink = styled(Link)(linkStyles);

const Footer = ({ className }: Props) => (
  <Container className={className}>
    <LinkList>
      <InnerLink to={ROUTE_PATHS.ROOT}>おせち.jp</InnerLink>
      <ExternalLink
        href="https://rei-m.github.io/app/policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        プライバシーポリシー
      </ExternalLink>
      <InnerLink to={ROUTE_PATHS.SITE_MAPS}>サイトマップ</InnerLink>
    </LinkList>
  </Container>
);

export default Footer;
