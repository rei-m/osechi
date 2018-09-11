import * as React from 'react';
import RecommendOsechiList from '@src/containers/RecommendOsechiList';
import SearchForm from '@src/components/SearchForm';
import { PeopleRangeCondition, PriceRangeCondition } from '@src/types';

const Home: React.SFC<{}> = ({}) => {
  const hoge = () => {
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
        initialCategory={'指定なし'}
        initialPeopleRange={PeopleRangeCondition.All}
        initialPriceRange={PriceRangeCondition.All}
        handleSubmit={hoge}
      />
      <RecommendOsechiList category="和" />
      <RecommendOsechiList category="洋" />
      <RecommendOsechiList category="中" />
    </div>
  );
};

export default Home;
