import * as React from 'react';
import { Form, withFormik, WithFormikConfig, FormikProps } from 'formik';
import styled from '@src/styles/styled-components';
import SelectField from './SelectField';
import {
  CategoryConditionKey,
  CategoryConditionList,
  PeopleRangeConditionKey,
  PeopleRangeConditionList,
  PriceRangeConditionKey,
  PriceRangeConditionList,
} from '@src/types';

const SearchButton = styled.button(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: `${theme.colorAccent} !important`,
  color: `#fff`,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  fontSize: theme.fontSize.l,
  cursor: `pointer`,
  borderRadius: `4px`,
  '&:active': {
    backgroundColor: `${theme.colorAccent} !important`,
  },
  '&:hover': {
    backgroundColor: `${theme.colorAccentHover} !important`,
  },
}));

export type FormValues = Readonly<{
  categoryKey: CategoryConditionKey;
  peopleRangeKey: PeopleRangeConditionKey;
  priceRangeKey: PriceRangeConditionKey;
}>;

export type FormKeys = keyof FormValues;

export type OwnProps = Readonly<{
  initialCategoryKey: CategoryConditionKey;
  initialPeopleRangeKey: PeopleRangeConditionKey;
  initialPriceRangeKey: PriceRangeConditionKey;
  onSubmitForm: (
    categoryKey: CategoryConditionKey,
    peopleRangeKey: PeopleRangeConditionKey,
    priceRangeKey: PriceRangeConditionKey
  ) => void;
  className?: string;
}>;

export type Props = OwnProps & FormikProps<FormValues>;

const SearchForm = ({ className }: Props) => (
  <Form style={{ maxWidth: 380, margin: '16px auto' }} className={className}>
    <SelectField
      label="おせちのジャンル"
      name="categoryKey"
      itemList={CategoryConditionList}
    />
    <SelectField
      label="ご利用人数"
      name="peopleRangeKey"
      itemList={PeopleRangeConditionList}
    />
    <SelectField
      label="お値段"
      name="priceRangeKey"
      itemList={PriceRangeConditionList}
    />
    <SearchButton type="submit">おせちをさがす</SearchButton>
  </Form>
);

export const withFormikConfig: WithFormikConfig<OwnProps, FormValues> = {
  handleSubmit: (values, { props }) => {
    props.onSubmitForm(
      values.categoryKey,
      values.peopleRangeKey,
      values.priceRangeKey
    );
  },
  mapPropsToValues: ({
    initialCategoryKey,
    initialPeopleRangeKey,
    initialPriceRangeKey,
  }: OwnProps) => {
    return {
      categoryKey: initialCategoryKey,
      peopleRangeKey: initialPeopleRangeKey,
      priceRangeKey: initialPriceRangeKey,
    };
  },
};

export default withFormik(withFormikConfig)(SearchForm);
