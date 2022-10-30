import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import FormGroup from '../FormGroup';
import { Input } from './styles';

export default function InputContainer({
  name, type, placeholder, maxLength, onBlur,
}) {
  const inputRef = useRef(null);
  const {
    fieldName, registerField, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <FormGroup error={error}>
      <Input
        error={error}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onBlur={onBlur}
      />
    </FormGroup>
  );
}

InputContainer.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
};

InputContainer.defaultProps = {
  type: 'text',
  maxLength: 50,
  onBlur: null,
};

/*
<FormGroup error={getErrorMessageByFieldName('name')}>
  <Input
    error={getErrorMessageByFieldName('name')}
    placeholder="Digite seu nome"
    ref={nameInput}
    onBlur={handleNameChange}
  />
</FormGroup>
 */
