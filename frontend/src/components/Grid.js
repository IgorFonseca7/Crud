import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { FaTrash, FaEdit } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { toast } from 'react-toastify';

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-wrap: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: 2px solid #bbb;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none;"}
    }
`;

export const Td = styled.td`
    padding: 15px;
    text-align: ${props => (props.alignCenter ? "center" : "start")};
    width: ${props => props.width ? props.width : "auto"};

        @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none;"}
    }
`;

const Grid = ({ users }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyweb>Fone</Th>
                    <Th></Th>
                    <Th></Th>
                </tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="20%" onlyweb>{item.fone}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit />
                        </Td>
                        <Td alignCenter width="5%"> 
                            <FaTrash  />
                            </Td>
                        </Tr>
                   ))}
            </Tbody>
        </Table>
    );
};

export default Grid;