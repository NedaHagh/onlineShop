import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  height:300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dedede;
  margin-top: 32px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color:"white";
`;
const SignUpContainer = styled.div`
box-sizing: border-box;
width: 300px;
height:380px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #dedede;
margin-top: 32px;
margin-left: 50%;
transform: translateX(-50%);
background-color:"white";
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom:5px;
`;

const Input = styled.input`
  border: 1px solid lightgrey;
  height:34px;
  font-size: 1rem;
  font-weight: 400;
  width: 80%;
  border-radius:3px;
  background-color:rgb(232, 240, 254);
`;

const Button = styled.button`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 10px 0 5px;
  padding:0px 20px 2px;
  width: 80%;
  height:34px;
  line-height: 1.222;
  border-radius: 8px;
  background-color: #00bfd6;
  border: 1px solid #41a7b4;
  color: #fff;
  position:relative;
`;

export { Button, Form, Container,SignUpContainer, Input };
