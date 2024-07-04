import styled from "styled-components"

const FolderModal = styled.div`
    border-radius: 0.625rem;
    border: 5px solid #000;
    background: #FFF;
    width: 30rem;
    height: 20rem;
    margin : 8rem 30rem ;
`

const ModalButton = styled.button`
    width : 13rem;
    height : 3rem;
    margin : 5rem 0rem 0rem 8rem;
`

const FolderTitleInput = styled.input`
    border-radius: 0.625rem;
    border: 3px solid #000;
    background: #FFF;
    width: 25rem;
    height:3rem;
    margin : 3rem 0rem 0rem 2rem;
`
const Foldername = styled.h2`
`

export function FolderTitle(){
    return(
        <FolderModal>
            <Foldername>폴더의 이름을 작성해주새요</Foldername>
            <FolderTitleInput type ="text" placeholder = "폴더의 제목을 입력해주세요"/>
            <ModalButton>생성하기</ModalButton>
        </FolderModal>
    )
}