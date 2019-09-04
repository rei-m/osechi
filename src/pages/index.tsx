import React from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from '@src/styles/styled-components';
import Section from '@src/components/atoms/Section';
import Heading from '@src/components/atoms/Heading';
import Txt from '@src/components/atoms/Txt';
import MainBanner from '@src/components/organisms/MainBanner';
import SocialShareLinks from '@src/components/organisms/SocialShareLinks';
import SearchForm from '@src/components/organisms/SearchForm';
import RecommendOsechiList from '@src/components/organisms/RecommendOsechiList';
import SingleContentPageTemplate from '@src/components/templates/SingleContentPageTemplate';
import {
  CategoryConditionKey,
  PeopleRangeConditionKey,
  PriceRangeConditionKey,
} from '@src/types';
import { APP_NAME } from '@src/constants';
import { MenuType } from '@src/enums';

export type IndexPageProps = RouteComponentProps<{}>;

type ConditionHolder = {
  category: CategoryConditionKey;
  priceRange: PriceRangeConditionKey;
  peopleRange: PeopleRangeConditionKey;
};

const conditionHolder: ConditionHolder = {
  category: 'all',
  priceRange: PriceRangeConditionKey.All,
  peopleRange: PeopleRangeConditionKey.All,
};

const StyledSection = styled(Section)(props => ({
  backgroundColor: `#fff8e1`,
  padding: `${props.theme.spacing(2)} 0`,
}));

const StyledRecommendOsechiList = styled(RecommendOsechiList)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ReadingContent = styled(Section)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const ReadingContentText = styled.p(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 0,
  textAlign: 'left',
}));

const SHARE_TEXT =
  '%E3%81%8A%E3%81%9B%E3%81%A1.jp%E3%81%A7%E6%96%B0%E5%B9%B4%E3%82%92%E8%BF%8E%E3%81%88%E3%82%8B%E3%81%AB%E3%81%B5%E3%81%95%E3%82%8F%E3%81%97%E3%81%84%E3%81%8A%E3%81%9B%E3%81%A1%E3%82%92%E6%8E%A2%E3%81%97%E3%81%BE%E3%81%97%E3%82%87%E3%81%86%E3%80%82';

const SHARE_URL = `https://osechi.jp`;

export const IndexPage: React.FC<IndexPageProps> = ({ navigate }) => {
  const onSubmitHundler = (
    category: CategoryConditionKey,
    peopleRange: PeopleRangeConditionKey,
    priceRange: PriceRangeConditionKey
  ) => {
    conditionHolder.category = category;
    conditionHolder.priceRange = priceRange;
    conditionHolder.peopleRange = peopleRange;
    navigate!(`/categories/${category}/${peopleRange}/${priceRange}`);
    return;
  };

  return (
    <SingleContentPageTemplate
      title={`${APP_NAME} - おせち.jp -`}
      description={`おせち.jpではいろいろなおせち販売サイトのおせちを比較することができます。定番のおせちや少し変わったおせちまで簡単に条件を指定して探せます。2020年のおせちはおせち.jpでお好みのおせちを探してはいかがでしょうか。`}
      keywords={[
        `おせち`,
        `2020年のおせち`,
        `おすすめのおせち`,
        `2020`,
        `おせちの通販`,
        `今年のおせち`,
        `おせちの食べ方`,
      ]}
      currentMenuType={MenuType.All}
    >
      <article>
        <MainBanner />
        <SocialShareLinks url={SHARE_URL} text={SHARE_TEXT} />
        <StyledSection heading={<Heading level={2}>おせちをさがす</Heading>}>
          <SearchForm
            initialCategoryKey={conditionHolder.category}
            initialPeopleRangeKey={conditionHolder.peopleRange}
            initialPriceRangeKey={conditionHolder.priceRange}
            onSubmitForm={onSubmitHundler}
          />
        </StyledSection>
        <StyledRecommendOsechiList category="ja" />
        <StyledRecommendOsechiList category="we" />
        <StyledRecommendOsechiList category="ch" />
        <ReadingContent
          heading={
            <Heading level={3} visualLevel={2}>
              おせち.jpとは
            </Heading>
          }
        >
          <ReadingContentText>
            <Txt size={`s`}>
              おせち.jpはいろいろなおせち販売サイトのおせちを一括で見ることができるサービスです。
              定番のおせちや少し変わったおせちまで簡単にご利用人数や値段を指定して探すことができます。
              お好みにあったおせちを探して新年のお祝いを迎えてはいかがでしょうか。
            </Txt>
          </ReadingContentText>
        </ReadingContent>
        <ReadingContent
          heading={
            <Heading level={3} visualLevel={2}>
              おせちの由来
            </Heading>
          }
        >
          <ReadingContentText>
            <Txt size={`s`}>
              お正月に食べる「おせち」とはどんな意味があるのでしょうか？
              もともとは「御節供（おせちく）」と呼ばれ、正月に限らず季節の節目の行事で神様へのお供え物として出されていました。
              この行事が庶民に広まり、形を変えて、一年の節目の一番大切なお正月に振る舞われる料理として「おせち」として定着しました。
            </Txt>
          </ReadingContentText>
        </ReadingContent>
        <ReadingContent
          heading={
            <Heading level={3} visualLevel={2}>
              おせちの意味
            </Heading>
          }
        >
          <ReadingContentText>
            <Txt size={`s`}>
              おせちは地方やしきたりによって様々な種類がありますが、基本は重箱で提供されます。これは「めでたさを重ねる」という意味で縁起をかついだものになっています。
              料理についても、黒豆は「マメに働けるように」という長寿と健康を、数の子はその卵の多さから子孫繁栄を、といったように、ひとつひとつ意味が込められており、
              新年のはじまりを祝い、また一年息災にすごせますようにと願いが込められています。おせちをつまみながら、その意味を調べてみるのもおもしろいのではないでしょうか。
            </Txt>
          </ReadingContentText>
        </ReadingContent>
      </article>
    </SingleContentPageTemplate>
  );
};

export default IndexPage;
