import * as React from 'react';

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
      <div>ソート</div>
      <div>和おせちリスト</div>
      <div>洋おせちリスト</div>
      <div>中おせちリスト</div>
    </div>
  );
};

export default Home;
