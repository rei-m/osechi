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

export type CategoryCondition = '指定なし' | '和風' | '洋風' | '中華';

export enum PeopleRangeCondition {
  All,
  OneToThree,
  ThreeToFour,
  FiveOver
}

export const PeopleRangeConditionList = [
  PeopleRangeCondition.All,
  PeopleRangeCondition.OneToThree,
  PeopleRangeCondition.ThreeToFour,
  PeopleRangeCondition.FiveOver
];

export enum PriceRangeCondition {
  All,
  Lower15,
  Between15And20,
  Between20And25,
  Between25And30,
  Over30
}

export const PriceRangeConditionList = [
  PriceRangeCondition.All,
  PriceRangeCondition.Lower15,
  PriceRangeCondition.Between15And20,
  PriceRangeCondition.Between20And25,
  PriceRangeCondition.Between25And30,
  PriceRangeCondition.Over30
];
