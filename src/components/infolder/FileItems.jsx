import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { ViewMemo } from "../../pages/infolder/ViewMemo";
import Memo from "C:/Users/ssoo_zl/OneDrive/바탕 화면/HW2-front/src/components/infolder/infolderImage/Memo.png";

function FileItems() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

  return (
    <>
      <FileItem>
        <FileButton onClick={toggleModal}>
          <img src={Memo} alt="memo" />
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
