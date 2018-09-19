export interface Osechi {
  readonly code: string;
  readonly siteId: number;
  readonly name: string; // 名称
  readonly price: number; // 価格
  readonly includeTax: boolean; // 税込みか
  readonly includePostage: boolean; // 送料込みか
  readonly peopleFrom: number; // n人前 From
  readonly peopleTo: number; // n人前 To
  readonly categories: Category[]; // カテゴリ（和洋など複数持つことがある）
  readonly catchCopy: string; // キャッチコピー
  readonly url: string; // 商品の詳細のurl
}

export interface Site {
  readonly id: number;
  readonly name: string;
  readonly url: string;
}

export type Category = '和' | '洋' | '中';

export type CategoryCondition = 'all' | 'ja' | 'we' | 'ch';

export const CategoryConditionList: CategoryCondition[] = [
  'all',
  'ja',
  'we',
  'ch'
];

export const CategoryConditionNameList = ['指定なし', '和風', '洋風', '中華'];

export enum PeopleRangeCondition {
  All = 'pe0',
  OneToThree = 'pe1',
  ThreeToFour = 'pe2',
  FiveOver = 'pe3'
}

export const PeopleRangeConditionNameList = [
  '指定なし',
  '1名 〜 3名',
  '3名 〜 4名',
  '5名以上'
];

export const PeopleRangeConditionList = [
  PeopleRangeCondition.All,
  PeopleRangeCondition.OneToThree,
  PeopleRangeCondition.ThreeToFour,
  PeopleRangeCondition.FiveOver
];

export enum PriceRangeCondition {
  All = 'pr0',
  Lower15 = 'pr1',
  Between15And20 = 'pr2',
  Between20And25 = 'pr3',
  Between25And30 = 'pr4',
  Over30 = 'pr5'
}

export const PriceRangeConditionNameList = [
  '指定なし',
  '15,000円以下',
  '15,000円 〜 20,000円',
  '20,000円 〜 25,000円',
  '25,000円 〜 30,000円',
  '30,000円以上'
];

export const PriceRangeConditionList = [
  PriceRangeCondition.All,
  PriceRangeCondition.Lower15,
  PriceRangeCondition.Between15And20,
  PriceRangeCondition.Between20And25,
  PriceRangeCondition.Between25And30,
  PriceRangeCondition.Over30
];
