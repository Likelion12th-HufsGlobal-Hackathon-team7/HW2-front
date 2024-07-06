import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import FolderImage from "C:/Users/ssoo_zl/OneDrive/바탕 화면/HW2-front/src/components/main/MainImage/Folders.png";

function FolderItems() {
  const navigate = useNavigate();

  const handleFolderClick = () => {
    navigate("/main/infolder");
  };

  return (
    <>
      <FolderItem>
        <FolderButton onClick={handleFolderClick}>
            <img src={FolderImage} alt="Folder" />
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
