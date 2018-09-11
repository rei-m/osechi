import * as React from 'react';
import styled from 'styled-components';
import { withFormik, Form, FormikHandlers, FormikState } from 'formik';
import { withAppTheme } from '@src/styles';
import {
  CategoryCondition,
  PeopleRangeCondition,
  PeopleRangeConditionList,
  PriceRangeCondition,
  PriceRangeConditionList
} from '@src/types';

const StartButton = withAppTheme(styled.button)`
  margin-top: ${({ theme }) => theme.spacing4x};
  background-color: ${({ theme }) => theme.colorAccent} !important;
  &:active {
    background-color: ${({ theme }) => theme.colorAccentActive} !important;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colorAccentHover} !important;
  }
`;

export interface SearchFormValues {
  category: string;
  peopleRange: string;
  priceRange: string;
}

export type SearchFormProps = FormikState<SearchFormValues> & FormikHandlers;

const SearchForm = (_props: SearchFormProps) => (
  <Form>
    <StartButton
      type="submit"
      className="pt-button pt-intent-primary pt-large pt-icon-edit"
    >
      おせちをさがす
    </StartButton>
  </Form>
);

export interface EnhanceSearchFormProps {
  initialCategory: CategoryCondition;
  initialPeopleRange: PeopleRangeCondition;
  initialPriceRange: PriceRangeCondition;
  handleSubmit: (
    category: CategoryCondition,
    peopleRange: PeopleRangeCondition,
    priceRange: PriceRangeCondition
  ) => void;
}

const EnhanceSearchForm = withFormik({
  handleSubmit: (values, { props }) => {
    props.handleSubmit(
      values.category,
      PeopleRangeConditionList[Number(values.peopleRange)],
      PriceRangeConditionList[Number(values.priceRange)]
    );
  },
  mapPropsToValues: (props: EnhanceSearchFormProps) => ({
    category: props.initialCategory,
    peopleRange: props.initialPeopleRange.toString(),
    priceRange: props.initialPriceRange.toString()
  })
})(SearchForm);

export default EnhanceSearchForm;
