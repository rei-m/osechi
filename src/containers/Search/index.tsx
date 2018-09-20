import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import OsechiView from '@src/components/Osechi';
import {
  CategoryConditionList,
  Osechi,
  PeopleRangeConditionList,
  PriceRangeConditionList,
  SortCondition,
  SortConditionList,
  SortConditionNameList
} from '@src/types';
import { osechiStore } from '@src/store/osechiStore';

export interface SearchProps {
  osechiList: Osechi[];
  sort: SortCondition;
  onChangeSort: (sort: SortCondition) => void;
}

const Root = styled.section``;

const OsechiList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SortLink: React.SFC<
  Pick<SearchProps, 'sort' | 'onChangeSort'> & { current: SortCondition }
> = ({ sort, onChangeSort, current }) => {
  const index = SortConditionList.findIndex(sc => sc === sort);

  if (sort === current) {
    return <span>{SortConditionNameList[index]}</span>;
  }

  const onClickSort = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onChangeSort(sort);
  };

  return (
    <a href="#" onClick={onClickSort}>
      {SortConditionNameList[index]}
    </a>
  );
};

const Search: React.SFC<SearchProps> = ({ osechiList, sort, onChangeSort }) => {
  return (
    <Root>
      <div>
        <SortLink
          sort={SortCondition.PriceLow}
          current={sort}
          onChangeSort={onChangeSort}
        />
        <SortLink
          sort={SortCondition.PriceHigh}
          current={sort}
          onChangeSort={onChangeSort}
        />
      </div>
      <OsechiList>
        {osechiList.map((osechi, i) => (
          <div key={osechi.code}>
            <OsechiView osechi={osechi} no={i + 1} />
          </div>
        ))}
      </OsechiList>
    </Root>
  );
};

export interface SearchParam {
  category: string;
  peopleRange: string;
  priceRange: string;
}

export type WrappedSearchProps = RouteComponentProps<SearchParam>;

export interface WrappedSearchState {
  sort: SortCondition;
}

class WrappedSearch extends React.Component<
  WrappedSearchProps,
  WrappedSearchState
> {
  constructor(props: WrappedSearchProps) {
    super(props);
    this.state = {
      sort: SortCondition.PriceLow
    };
  }

  public render() {
    const { params } = this.props.match;
    const category = CategoryConditionList.find(ca => ca === params.category);
    const peopleRange = PeopleRangeConditionList.find(
      po => po === params.peopleRange
    );
    const priceRange = PriceRangeConditionList.find(
      po => po === params.priceRange
    );

    if (category && peopleRange && priceRange) {
      const osechiList = osechiStore.where(
        category,
        peopleRange,
        priceRange,
        this.state.sort
      );
      return (
        <Search
          osechiList={osechiList}
          sort={this.state.sort}
          onChangeSort={this.onChangeSort}
        />
      );
    }

    return <div>unko</div>;
  }

  private onChangeSort = (sort: SortCondition) => {
    this.setState({ sort });
  };
}

export default withRouter(WrappedSearch);
