import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RecommendOsechiList from '@src/containers/RecommendOsechiList';
import SearchForm from '@src/components/SearchForm';
import {
  CategoryCondition,
  PeopleRangeCondition,
  PriceRangeCondition
} from '@src/types';

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
      <div
        style={{
          width: '100%',
          height: 80,
          padding: 16,
          backgroundColor: '#00a381'
        }}
      >
        バナー
      </div>
      <SearchForm
        initialCategory={conditionHolder.category}
        initialPeopleRange={conditionHolder.peopleRange}
        initialPriceRange={conditionHolder.priceRange}
        handleSubmit={onSubmitHundler}
      />
      <RecommendOsechiList category="和" />
      <RecommendOsechiList category="洋" />
      <RecommendOsechiList category="中" />
    </div>
  );
};

export default withRouter(Home);
