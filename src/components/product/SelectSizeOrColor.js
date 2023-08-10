import { styled } from "styled-components";
import { productSize } from "../../state/ProductState";
import ChipButton from "../button/ChipButton";
import ChooseColorButton from "../button/ChooseColorButton";
import { btnState } from "../../state/ButtonState";
import MediaQuery from "../../assets/mediaQuery";

export default function SelectSizeOrColor({
  size,
  colors,
  text,
  nowSize,
  nowColor,
  onClick,
}) {
  const { isBigMobile, isSmallMobile } = MediaQuery();
  return (
    <SelectWrapper
      style={{
        display: isBigMobile | isSmallMobile ? "flex" : null,
      }}
    >
      <SelectWrapperText
        style={{
          marginRight: isBigMobile | isSmallMobile ? "1.5rem" : null,
        }}
      >
        {text}
      </SelectWrapperText>
      {size ? (
        <ButtonWrapper>
          {size.map((size, index) => {
            return (
              <ChipButton
                text={size}
                state={nowSize === index ? btnState.PRESSED : btnState.DEFAULT}
                onClick={() => onClick(index)}
              />
            );
          })}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          {colors.map((color, index) => {
            return (
              <ChooseColorButton
                color={color}
                state={nowColor === index ? btnState.PRESSED : btnState.DEFAULT}
                onClick={() => onClick(index)}
              />
            );
          })}
        </ButtonWrapper>
      )}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  padding-bottom: 2rem;
`;

const SelectWrapperText = styled.div`
  ${(props) => props.theme.fontStyles.subText};
  color: ${(props) => props.theme.colors.fontColor.gray};
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
