import React from 'react';
import styled from '@src/styles/styled-components';
import Section from '@src/components/atoms/Section';
import Heading from '@src/components/atoms/Heading';
import SubCondition from './SubCondition';
import {
  CategoryConditionList,
  PeopleRangeConditionList,
  PriceRangeConditionList,
  PriceRangeConditionKey,
  PeopleRangeConditionKey,
} from '@src/types';

export type Props = {
  categoryKey: 'ja' | 'we' | 'ch';
  className?: string;
};

const StyledSection = styled(Section)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: `960px`,
}));

const StyledHeading = styled(Heading)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const SiteMapCategory = ({ categoryKey, className }: Props) => {
  const [key, title] = CategoryConditionList.find(cc => cc[0] === categoryKey)!;
  const peopleLinkList = PeopleRangeConditionList.map(v => {
    const href = `/categories/${key}/${v[0]}/${PriceRangeConditionKey.All}`;
    return { href, text: v[1] };
  });
  const priceLinkList = PriceRangeConditionList.map(v => {
    const href = `/categories/${key}/${PeopleRangeConditionKey.All}/${v[0]}`;
    return { href, text: v[1] };
  });
  return (
    <StyledSection
      heading={<StyledHeading>{`${title}おせち`}</StyledHeading>}
      className={className}
    >
      <SubCondition title={`人数でさがす`} linkList={peopleLinkList} />
      <SubCondition title={`値段でさがす`} linkList={priceLinkList} />
    </StyledSection>
  );
};

export default SiteMapCategory;
