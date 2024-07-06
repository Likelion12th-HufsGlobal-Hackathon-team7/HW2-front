import { useState } from "react";
import { NewMemo } from "./Memo/NewMemo";

export function Example() {
    const [uploadedModalTitle, setUploadedModalTitle] = useState("");
    const [uploadedModalContent, setUploadedModalContent] = useState("");
    
    function setUploadedModalTitle(){
        return(uploadedModalTitle)
    }

    return (
        <>
            <NewMemo 
                uploadedModalTitle={uploadedModalTitle}
                setUploadedModalTitle={setUploadedModalTitle}
                uploadedModalContent={uploadedModalContent}
                setUploadedModalContent={setUploadedModalContent}
            />
        </>
    );
}
