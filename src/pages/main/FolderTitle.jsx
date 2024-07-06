import styled from "styled-components"
import { useState } from "react"

const FolderModal = styled.div`
    border-radius: 0.625rem;
    border: 5px solid #000;
    background: #FFF;
    width: 30rem;
    height: 20rem;
    margin : 5rem 35rem ;
    position : absolute;
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
const Name = styled.h2`
`

export function FolderTitle({FolderName,FolderNameing}){


    function HandleFolderTitle(event){
        FolderNameing(event.target.value)
    }
    console.log(FolderName);
    return(
        <FolderModal>
            <Name>폴더의 이름을 작성해주새요</Name>
            <FolderTitleInput 
            type ="text" 
            placeholder = "폴더의 제목을 입력해주세요" 
            value = {FolderName}
            onChange = {HandleFolderTitle}
            />
            <ModalButton>생성하기</ModalButton>
        </FolderModal>

    )
}