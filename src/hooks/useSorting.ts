import { useState } from 'react';
import { IContact } from 'types/IContact';

const useSorting = (arr: IContact[]) => {
  const [value, setValue] = useState<null | string>(null);

  const types = {
    DATE_CREATION: 'Date creation',
    ALPHABET_AZ: 'Alphabet A-Z',
    ALPHABET_ZA: 'Alphabet Z-A',
  };

  const getValue = (value: string) => setValue(value);

  const sort = () => {
    switch (value) {
      case types.DATE_CREATION:
        return arr.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

      case types.ALPHABET_AZ:
        return arr.sort((a, b) => (a.name < b.name ? -1 : 1));

      case types.ALPHABET_ZA:
        return arr.sort((a, b) => (a.name > b.name ? -1 : 1));

      default:
        return;
    }
  };

  return { sort, getValue };
};

export default useSorting;
