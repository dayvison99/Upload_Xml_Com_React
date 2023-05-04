import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 2000%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 15px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Numero Contrato</Th>
          <Th>Nome Contratado</Th>
          <Th>Cod Procedimento</Th>
          <Th>Descr Procedimento</Th>
          <Th>Valor Total</Th>
          <Th>Qtde</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="2%">{item.p_sequencial}</Td>
            <Td width="15%">{item.g_numerocontrato}</Td>
            <Td width="28%">{item.p_nomeContratado}</Td>
            <Td width="15%">{item.pro_codigoprocedimento}</Td>
            <Td width="25%">{item.pro_descricaoprocedimento}</Td>
            <Td width="10%">{item.cp_valortotal}</Td>
            <Td width="20%">{item.qp_quantidadeexecutada}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;