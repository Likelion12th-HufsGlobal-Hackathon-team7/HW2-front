import styled from "styled-components"

const Modal = styled.div`
    border-radius: 0.625rem;
    border: 5px solid #000;
    background: #FFF;
    width: 50rem;
    height: 35rem;
    margin : 0rem 20rem ;
    position : absolute;
`

const ModalButton = styled.button`
    width : 13rem;
    height : 3rem;
    margin : 0rem 1rem 1rem 2rem;
`

const ModalTitle = styled.div`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height:3rem;
    margin : 2rem;
`

const ModalContent = styled.div`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 45rem;
    height: 20rem;
    margin: 2rem;
`
//h2태그는 후에 transpose로 이동

export function ViewMemo(){
    return(
       <Modal>
            <ModalTitle>
                <h2>저녁을 먹었어요</h2>
            </ModalTitle>
            <ModalContent>
                <h2>맛있었어요!</h2>
            </ModalContent>
            <ModalButton>돌아가기</ModalButton>
            <ModalButton>수정하기</ModalButton>
            <ModalButton>삭제하기</ModalButton>
       </Modal>
    )
}