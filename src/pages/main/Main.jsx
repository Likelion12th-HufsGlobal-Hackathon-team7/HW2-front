import React, { useState } from "react";
import styled from "styled-components";
import { FolderTitle } from "./FolderTitle";
import FolderItems from "../../components/main/FolderItems";

function MainPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MainBox>
        <h1>userId님의 메모장입니다</h1>
        <hr />
        <ButtonBox>
          <ModalButton onClick={toggleModal}>폴더 생성하기</ModalButton>
        </ButtonBox>
        {showModal && <FolderTitle onClose={toggleModal} />}
        <FolderBox>
          <FolderItems></FolderItems>
          <FolderItems></FolderItems>
        </FolderBox>
      </MainBox>
    </>
  );
}

export default MainPage;

const MainBox = styled.div`
  text-align: left;
  margin: 5rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
  width: 13rem;
  height: 3rem;
  margin: 1rem;
`;

const FolderBox = styled.div`
  display: flex;
  align-items: left;
  gap: 2rem;
`;
