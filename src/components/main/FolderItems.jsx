import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function FolderItems() {
  const navigate = useNavigate();

  const handleFolderClick = () => {
    navigate("/main/infolder");
  };

  return (
    <>
      <FolderItem>
        <FolderButton onClick={handleFolderClick}>
            <img src="https://i.imgur.com/w5LR6Ga.png" alt="Folder" />
        </FolderButton>
        <p>새 폴더</p>
      </FolderItem>
    </>
  );
}

export default FolderItems;

const FolderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

const FolderItem = styled.div`
  text-align: center;
`;
