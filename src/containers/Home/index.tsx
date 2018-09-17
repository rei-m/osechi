import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RecommendOsechiList from '@src/containers/RecommendOsechiList';
import SearchForm from '@src/components/SearchForm';
import {
  CategoryCondition,
  PeopleRangeCondition,
  PriceRangeCondition
} from '@src/types';
import { GlobalState } from '@src/reducers';

export type HomeOwnProps = RouteComponentProps<{}>;

export interface HomeConnectedProps {
  initialCategory: CategoryCondition;
  initialPeopleRange: PeopleRangeCondition;
  initialPriceRange: PriceRangeCondition;
}

export type HomeProps = HomeOwnProps & HomeConnectedProps;

export const Home: React.SFC<HomeProps> = ({
  history,
  initialCategory,
  initialPeopleRange,
  initialPriceRange
}) => {
  const onSubmitHundler = (category, peopleRange, priceRange) => {
    const params = [
      `ca=${category}`,
      `ppr=${peopleRange}`,
      `prr=${priceRange}`
    ];
    history.push(`/search?${params.join('&')}`);
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
        initialCategory={initialCategory}
        initialPeopleRange={initialPeopleRange}
        initialPriceRange={initialPriceRange}
        handleSubmit={onSubmitHundler}
      />
      <RecommendOsechiList category="和" />
      <RecommendOsechiList category="洋" />
      <RecommendOsechiList category="中" />
    </div>
  );
};

const mapStateToProps = (
  { osechiState }: GlobalState,
  props: HomeOwnProps
): HomeOwnProps & HomeConnectedProps => ({
  ...props,
  initialCategory: osechiState.form.cateogry,
  initialPeopleRange: osechiState.form.peopleRange,
  initialPriceRange: osechiState.form.priceRange
});

export default withRouter(connect(mapStateToProps)(Home));
