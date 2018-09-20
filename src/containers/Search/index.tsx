import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import OsechiView from '@src/components/Osechi';
import {
  CategoryConditionList,
  Osechi,
  PeopleRangeCondition,
  PeopleRangeConditionList,
  PeopleRangeConditionNameList,
  PriceRangeCondition,
  PriceRangeConditionList,
  SortCondition,
  SortConditionList,
  SortConditionNameList
} from '@src/types';
import { osechiStore } from '@src/store/osechiStore';

export interface SearchProps {
  osechiList: Osechi[];
  peopleRange: PeopleRangeCondition;
  sort: SortCondition;
  onChangePeopleRange: (peopleRange: PeopleRangeCondition) => void;
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

const Search: React.SFC<SearchProps> = ({
  osechiList,
  peopleRange,
  sort,
  onChangePeopleRange,
  onChangeSort
}) => {
  const onChangePeopleRangeHandler = (
    e: React.SyntheticEvent<HTMLSelectElement>
  ) => {
    const value = e.currentTarget.value;
    onChangePeopleRange(value as PeopleRangeCondition);
  };

  return (
    <Root>
      <div>
        <select
          name="peopleRange"
          id="peopleRange"
          value={peopleRange}
          onChange={onChangePeopleRangeHandler}
        >
          {PeopleRangeConditionList.map((pr, i) => {
            return (
              <option value={pr} key={pr}>
                {PeopleRangeConditionNameList[i]}
              </option>
            );
          })}
        </select>
      </div>
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

      console.dir(this.onChangePriceRange);

      return (
        <Search
          osechiList={osechiList}
          peopleRange={peopleRange}
          sort={this.state.sort}
          onChangePeopleRange={this.onChangePeopleRange}
          onChangeSort={this.onChangeSort}
        />
      );
    }

    return <div>unko</div>;
  }

  private onChangePeopleRange = (peopleRange: PeopleRangeCondition) => {
    const { params } = this.props.match;
    this.props.history.push(
      `/categories/${params.category}/${peopleRange}/${params.priceRange}`
    );
  };

  private onChangePriceRange = (priceRange: PriceRangeCondition) => {
    const { params } = this.props.match;
    this.props.history.push(
      `/categories/${params.category}/${params.peopleRange}/${priceRange}`
    );
  };

  private onChangeSort = (sort: SortCondition) => {
    this.setState({ sort });
  };
}

export default withRouter(WrappedSearch);
