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
