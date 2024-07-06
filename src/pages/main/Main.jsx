import React, { useState } from "react";
import styled from "styled-components";
import { FolderTitle } from "./FolderTitle"; // 적절한 경로로 수정하세요
import FolderItems from "../../components/main/FolderItems"; // 적절한 경로로 수정하세요

function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const [uploadedFolderTitle, setUploadedFolderTitle] = useState("");
  const [folders, setFolders] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addFolder = () => {
    if (uploadedFolderTitle.trim()) {
      setFolders([...folders, uploadedFolderTitle]);
      setUploadedFolderTitle("");
      toggleModal();
    }
  };

  return (
    <MainBox>
      <h1>userId님의 메모장입니다</h1>
      <hr />
      <ButtonBox>
        <ModalButton onClick={toggleModal}>폴더 생성하기</ModalButton>
      </ButtonBox>
      {showModal && (
        <FolderTitle
          FolderName={uploadedFolderTitle}
          FolderNameing={setUploadedFolderTitle}
          onSubmit={addFolder}
        />
      )}
      <FolderBox>
        {folders.map((folderName, index) => (
          <FolderItems key={index} FolderNamed={folderName} />
        ))}
      </FolderBox>
    </MainBox>
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
  flex-wrap: wrap;
  gap: 2rem;
`;
