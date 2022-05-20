import { Label, Text, Input } from './Filter.styled';
import { changeFilter } from 'redux/contacts/contacts-slice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import React from 'react';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const changeFieldFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={changeFieldFilter} name="filter" />
    </Label>
  );
};

export default Filter;
