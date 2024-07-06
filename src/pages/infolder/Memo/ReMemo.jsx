import styled from "styled-components"

const Modal = styled.div`
    border-radius: 0.625rem;
    border: 5px solid #000;
    background: #FFF;
    width: 50rem;
    height: 35rem;
    margin : 8rem 20rem ;
    position : absolute;
`

const ModalButton = styled.button`
    width : 13rem;
    height : 3rem;
    margin : 0rem 1rem 1rem 7rem;
`

const ModalTitleInput = styled.input`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height:3rem;
    margin : 0rem 2rem;
`

const ModalContentInput = styled.input`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 15rem;
    margin: 1rem 2rem;
`
//h2태그는 후에 transpose로 이동

export function ReMemo(){
    return(
       <Modal>
            <h2>수정할 메모의 제목을 입력해주세요</h2>
            <ModalTitleInput type = "text" placeholder = "메모의 제목을 수정해주세요"/>
            <h2>수정할 메모의 내용을 입력해주세요</h2>
            <ModalContentInput type = "text" placeholder = "메모의 내용을 수정해주세요"/>
            <ModalButton>돌아가기</ModalButton>
            <ModalButton>수정하기</ModalButton>
       </Modal>
    )
}