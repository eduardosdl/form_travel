import { useRef } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import {
  Form, ButtonContainer,
} from './styles';

import InputContainer from '../InputContainer';
import ListPlaces from '../ListPlaces';
import { Button } from '../Button';

export default function TravelForm() {
  const formRef = useRef(null);

  function handleNameChange(event) {
    if (!event.target.value) {
      formRef.current.setFieldError('name', 'Name é obrigatorio');
    } else {
      formRef.current.setFieldError('name', null);
    }
  }

  function handleEmailChange(event) {
    if (!isEmailValid(event.target.value)) {
      formRef.current.setFieldError('email', 'E-mail inválido');
    } else {
      formRef.current.setFieldError('email', null);
    }
  }

  function handlePhoneChange(event) {
    if (!(event.target.value.length > 9)) {
      formRef.current.setFieldError('phone', 'Telefone inválido');
    } else {
      formRef.current.setFieldError('phone', null);
    }
  }

  function handleCpfChange(event) {
    if (!(event.target.value.length > 10)) {
      formRef.current.setFieldError('cpf', 'CPF inválido');
    } else {
      formRef.current.setFieldError('cpf', null);
    }
  }

  return (
    <Form ref={formRef} noValidate>
      <InputContainer
        name="name"
        placeholder="Digite seu nome *"
        error={formRef.current?.getFieldError('name')}
        onBlur={handleNameChange}
      />
      <InputContainer
        name="email"
        type="email"
        placeholder="Digite seu email *"
        error={formRef.current?.getFieldError('email')}
        onBlur={handleEmailChange}
      />
      <InputContainer
        name="phone"
        placeholder="Digite seu telefone com DDD *"
        maxLength={11}
        error={formRef.current?.getFieldError('phone')}
        onBlur={handlePhoneChange}
      />
      <InputContainer
        name="cpf"
        placeholder="Digite seu CPF *"
        maxLength={11}
        error={formRef.current?.getFieldError('cpf')}
        onBlur={handleCpfChange}
      />

      <ListPlaces
        territoryName="country"
      />

      <ListPlaces
        territoryName="city"
      />

      <ButtonContainer>
        <Button type="submit">
          Enviar
        </Button>
      </ButtonContainer>
    </Form>
  );
}
