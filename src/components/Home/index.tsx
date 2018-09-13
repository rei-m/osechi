import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RecommendOsechiList from '@src/containers/RecommendOsechiList';
import SearchForm from '@src/components/SearchForm';
import { PeopleRangeCondition, PriceRangeCondition } from '@src/types';

const Home: React.SFC<RouteComponentProps<{}>> = ({ history }) => {
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
        initialCategory={'all'}
        initialPeopleRange={PeopleRangeCondition.All}
        initialPriceRange={PriceRangeCondition.All}
        handleSubmit={onSubmitHundler}
      />
      <RecommendOsechiList category="和" />
      <RecommendOsechiList category="洋" />
      <RecommendOsechiList category="中" />
    </div>
  );
};

export default withRouter(Home);
