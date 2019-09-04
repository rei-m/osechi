import * as React from 'react';
import { Link } from '@reach/router';
import styled from '@src/styles/styled-components';
import Heading from '@src/components/atoms/Heading';
import Txt from '@src/components/atoms/Txt';
import OsechiList from '@src/components/organisms/OsechiList';
import { useRecommendOsechiList } from '@src/hooks/useRecommendOsechiList';
import { PeopleRangeConditionKey, PriceRangeConditionKey } from '@src/types';

export type Props = {
  category: 'ja' | 'we' | 'ch';
  className?: string;
};

const Container = styled.section``;

const Title = styled(Heading)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const LinkBox = styled.div(({ theme }) => ({
  width: `100%`,
  textAlign: `right`,
  paddingRight: theme.spacing(4),
}));

const AllLinkTxt = styled(Txt)(({ theme }) => ({
  cursor: `pointer`,
  color: theme.colorPrimaryDark,
  textDecoration: `none`,
  '&:hover': {
    color: theme.colorPrimaryDark,
    borderBottom: `1px dotted ${theme.colorPrimaryDark}`,
  },
}));

const categoryToTitle = {
  ja: '和風おせち',
  we: '洋風おせち',
  ch: '中華風おせち',
};

const RecommendOsechiList = ({ category, className }: Props) => {
  const osechiList = useRecommendOsechiList(category);
  const title = categoryToTitle[category];
  const to = `/categories/${category}/${PeopleRangeConditionKey.All}/${PriceRangeConditionKey.All}`;
  return (
    <Container className={className}>
      <Title level={2}>{`おすすめの${title}`}</Title>
      <OsechiList osechiList={osechiList} />
      <LinkBox>
        <Link
          to={to}
          style={{
            textDecoration: 'none',
          }}
        >
          <AllLinkTxt size={`s`}>{`すべての${title}をみる`}</AllLinkTxt>
        </Link>
      </LinkBox>
    </Container>
  );
};

export default RecommendOsechiList;
