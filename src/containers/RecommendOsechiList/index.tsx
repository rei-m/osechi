import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import OsechiView from '@src/components/Osechi';
import { GlobalState } from '@src/reducers';
import { Category, Osechi } from '@src/types';

export type RecommendOsechiListOwnProps = RouteComponentProps<{}> & {
  category: Category;
};

export interface RecommendOsechiListConnectedProps {
  osechiList: Osechi[];
}

export type RecommendOsechiListProps = RecommendOsechiListOwnProps &
  RecommendOsechiListConnectedProps;

const mapStateToProps = (
  { osechiState }: GlobalState,
  props: RecommendOsechiListOwnProps
): RecommendOsechiListProps => {
  const osechiList: Osechi[] = [];
  switch (props.category) {
    case '和': {
      osechiList.push(osechiState.osechiCollection['1_takasago']);
      osechiList.push(osechiState.osechiCollection['1_kohaku']);
      osechiList.push(osechiState.osechiCollection['2_kacyo_F-020']);
      break;
    }
    case '洋': {
      osechiList.push(osechiState.osechiCollection['1_takasagodd']);
      osechiList.push(osechiState.osechiCollection['1_deandeluca']);
      osechiList.push(
        osechiState.osechiCollection['2_bistrot-gagnant_2018_2dan']
      );
      break;
    }
    case '中': {
      osechiList.push(osechiState.osechiCollection['1_takasagocn']);
      osechiList.push(osechiState.osechiCollection['2_kiyouken_g201925000']);
      osechiList.push(osechiState.osechiCollection['2_saiko-ro_osechi1']);
      break;
    }
    default: {
      break;
    }
  }

  return {
    ...props,
    osechiList
  };
};

const RecommendOsechiList: React.SFC<RecommendOsechiListProps> = ({
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

export default withRouter(connect(mapStateToProps)(RecommendOsechiList));
