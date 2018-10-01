import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  CategoryConditionList,
  CategoryConditionNameList,
  PeopleRangeCondition,
  PeopleRangeConditionList,
  PeopleRangeConditionNameList,
  PriceRangeCondition,
  PriceRangeConditionList,
  PriceRangeConditionNameList
} from '@src/types';
import { withAppTheme } from '@src/styles';

const Root = styled.article`
  color: #4d5958;
`;

const Title = styled.h1`
  margin: 0;
  padding: 32px;
  border-bottom: 1px solid #dedede;
`;

const CategorySection = styled.section`
  padding: 16px;
  max-width: 960px;
  margin: 0 auto;
  &:not(:last-of-type) {
    border-bottom: 1px solid #dedede;
  }
`;

const CategoryTitle = styled.h2`
  margin: 0;
  padding: 8px;
`;

const ConditionTitle = styled.h3`
  margin: 0;
  padding: 8px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    flex-direction: row;
  }
`;

const LinkWrapper = styled.li`
  margin: 8px;
`;

const LinkInner = withAppTheme(styled.span)`
  cursor: pointer;
  color: ${({ theme }) => theme.colorPrimaryDark};
  text-decoration: none;
  &:hover {
    ${({ theme }) => `
      color: ${theme.colorPrimaryDark};
      border-bottom: 1px dotted ${theme.colorPrimaryDark};
    `}
  }
`;

const SiteMaps: React.SFC<{}> = () => (
  <Root>
    <Title>サイトマップ</Title>
    {CategoryConditionList.slice(1, 4).map((cc, ci) => (
      <CategorySection key={cc}>
        <CategoryTitle>{`${
          CategoryConditionNameList.slice(1, 4)[ci]
        }おせち`}</CategoryTitle>
        <section>
          <ConditionTitle>人数でさがす</ConditionTitle>
          <LinkList>
            {PeopleRangeConditionList.map((prc, i) => (
              <LinkWrapper key={prc}>
                <Link
                  to={`/categories/${cc}/${prc}/${PriceRangeCondition.All}`}
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <LinkInner>{PeopleRangeConditionNameList[i]}</LinkInner>
                </Link>
              </LinkWrapper>
            ))}
          </LinkList>
        </section>
        <section>
          <ConditionTitle>値段でさがす</ConditionTitle>
          <LinkList>
            {PriceRangeConditionList.map((prc, i) => (
              <LinkWrapper key={prc}>
                <Link
                  to={`/categories/${cc}/${PeopleRangeCondition.All}/${prc}`}
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <LinkInner>{PriceRangeConditionNameList[i]}</LinkInner>
                </Link>
              </LinkWrapper>
            ))}
          </LinkList>
        </section>
      </CategorySection>
    ))}
  </Root>
);

export default SiteMaps;
