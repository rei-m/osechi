import React, { useMemo, useState, useCallback } from 'react';
import styled from '@src/styles/styled-components';
import Txt from '@src/components/atoms/Txt';
import Select from '@src/components/molecules/Select';
import PriceSort from '@src/components/organisms/PriceSort';
import OsechiList from '@src/components/organisms/OsechiList';
import SingleContentPageTemplate from '@src/components/templates/SingleContentPageTemplate';
import { useOsechiList } from '@src/hooks/useOsechiList';
import {
  GeneratedPageComponentProps,
  CategoryConditionKey,
  PeopleRangeConditionKey,
  PriceRangeConditionKey,
  SortCondition,
  PeopleRangeConditionList,
  PriceRangeConditionList,
} from '@src/types';
import { MenuType } from '@src/enums';
import { APP_NAME } from '@src/constants';

export type PageContext = {
  category: CategoryConditionKey;
  peopleRange: PeopleRangeConditionKey;
  priceRange: PriceRangeConditionKey;
};

export type Props = GeneratedPageComponentProps<PageContext>;

const FormContainer = styled.div(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  flexDirection: `column`,
  margin: `${theme.spacing(2)} 0`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    flexDirection: `row`,
  },
}));

const StyledSelect = styled(Select)({
  textAlign: `left`,
  maxWidth: `300px`,
  minWidth: `300px`,
});

const StyledOsechiList = styled(OsechiList)({
  flexWrap: `wrap`,
  maxWidth: `1000px`,
  margin: `0 auto`,
});

const EmptyContainer = styled.div(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  flexDirection: `column`,
  boxSizing: `border-box`,
  minHeight: `calc(100vh - ${theme.headerHeight})`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    minHeight: `calc(100vh - ${theme.headerHeightWide})`,
  },
}));

const SortContainer = styled.div(({ theme }) => ({
  textAlign: `center`,
  maxWidth: `1000px`,
  margin: `0 auto ${theme.spacing(1)} auto`,
  padding: `0 ${theme.spacing(2)}`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    textAlign: `right`,
  },
}));

const categoryToTitle = {
  all: 'おせち.jp',
  ja: '和風おせち',
  we: '洋風おせち',
  ch: '中華風おせち',
};

const DESCRIPTION_BASE = `おせち.jpではいろいろなおせち販売サイトのおせちを比較することができます。定番のおせちや少し変わったおせちまで簡単に条件を指定して探せます。2020年のおせちはおせち.jpでお好みのおせちを探してはいかがでしょうか。`;
const KEYWORDS_BASE = [
  `おせち`,
  `2020年のおせち`,
  `おすすめのおせち`,
  `2020`,
  `おせちの通販`,
  `今年のおせち`,
  `おせちの食べ方`,
];

const CategoriesPage = ({ pageContext, navigate }: Props) => {
  const [sort, setSort] = useState(SortCondition.PriceLow);

  const { category, peopleRange, priceRange } = pageContext;

  const menuType = useMemo(() => {
    switch (category) {
      case 'ch':
        return MenuType.Chinese;
      case 'ja':
        return MenuType.Japanese;
      case 'we':
        return MenuType.Western;
      default:
        return MenuType.All;
    }
  }, [category]);

  const osechiList = useOsechiList(category, peopleRange, priceRange, sort);
  const metaText = useMemo(() => {
    const meta: string[] = [];
    if (peopleRange !== PeopleRangeConditionKey.All) {
      meta.push(PeopleRangeConditionList.find(v => v[0] === peopleRange)![1]);
    }
    if (priceRange !== PriceRangeConditionKey.All) {
      meta.push(PriceRangeConditionList.find(v => v[0] === priceRange)![1]);
    }
    if (category !== 'all') {
      meta.push(categoryToTitle[category]);
    }
    return meta.length === 0 ? APP_NAME : meta.join(`,`);
  }, [category, peopleRange, priceRange]);

  const handleChangePeopleRange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (navigate) {
      navigate(
        `/categories/${category}/${e.currentTarget.value}/${priceRange}`
      );
    }
  };

  const handleChangePriceRange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (navigate) {
      navigate(
        `/categories/${category}/${peopleRange}/${e.currentTarget.value}`
      );
    }
  };

  const handleClickSortLow = useCallback(() => {
    setSort(SortCondition.PriceLow);
  }, []);

  const handleClickSortHigh = useCallback(() => {
    setSort(SortCondition.PriceHigh);
  }, []);

  const handleClickBack = useCallback(() => {
    if (navigate) {
      navigate(`/`);
    }
  }, []);

  return (
    <SingleContentPageTemplate
      title={`${APP_NAME} - ${categoryToTitle[category]} -`}
      description={`${metaText}を紹介します。${DESCRIPTION_BASE}`}
      keywords={[...metaText.split(','), ...KEYWORDS_BASE]}
      currentMenuType={menuType}
      onClickBack={handleClickBack}
    >
      <article>
        <FormContainer>
          <StyledSelect
            label="ご利用人数"
            name="peopleRangeKey"
            value={peopleRange}
            itemList={PeopleRangeConditionList}
            onChange={handleChangePeopleRange}
          />
          <StyledSelect
            label="お値段"
            name="priceRangeKey"
            value={priceRange}
            itemList={PriceRangeConditionList}
            onChange={handleChangePriceRange}
          />
        </FormContainer>
        <SortContainer>
          <PriceSort
            sort={SortCondition.PriceLow}
            disabled={sort === SortCondition.PriceLow}
            onClick={handleClickSortLow}
          />
          <PriceSort
            sort={SortCondition.PriceHigh}
            disabled={sort === SortCondition.PriceHigh}
            onClick={handleClickSortHigh}
          />
        </SortContainer>
        {0 < osechiList.length ? (
          <StyledOsechiList osechiList={osechiList} />
        ) : (
          <EmptyContainer>
            <Txt size={`l`}>
              ご希望の条件のおせちが見つかりませんでした。。。
            </Txt>
          </EmptyContainer>
        )}
      </article>
    </SingleContentPageTemplate>
  );
};

export default CategoriesPage;
