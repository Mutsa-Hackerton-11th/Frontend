import React, { useState } from "react";
import styled from "styled-components";

function ItemCategoryInput({ onCategoryChange }) {
  const categories = ["아우터", "상의", "하의", "신발", "가방", "악세서리"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <StyledWrapper>
      {categories.map((category, index) => (
        <StyledInputLabel key={index}>
          <input
            type="radio"
            value={category}
            checked={selectedCategory === category}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </StyledInputLabel>
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 50rem;
  height: 15rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.fontColor.gray};

  display: inline;
  align-items: center;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
`;

const StyledInputLabel = styled.label`
  ${(props) => props.theme.fontStyles.text}
  padding-right:1rem;
`;

export default ItemCategoryInput;
