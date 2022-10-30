import { useEffect, useState, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import FormGroup from '../FormGroup';

import { Label, ContainerList, ItemList } from './styles';

export default function ListPlaces({ territoryName, onClick }) {
  const [territories, setTerritories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(null);
  const {
    fieldName, registerField, error,
  } = useField(territoryName);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setIsLoading(true);

    async function loadTerritories() {
      try {
        const response = await fetch(`https://amazon-api.sellead.com/${territoryName}`);
        const json = await response.json();

        setTerritories(json);
        setIsLoading(false);
      } catch (err) {
        console.log('error: ', err);
      }
    }

    loadTerritories();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <FormGroup error={error}>
        <Label>
          Escolha
          {' '}
          {territoryName === 'country' ? 'o país' : 'a cidade'}
        </Label>
        <ContainerList error={error}>
          {territories.map(({ name, code, id }) => (
            <ItemList key={territoryName === 'country' ? code : id}>
              <input
                type="checkbox"
                ref={inputRef}
                id={code}
                name={territoryName}
                value={name}
                onClick={onClick}
              />
              <label htmlFor={code}>{name}</label>
            </ItemList>
          ))}
        </ContainerList>
      </FormGroup>
    </>
  );
}

ListPlaces.propTypes = {
  territoryName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
