import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledFileInputContainer = styled.div``;

const StyledFileInputLabel = styled.label`
  /* 파일 선택 버튼 레이블 스타 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: black;
  font-size: 16px;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.buttonColor.gray};

  width: 30rem;
  height: 7.5rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.fontColor.gray};
`;

const StyledInput = styled.input`
  /* 파일 입력 요소의 표시를 숨기고 원하는 스타일을 추가하세요 */
  display: none;
`;

const FileNameDisplay = styled.div`
  /* 선택한 파일 이름을 표시할 엘리먼트의 스타일을 추가하세요 */
  margin-top: 0.5rem;
  ${(props) => props.theme.fontStyles.text}
`;

function FileInput() {
  const fileInputRef = useRef(null);
  const [selectedFileNames, setSelectedFileNames] = useState([]);

  const handleFileButtonClick = () => {
    fileInputRef.current.click(); // 숨겨진 파일 입력 요소를 클릭
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // 선택한 파일 이름을 배열에 추가
      setSelectedFileNames([...selectedFileNames, selectedFile.name]);
    }
  };

  return (
    <StyledFileInputContainer>
      <StyledFileInputLabel onClick={handleFileButtonClick}>
        파일 업로드
      </StyledFileInputLabel>
      {selectedFileNames.map((fileName, index) => (
        <FileNameDisplay key={index}>{fileName}</FileNameDisplay>
      ))}
      <StyledInput
        type="file"
        name="Img"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </StyledFileInputContainer>
  );
}

export default FileInput;
