import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegisterItems = () => {
  const [values, setValues] = useState({
    userId: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지
    if (values.userId === "" || values.password === "") {
      alert("모든 항목을 입력해주세요.");
    } else {
      console.log("userId:", values.userId);
      console.log("password:", values.password);
      // 회원가입 처리 로직 추가
      alert("회원가입 성공");
      navigate("/login");
    }
  };

  return (
    <div>
      <RegisterForm>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <InputHere>
              <label htmlFor="userId">UserId</label>
              <input
                type={"text"}
                id="userId"
                name="userId" // 추가된 부분
                value={values.userId}
                onChange={handleChange}
                placeholder={"ID를 입력해 주세요."}
              />
            </InputHere>

            <InputHere>
              <label htmlFor="password">Password</label>
              <input
                type={"password"}
                id="password"
                name="password" // 추가된 부분
                value={values.password}
                onChange={handleChange}
                placeholder={"비밀번호를 입력해 주세요."}
              />
            </InputHere>
          </InputBox>

          <ModalButton type="submit">회원가입 하기</ModalButton>
        </form>
      </RegisterForm>
    </div>
  );
};

export default RegisterItems;

const RegisterForm = styled.div`
  justify-content: center;
  display: flex;
`;
const ModalButton = styled.button`
  width: 13rem;
  height: 3rem;
  margin: 0.5rem;
`;

const InputHere = styled.div`
  display: flex;
  column-gap: 0.5rem;
  justify-content: center;
`;

const InputBox = styled.div`
  width: 30rem;
  display: grid;
  justify-content: center;
  row-gap: 0.5rem;
`;
