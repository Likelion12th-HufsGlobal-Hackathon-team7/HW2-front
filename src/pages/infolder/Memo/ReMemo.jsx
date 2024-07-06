import { useState } from "react";
import styled from "styled-components";

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

const ModalTitleInput = styled.input`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 3rem;
    margin: 2rem;
`;

const ModalContentInput = styled.textarea`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 20rem;
    margin: 2rem;
`;

export function ReMemo({ id, ReTitle, ReContent, onClose, onSave }) {
    const [title, setTitle] = useState(ReTitle);
    const [content, setContent] = useState(ReContent);

    const handleSave = () => {
        onSave(id, title, content);
        onClose();
    };

    return (
        <Modal>
            <ModalTitleInput 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <ModalContentInput 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
            />
            <ModalButton onClick={onClose}>돌아가기</ModalButton>
            <ModalButton onClick={handleSave}>저장하기</ModalButton>
        </Modal>
    );
}
