import { useRef, useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

import {
  Form, ButtonContainer, Message,
} from './styles';

import Success from '../Success';
import InputContainer from '../InputContainer';
import ListPlaces from '../ListPlaces';
import { Button } from '../Button';

export default function TravelForm() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
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

  function handleCountryClick(event) {
    if (event.target.checked) {
      setCountries((prevState) => [
        ...prevState,
        event.target.value,
      ]);
      formRef.current.setFieldError('country', null);
    } else {
      setCountries((prevState) => prevState.filter(
        (country) => country !== event.target.value,
      ));
      if ((countries.length - 1) < 1) {
        formRef.current.setFieldError('country', 'escolha ao menos um pais');
      }
    }
  }

  function handleCityClick(event) {
    if (event.target.checked) {
      setCities((prevState) => [
        ...prevState,
        event.target.value,
      ]);
      formRef.current.setFieldError('city', null);
    } else {
      setCities((prevState) => prevState.filter(
        (city) => city !== event.target.value,
      ));
      if ((cities.length - 1) < 1) {
        formRef.current.setFieldError('city', 'escolha ao menos uma cidade');
      }
    }
  }

  function handleSubmit(data, { reset }) {
    const haveErrors = Object.values(formRef.current.getErrors()).filter((value) => value);
    const haveData = Object.values(data).filter((value) => value);

    // id(!haverror)
    if (haveErrors.length || !haveData.length || !cities.length || !countries.length) {
      setFail(true);
      return;
    }

    setFail(false);
    setSuccess(true);
    reset();
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <>
      {success && <Success />}
      <Form ref={formRef} onSubmit={handleSubmit} noValidate>
        <InputContainer
          name="name"
          placeholder="Digite seu nome *"
          onBlur={handleNameChange}
        />
        <InputContainer
          name="email"
          type="email"
          placeholder="Digite seu email *"
          onBlur={handleEmailChange}
        />
        <InputContainer
          name="phone"
          placeholder="Digite seu telefone com DDD *"
          maxLength={11}
          onBlur={handlePhoneChange}
        />
        <InputContainer
          name="cpf"
          placeholder="Digite seu CPF *"
          maxLength={11}
          onBlur={handleCpfChange}
        />

        <ListPlaces
          territoryName="country"
          onClick={handleCountryClick}
        />

        <ListPlaces
          territoryName="city"
          onClick={handleCityClick}
        />

        <ButtonContainer>
          {fail && <Message>Todos os campos devem ser preenchidos</Message>}
          <Button type="submit">
            Enviar
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}
