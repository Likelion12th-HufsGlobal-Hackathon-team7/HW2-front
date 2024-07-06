import React, { useState } from "react";
import styled from "styled-components";
import LoginItems from "../../components/login/LoginItems";

function LoginPage() {
  return (
    <LoginBox>
      <h1>개인 메모장 서비스입니다.</h1>    
      <h2>개인용 메모장을 이용하기 위해서는 로그인 해주세요.</h2>
      <h2>현재 이용 중인 계정이 없다면 회원가입 후 이용해주세요</h2>
      <LoginItems />
    </LoginBox>
  );
}

export default LoginPage;

const LoginBox = styled.div`
  text-align: center;
  margin: 5rem;
`;
