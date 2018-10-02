import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RecommendOsechiList from '@src/containers/RecommendOsechiList';
import SearchForm from '@src/components/SearchForm';
import Banner from '@src/components/Banner';
import AboutSite from '@src/components/AboutSite';
import {
  CategoryCondition,
  PeopleRangeCondition,
  PriceRangeCondition
} from '@src/types';
import styled from 'styled-components';
import * as fbIcon from './fb_icon.png';
import * as twIcon from './tw_icon.png';

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

const SearchFormSection = styled.section`
  background-color: #fff8e1;
  padding: 16px 0;
  box-sizing: border-box;
`;

const SearchFormSectionTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0 0 8px 0;
`;

const ShareBox = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #fff8e1;
  padding: 8px;
`;

const SHARE_TEXT =
  '%E3%81%8A%E3%81%9B%E3%81%A1.jp%E3%81%A7%E6%96%B0%E5%B9%B4%E3%82%92%E8%BF%8E%E3%81%88%E3%82%8B%E3%81%AB%E3%81%B5%E3%81%95%E3%82%8F%E3%81%97%E3%81%84%E3%81%8A%E3%81%9B%E3%81%A1%E3%82%92%E6%8E%A2%E3%81%97%E3%81%BE%E3%81%97%E3%82%87%E3%81%86%E3%80%82';

export const Home: React.SFC<HomeProps> = ({ history }) => {
  const onSubmitHundler = (category, peopleRange, priceRange) => {
    conditionHolder.category = category;
    conditionHolder.priceRange = priceRange;
    conditionHolder.peopleRange = peopleRange;
    history.push(`/categories/${category}/${peopleRange}/${priceRange}`);
    return;
  };

  return (
    <article>
      <Banner />
      <ShareBox>
        <a
          href="https://www.facebook.com/share.php?u=https://osechi.jp"
          rel="nofollow"
          target="_blank"
        >
          <img
            src={fbIcon}
            alt="Facebookでシェアする"
            style={{
              width: 24,
              height: 24
            }}
          />
        </a>
        <a
          href={`https://twitter.com/share?url=https://osechi.jp&amp;text=${SHARE_TEXT}`}
          rel="nofollow"
          target="_blank"
          style={{
            marginLeft: 8
          }}
        >
          <img
            src={twIcon}
            alt="Twitterでシェアする"
            style={{
              width: 24,
              height: 24
            }}
          />
        </a>
      </ShareBox>
      <SearchFormSection>
        <SearchFormSectionTitle>おせちをさがす</SearchFormSectionTitle>
        <SearchForm
          initialCategory={conditionHolder.category}
          initialPeopleRange={conditionHolder.peopleRange}
          initialPriceRange={conditionHolder.priceRange}
          handleSubmit={onSubmitHundler}
        />
      </SearchFormSection>
      <RecommendOsechiList style={{ marginTop: 24 }} category="ja" />
      <RecommendOsechiList style={{ marginTop: 24 }} category="we" />
      <RecommendOsechiList style={{ marginTop: 24 }} category="ch" />
      <AboutSite style={{ marginTop: 24 }} />
    </article>
  );
};

export default withRouter(Home);
