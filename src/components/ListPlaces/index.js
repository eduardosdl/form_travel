import { useEffect, useState, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';

import { Label, ContainerList, ItemList } from './styles';

export default function ListPlaces({ territoryName }) {
  const [territories, setTerritories] = useState([]);
  const inputRef = useRef(null);
  const {
    fieldName, registerField,
  } = useField(territoryName);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    async function loadTerritories() {
      try {
        const response = await fetch(`https://amazon-api.sellead.com/${territoryName}`);
        const json = await response.json();

        setTerritories(json);
      } catch (error) {
        console.log('error: ', error);
      }
    }

    loadTerritories();
  }, []);

  return (
    <FormGroup>
      <Label>
        Escolha
        {' '}
        {territoryName === 'country' ? 'o país' : 'a cidade'}
      </Label>
      <ContainerList>
        {territories.map(({ name, code }) => (
          <ItemList key={code}>
            <input
              type="checkbox"
              ref={inputRef}
              id={code}
              name={territoryName}
              value={name}
            />
            <label htmlFor={code}>{name}</label>
          </ItemList>
        ))}
      </ContainerList>
    </FormGroup>
  );
}

ListPlaces.propTypes = {
  territoryName: PropTypes.string.isRequired,
};
