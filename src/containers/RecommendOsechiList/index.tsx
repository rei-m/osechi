import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import OsechiView from '@src/components/Osechi';
import { Category, Osechi } from '@src/types';
import { osechiStore } from '@src/store/osechiStore';

export type RecommendOsechiListOwnProps = RouteComponentProps<{}> & {
  category: Category;
};

export interface RecommendOsechiListConnectedProps {
  title: string;
  osechiList: Osechi[];
}

export type RecommendOsechiListProps = RecommendOsechiListOwnProps &
  RecommendOsechiListConnectedProps;

const Root = styled.div``;

const Title = styled.div`
  font-size: 2rem;
  line-height: 3.6rem;
  border-bottom: 4px double #122;
`;

const OsechiList = styled.div`
  display: flex;
  justify-content: center;
`;

const RecommendOsechiList: React.SFC<RecommendOsechiListConnectedProps> = ({
  title,
  osechiList
}) => {
  return (
    <Root>
      <Title>{title}</Title>
      <OsechiList>
        {osechiList.map((osechi, i) => (
          <OsechiView osechi={osechi} no={i + 1} key={osechi.code} />
        ))}
      </OsechiList>
    </Root>
  );
};

const WrappedRecommendOsechiList: React.SFC<RecommendOsechiListOwnProps> = ({
  category
}) => {
  let title = '';
  const osechiList: Osechi[] = [];
  switch (category) {
    case '和': {
      title = 'おすすめの和風おせち';
      osechiList.push(osechiStore.findByCode('1_takasago'));
      osechiList.push(osechiStore.findByCode('1_kohaku'));
      osechiList.push(osechiStore.findByCode('2_kacyo_F-020'));
      break;
    }
    case '洋': {
      title = 'おすすめの洋風おせち';
      osechiList.push(osechiStore.findByCode('1_takasagodd'));
      osechiList.push(osechiStore.findByCode('1_deandeluca'));
      osechiList.push(osechiStore.findByCode('2_bistrot-gagnant_2018_2dan'));
      break;
    }
    case '中': {
      title = 'おすすめの中華風おせち';
      osechiList.push(osechiStore.findByCode('1_takasagocn'));
      osechiList.push(osechiStore.findByCode('2_kiyouken_g201925000'));
      osechiList.push(osechiStore.findByCode('2_saiko-ro_osechi1'));
      break;
    }
    default: {
      break;
    }
  }
  return <RecommendOsechiList osechiList={osechiList} title={title} />;
};

export default withRouter(WrappedRecommendOsechiList);
