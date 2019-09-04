import { RouteComponentProps } from '@reach/router';

export type SiteMetaData = {
  title: string;
  description: string;
  author: string;
};

export type GeneratedPageComponentProps<T = {}> = {
  pageContext: T;
} & RouteComponentProps<T>;

export type Osechi = Readonly<{
  code: string;
  siteId: number;
  name: string; // 名称
  price: number; // 価格
  includeTax: boolean; // 税込みか
  includePostage: boolean; // 送料込みか
  peopleFrom: number; // n人前 From
  peopleTo: number; // n人前 To
  categories: Category[]; // カテゴリ（和洋など複数持つことがある）
  catchCopy: string; // キャッチコピー
  url: string; // 商品の詳細のurl
}>;

export type Site = Readonly<{
  id: number;
  name: string;
  url: string;
}>;

export type Category = '和' | '洋' | '中';

export type CategoryConditionKey = 'all' | 'ja' | 'we' | 'ch';

export const CategoryConditionList = [
  ['all', '指定なし'],
  ['ja', '和風'],
  ['we', '洋風'],
  ['ch', '中華'],
];

export enum PeopleRangeConditionKey {
  All = 'pe0',
  OneToThree = 'pe1',
  ThreeToFour = 'pe2',
  FiveOver = 'pe3',
}

export const PeopleRangeConditionList = [
  [PeopleRangeConditionKey.All, '指定なし'],
  [PeopleRangeConditionKey.OneToThree, '1名 〜 3名'],
  [PeopleRangeConditionKey.ThreeToFour, '3名 〜 4名'],
  [PeopleRangeConditionKey.FiveOver, '5名以上'],
];

export enum PriceRangeConditionKey {
  All = 'pr0',
  Lower15 = 'pr1',
  Between15And20 = 'pr2',
  Between20And25 = 'pr3',
  Between25And30 = 'pr4',
  Over30 = 'pr5',
}

export const PriceRangeConditionNameList = [
  '指定なし',
  '15,000円以下',
  '15,000円 〜 20,000円',
  '20,000円 〜 25,000円',
  '25,000円 〜 30,000円',
  '30,000円以上',
];

export const PriceRangeConditionList = [
  [PriceRangeConditionKey.All, '指定なし'],
  [PriceRangeConditionKey.Lower15, '15,000円以下'],
  [PriceRangeConditionKey.Between15And20, '15,000円 〜 20,000円'],
  [PriceRangeConditionKey.Between20And25, '20,000円 〜 25,000円'],
  [PriceRangeConditionKey.Between25And30, '25,000円 〜 30,000円'],
  [PriceRangeConditionKey.Over30, '30,000円以上'],
];

export enum SortCondition {
  PriceLow = 'pl',
  PriceHigh = 'ph',
}

export const SortConditionList = [
  [SortCondition.PriceLow, '値段の安い順'],
  [SortCondition.PriceHigh, '値段の高い順'],
];
