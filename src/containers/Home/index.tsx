import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RecommendOsechiList from '@src/containers/RecommendOsechiList';
import SearchForm from '@src/components/SearchForm';
import Banner from '@src/components/Banner';
import AboutSite from '@src/components/AboutSite';
import {
  CategoryCondition,
  PeopleRangeCondition,
  PriceRangeCondition
} from '@src/types';
import styled from 'styled-components';

export type HomeProps = RouteComponentProps<{}>;

export interface ConditionHolder {
  category: CategoryCondition;
  priceRange: PriceRangeCondition;
  peopleRange: PeopleRangeCondition;
}

const conditionHolder: ConditionHolder = {
  category: 'all',
  priceRange: PriceRangeCondition.All,
  peopleRange: PeopleRangeCondition.All
};

const SearchFormSection = styled.section`
  background-color: #fff8e1;
  padding: 16px 0;
  box-sizing: border-box;
`;

const SearchFormSectionTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0 0 8px 0;
`;

export const Home: React.SFC<HomeProps> = ({ history }) => {
  const onSubmitHundler = (category, peopleRange, priceRange) => {
    conditionHolder.category = category;
    conditionHolder.priceRange = priceRange;
    conditionHolder.peopleRange = peopleRange;
    history.push(`/categories/${category}/${peopleRange}/${priceRange}`);
    return;
  };

  return (
    <div>
      <Banner />
      <SearchFormSection>
        <SearchFormSectionTitle>おせちをさがす</SearchFormSectionTitle>
        <SearchForm
          initialCategory={conditionHolder.category}
          initialPeopleRange={conditionHolder.peopleRange}
          initialPriceRange={conditionHolder.priceRange}
          handleSubmit={onSubmitHundler}
        />
      </SearchFormSection>
      <RecommendOsechiList style={{ marginTop: 24 }} category="ja" />
      <RecommendOsechiList style={{ marginTop: 24 }} category="we" />
      <RecommendOsechiList style={{ marginTop: 24 }} category="ch" />
      <AboutSite style={{ marginTop: 24 }} />
    </div>
  );
};

export default withRouter(Home);
