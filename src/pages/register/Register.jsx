import React from "react";
import styled from "styled-components";
import RegisterItems from "../../components/register/RegisterItems";

function RegisterPage() {
  return (
    <RegisterBox>
      <h1>회원가입 창입니다.</h1>
      <h2>사용할 ID와 Password를 입력해주세요.</h2>
      <RegisterItems />
    </RegisterBox>
  );
}

export default RegisterPage;

const RegisterBox = styled.div`
  text-align: center;
  margin: 5rem;
`;
