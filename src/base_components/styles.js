import styled, { css } from 'styled-components';

const button = styled.button`
    background: none;
    border: none;
    padding: 4px 20px;
    font-size: 14px;
    margin: 20px 0;
    ${props => props.link && css`
        text-decoration: underline;
        color: blue;
    `};
    ${props => props.default && css`
        border: 1px solid #ccc;
        border-radius: 4px;
    `};
    ${props => props.primary && css`
        background: #2196F3;
        color: white;
        border: #2196F3;
        border-radius: 4px;
    `};
    ${props => props.warning && css`
        background: #FF9800;
        color: white;
        border: #FF9800;
        border-radius: 4px;
    `};
    ${props => props.success && css`
        background: #8BC34A;
        color: white;
        border: #8BC34A;
        border-radius: 4px;
    `};
    ${props => props.danger && css`
        background: red;
        color: white;
        border: red;
        border-radius: 4px;
    `}
    &:hover{
        cursor: pointer;
    }
    outline: 0;

`;
export default button;
