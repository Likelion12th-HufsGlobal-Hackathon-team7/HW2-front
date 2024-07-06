import React, { useState } from "react";
import styled from "styled-components";
import { NewMemo } from "./Memo/NewMemo";
import FileItems from "../../components/infolder/FileItems";

function InFolderPage() {
  const [showModal, setShowModal] = useState(false);
  const [uploadedModalTitle, setUploadedModalTitle] = useState("");
  const [uploadedModalContent, setUploadedModalContent] = useState("");
  const [files, setFiles] = useState([]);
  const [Id, setId] = useState(1);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addFile = () => {
    if (uploadedModalTitle.trim()) {
      setFiles([...files, { id: Id, title: uploadedModalTitle, content: uploadedModalContent }]);
      setUploadedModalTitle("");
      setUploadedModalContent("");
      setId(Id + 1);
      toggleModal();
    }
  };

  const handleSave = (id, newTitle, newContent) => {
    setFiles(files.map(file => file.id === id ? { ...file, title: newTitle, content: newContent } : file));
  };

  const handleDelete = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <>
      <InFolderBox>
        <h1>새 폴더</h1>
        <hr />
        <ButtonBox>
          <ModalButton onClick={toggleModal}>메모 생성하기</ModalButton>
        </ButtonBox>
        {showModal && (
          <NewMemo
            Title={uploadedModalTitle}
            LoadingTitle={setUploadedModalTitle}
            Content={uploadedModalContent}
            LoadingContent={setUploadedModalContent}
            nextId={Id}
            nextsetId={setId}
            onSubmit={addFile}
          />
        )}
        <FileBox>
          {files.map((file) => (
            <FileItems
              key={file.id}
              id={file.id}
              FileTitle={file.title}
              FileContent={file.content}
              onDelete={() => handleDelete(file.id)}
              onSave={handleSave}
            />
          ))}
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
  flex-wrap: wrap;
`;
