import React, { useState } from "react";
import styled from "styled-components";
import { NewMemo } from "./NewMemo";
import FileItems from "../../components/infolder/FileItems";

function InFolderPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <InFolderBox>
        <h1>새 폴더</h1>
        <hr />
        <ButtonBox>
          <ModalButton onClick={toggleModal}>메모 생성하기</ModalButton>
        </ButtonBox>
        {showModal && <NewMemo onClose={toggleModal} />}
        <FileBox>
          <FileItems></FileItems>
          <FileItems></FileItems>
        </FileBox>
      </InFolderBox>
    </>
  );
}

export default InFolderPage;

const InFolderBox = styled.div`
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

const FileBox = styled.div`
  display: flex;
  align-items: left;
  gap: 2rem;
`;

