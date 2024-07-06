import styled from "styled-components"

const Modal = styled.div`
    border-radius: 0.625rem;
    border: 5px solid #000;
    background: #FFF;
    width: 50rem;
    height: 35rem;
    margin: 8rem 25rem;
    position : absolute;
`

const ModalButton = styled.button`
    width: 13rem;
    height: 3rem;
    margin: 0rem 1rem 1rem 17rem;
`

const ModalTitleInput = styled.input`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 3rem;
    margin: 0rem 2rem;
`

const ModalContentInput = styled.input`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 15rem;
    margin: 1rem 2rem;
`

export function NewMemo({ Title , LoadingTitle , Content , LoadingContent }) {
    
    function handleTitle(event) {
        LoadingTitle(event.target.value);
    }

    function handleContent(event) {
        LoadingContent(event.target.value);
    }

    console.log(Title);
    console.log(Content);

    return (
        <Modal>
            <h2>메모의 제목을 입력해주세요</h2>
            <ModalTitleInput 
                type="text" 
                placeholder="메모의 제목을 입력해주세요"
                value={Title}
                onChange={handleTitle} 
            />
            <h2>메모의 내용을 입력해주세요</h2>
            <ModalContentInput 
                type="text" 
                placeholder="메모의 내용을 입력해주세요" 
                value={Content} 
                onChange={handleContent} 
            />
            <ModalButton>생성하기</ModalButton>
        </Modal>
    );
}
