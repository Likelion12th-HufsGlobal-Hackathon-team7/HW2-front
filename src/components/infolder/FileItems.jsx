import { useState } from "react";
import styled from "styled-components";
import { ViewMemo } from "../../pages/infolder/Memo/ViewMemo";

function FileItems({ id, FileTitle, FileContent, onDelete, onSave }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <FileItem>
                <FileButton onClick={toggleModal}>
                    <img src="https://i.imgur.com/jZFUfRN.png" alt="memo" />
                </FileButton>
                {showModal && (
                    <ViewMemo
                        id={id}
                        Title={FileTitle}
                        Content={FileContent}
                        onClose={toggleModal}
                        onDelete={onDelete}
                        onSave={onSave}
                    />
                )}
                <p>{FileTitle}</p>
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
