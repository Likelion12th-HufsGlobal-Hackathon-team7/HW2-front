import { useState } from "react";
import styled from "styled-components";
import { ReMemo } from "./ReMemo";

const Modal = styled.div`
    border-radius: 0.625rem;
    border: 5px solid #000;
    background: #FFF;
    width: 50rem;
    height: 35rem;
    margin: 0rem 20rem;
    position: absolute;
`;

const ModalButton = styled.button`
    width: 13rem;
    height: 3rem;
    margin: 0rem 1rem 1rem 2rem;
`;

const ModalTitle = styled.div`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 3rem;
    margin: 2rem;
`;

const ModalContent = styled.div`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 20rem;
    margin: 2rem;
`;

export function ViewMemo({ Title, Content, onClose, id, onDelete, onSave }) {
    const [showEditModal, setShowEditModal] = useState(false);

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
        
    };

    return (
        <Modal>
            {showEditModal ? (
                <ReMemo
                    id={id}
                    ReTitle={Title}
                    ReContent={Content}
                    onClose={() => {
                        onClose();
                        toggleEditModal(); // ReMemo가 닫히면서 toggleEditModal이 다시 호출되어 false로 되돌아감
                        // ViewMemo를 닫음
                    }}
                    onSave={onSave}
                />
            ) : (
                <>
                    <ModalTitle>
                        <h2>{Title}</h2>
                    </ModalTitle>
                    <ModalContent>
                        <h2>{Content}</h2>
                    </ModalContent>
                    <ModalButton onClick={onClose}>돌아가기</ModalButton>
                    <ModalButton onClick={toggleEditModal}>수정하기</ModalButton>
                    <ModalButton onClick={onDelete}>삭제하기</ModalButton>
                </>
            )}
        </Modal>
    );
}
