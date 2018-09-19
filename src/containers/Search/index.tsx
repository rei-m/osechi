import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import OsechiView from '@src/components/Osechi';
import {
  CategoryConditionList,
  Osechi,
  PeopleRangeConditionList,
  PriceRangeConditionList
} from '@src/types';
import { osechiStore } from '@src/store/osechiStore';

export interface SearchProps {
  osechiList: Osechi[];
}

const Search: React.SFC<SearchProps> = ({ osechiList }) => {
  return (
    <div>
      {osechiList.map(osechi => (
        <OsechiView osechi={osechi} key={osechi.code} />
      ))}
    </div>
  );
};

export interface SearchParam {
  category: string;
  peopleRange: string;
  priceRange: string;
}

const WrappedSearch: React.SFC<RouteComponentProps<SearchParam>> = ({
  match
}) => {
  const category = CategoryConditionList.find(
    ca => ca === match.params.category
  );
  const peopleRange = PeopleRangeConditionList.find(
    po => po === match.params.peopleRange
  );
  const priceRange = PriceRangeConditionList.find(
    po => po === match.params.priceRange
  );

  if (category && peopleRange && priceRange) {
    const osechiList = osechiStore.where(category, peopleRange, priceRange);
    return <Search osechiList={osechiList} />;
  }

  return <div>unko</div>;
};

export default withRouter(WrappedSearch);
