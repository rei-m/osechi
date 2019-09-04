import React from 'react';
import { Link } from '@reach/router';
import styled from '@src/styles/styled-components';
import Section from '@src/components/atoms/Section';
import Heading from '@src/components/atoms/Heading';

export type Props = {
  title: string;
  linkList: Array<{ href: string; text: string }>;
  className?: string;
};

const StyledHeading = styled(Heading)(({ theme }) => ({
  padding: theme.spacing(1),
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
    margin: theme.spacing(1),
  },
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    flexDirection: `row`,
    alignItems: `flex-start`,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  cursor: `pointer`,
  color: theme.colorPrimaryDark,
  textDecoration: `none`,
  borderBottom: `1px dotted ${theme.colorPrimaryDark}`,
  '&:hover': {
    color: theme.colorPrimaryDark,
    textDecoration: `none`,
    backgroundColor: `rgba(0,0,0,0.1)`,
  },
}));

const SubCondition = ({ title, linkList, className }: Props) => {
  return (
    <Section
      heading={<StyledHeading level={4}>{title}</StyledHeading>}
      className={className}
    >
      <LinkList>
        {linkList.map(link => (
          <StyledLink key={link.href} to={link.href}>
            {link.text}
          </StyledLink>
        ))}
      </LinkList>
    </Section>
  );
};

export default SubCondition;
