import * as React from 'react';
import RecommendOsechiList from '@src/containers/RecommendOsechiList';

const Home: React.SFC<{}> = ({}) => {
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
      <div>フォーム</div>
      <RecommendOsechiList category="和" />
      <RecommendOsechiList category="洋" />
      <RecommendOsechiList category="中" />
    </div>
  );
};

export default Home;
