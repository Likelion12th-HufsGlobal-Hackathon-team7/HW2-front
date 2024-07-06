import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { ViewMemo } from "../../pages/infolder/Memo/ViewMemo";

function FileItems() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

  return (
    <>
      <FileItem>
        <FileButton onClick={toggleModal}>
          <img src="https://i.imgur.com/jZFUfRN.png" alt="memo" />
        </FileButton>
        {showModal && (
            <ViewMemo onClose={toggleModal} />
        )}
        <p>새 메모</p>
      </FileItem>
    </>
  );
}

export default FileItems;

const FileButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

const FileItem = styled.div`
  text-align: center;
`;
