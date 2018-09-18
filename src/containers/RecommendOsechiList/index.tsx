import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import OsechiView from '@src/components/Osechi';
import { Category, Osechi } from '@src/types';
import { osechiStore } from '@src/store/osechiStore';

export type RecommendOsechiListOwnProps = RouteComponentProps<{}> & {
  category: Category;
};

export interface RecommendOsechiListConnectedProps {
  osechiList: Osechi[];
}

export type RecommendOsechiListProps = RecommendOsechiListOwnProps &
  RecommendOsechiListConnectedProps;

const RecommendOsechiList: React.SFC<RecommendOsechiListConnectedProps> = ({
  osechiList
}) => {
  return (
    <div>
      {osechiList.map(osechi => (
        <OsechiView osechi={osechi} key={osechi.code} />
      ))}
    </div>
  );
};

const WrappedRecommendOsechiList: React.SFC<RecommendOsechiListOwnProps> = ({
  category
}) => {
  const osechiList: Osechi[] = [];
  switch (category) {
    case '和': {
      osechiList.push(osechiStore.findByCode('1_takasago'));
      osechiList.push(osechiStore.findByCode('1_kohaku'));
      osechiList.push(osechiStore.findByCode('2_kacyo_F-020'));
      break;
    }
    case '洋': {
      osechiList.push(osechiStore.findByCode('1_takasagodd'));
      osechiList.push(osechiStore.findByCode('1_deandeluca'));
      osechiList.push(osechiStore.findByCode('2_bistrot-gagnant_2018_2dan'));
      break;
    }
    case '中': {
      osechiList.push(osechiStore.findByCode('1_takasagocn'));
      osechiList.push(osechiStore.findByCode('2_kiyouken_g201925000'));
      osechiList.push(osechiStore.findByCode('2_saiko-ro_osechi1'));
      break;
    }
    default: {
      break;
    }
  }
  return <RecommendOsechiList osechiList={osechiList} />;
};

export default withRouter(WrappedRecommendOsechiList);
