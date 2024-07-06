import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function LoginItems() {
  const [values, setValues] = useState({
    userId: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지
    if (values.userId === "" || values.password === "") {
      alert("모든 항목을 입력해주세요.");
    } else {
      console.log("userId:", values.userId);
      console.log("password:", values.password);
      // 로그인 처리 로직 추가
      navigate("/main");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <LoginForm>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <InputHere>
              userId
              <input
                name="userId"
                value={values.userId}
                onChange={handleChange}
                placeholder={"ID를 입력해 주세요."}
              />
            </InputHere>
            <InputHere>
              password 
              <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder={"비밀번호를 입력해 주세요."}
              />
            </InputHere>
          </InputBox>

          <div>
            <ModalButton type={"submit"}>로그인</ModalButton>
          </div>

          <ModalButton onClick={handleRegister}>회원가입</ModalButton>
        </form>
      </LoginForm>
    </>
  );
}

export default LoginItems;

const LoginForm = styled.div`
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
