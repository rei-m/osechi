import * as React from 'react';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import OsechiView from '@src/components/Osechi';
import {
  CategoryCondition,
  Osechi,
  PeopleRangeCondition,
  PriceRangeCondition
} from '@src/types';
import { osechiStore } from '@src/store/osechiStore';
import { withAppTheme } from '@src/styles';

export type RecommendOsechiListHtmlProps = React.HTMLAttributes<HTMLElement>;

export type RecommendOsechiListOwnProps = RecommendOsechiListHtmlProps &
  RouteComponentProps<{}> & {
    category: CategoryCondition;
  };

export type RecommendOsechiListConnectedProps = RecommendOsechiListHtmlProps & {
  title: string;
  osechiList: Osechi[];
  category: CategoryCondition;
};

export type RecommendOsechiListProps = RecommendOsechiListOwnProps &
  RecommendOsechiListConnectedProps;

const Root = styled.section``;

const Title = styled.h2`
  font-size: 2.2rem;
  margin: 0 0 8px 0;
`;

const OsechiList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    flex-direction: row;
  }
`;

const LinkBox = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 16px;
`;

const AllLink = withAppTheme(styled.span)`
  cursor: pointer;
  color: ${({ theme }) => theme.colorPrimaryDark};
  text-decoration: none;
  &:hover {
    ${({ theme }) => `
      color: ${theme.colorPrimaryDark};
      border-bottom: 1px dotted ${theme.colorPrimaryDark};
    `}
  }
`;

const RecommendOsechiList: React.SFC<RecommendOsechiListConnectedProps> = ({
  category,
  title,
  osechiList,
  style
}) => {
  const to = `/categories/${category}/${PeopleRangeCondition.All}/${
    PriceRangeCondition.All
  }`;
  return (
    <Root style={style}>
      <Title>{`おすすめの${title}`}</Title>
      <OsechiList>
        {osechiList.map((osechi, i) => (
          <OsechiView osechi={osechi} no={i + 1} key={osechi.code} />
        ))}
      </OsechiList>
      <LinkBox>
        <Link
          to={to}
          style={{
            textDecoration: 'none'
          }}
        >
          <AllLink>{`すべての${title}をみる`}</AllLink>
        </Link>
      </LinkBox>
    </Root>
  );
};

const WrappedRecommendOsechiList: React.SFC<RecommendOsechiListOwnProps> = ({
  category,
  style
}) => {
  let title = '';
  const osechiList: Osechi[] = [];
  switch (category) {
    case 'ja': {
      title = '和風おせち';
      osechiList.push(osechiStore.findByCode('1_takasago'));
      osechiList.push(osechiStore.findByCode('1_kohaku'));
      osechiList.push(osechiStore.findByCode('2_kacyo_F-020'));
      break;
    }
    case 'we': {
      title = '洋風おせち';
      osechiList.push(osechiStore.findByCode('1_takasagodd'));
      osechiList.push(osechiStore.findByCode('1_deandeluca'));
      osechiList.push(osechiStore.findByCode('2_bistrot-gagnant_2018_2dan'));
      break;
    }
    case 'ch': {
      title = '中華風おせち';
      osechiList.push(osechiStore.findByCode('1_takasagocn'));
      osechiList.push(osechiStore.findByCode('2_kiyouken_g201925000'));
      osechiList.push(osechiStore.findByCode('2_saiko-ro_osechi1'));
      break;
    }
    default: {
      break;
    }
  }
  return (
    <RecommendOsechiList
      style={style}
      category={category}
      osechiList={osechiList}
      title={title}
    />
  );
};

export default withRouter(WrappedRecommendOsechiList);
