import styled from '@emotion/styled';

export const Button = styled.button`
font-size: 15px;
border: 1px solid grey;
border-radius: 10px;
background-color: white;
cursor: pointer;
:not(:last-child) {
    margin-right: 10px;
}
height: 30px;
width: 100px;
:hover {
    font-weight: bold;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: lightskyblue;
}
`