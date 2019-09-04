import { resolve } from 'path';
import { GatsbyCreatePages } from './types';
import {
  CategoryConditionKey,
  PeopleRangeConditionKey,
  PriceRangeConditionKey,
} from '../src/types';
import { PageContext } from '../src/gatsbyPages/categories/';

const CATEGORY_LIST: Array<CategoryConditionKey> = ['all', 'ja', 'we', 'ch'];
const PEOPLE_RANGE_LIST: Array<PeopleRangeConditionKey> = [
  PeopleRangeConditionKey.All,
  PeopleRangeConditionKey.OneToThree,
  PeopleRangeConditionKey.ThreeToFour,
  PeopleRangeConditionKey.FiveOver,
];
const PRICE_RANGE_LIST: Array<PriceRangeConditionKey> = [
  PriceRangeConditionKey.All,
  PriceRangeConditionKey.Lower15,
  PriceRangeConditionKey.Between15And20,
  PriceRangeConditionKey.Between20And25,
  PriceRangeConditionKey.Between25And30,
  PriceRangeConditionKey.Over30,
];

export const createPages: GatsbyCreatePages<{}> = ({ actions }) => {
  const { createPage } = actions;
  CATEGORY_LIST.forEach(category => {
    PEOPLE_RANGE_LIST.forEach(peopleRange => {
      PRICE_RANGE_LIST.forEach(priceRange => {
        const context: PageContext = {
          category,
          peopleRange,
          priceRange,
        };
        createPage({
          path: `/categories/${category}/${peopleRange}/${priceRange}`,
          component: resolve(`./src/gatsbyPages/categories/index.tsx`),
          context,
        });
      });
    });
  });
};
