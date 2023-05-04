import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.guia.value &&
      !user.profissional.value &&
      !user.procedimentos.value
    ) {
      return toast.warn("Preencha um dos campos!");
    }

    user.guia.value = "";
    user.profissional.value = "";
    user.fonprocedimentos.value = "";
    
    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Guia</Label>
        <Input name="guia" />
      </InputArea>
      <InputArea>
        <Label>Profissional</Label>
        <Input name="profissional" />
      </InputArea>
      <InputArea>
        <Label>Procedimento</Label>
        <Input name="procedimentos" />
      </InputArea>
     

      <Button type="submit">Buscar</Button>
    </FormContainer>
  );
};

export default Form;