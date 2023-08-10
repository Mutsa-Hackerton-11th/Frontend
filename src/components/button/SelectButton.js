import { styled } from "styled-components";
import { btnState } from "../../state/ButtonState";

export default function SelectButton({ state = btnState.DEFAULT }) {
  return (
    <SelectButtonWrapper>
      {state === btnState.PRESSED ? (
        <div
          style={{
            backgroundColor: "#000",
            width: "1.4rem",
            height: "1.4rem",
            borderRadius: "0.7rem",
          }}
        />
      ) : null}
    </SelectButtonWrapper>
  );
}

const SelectButtonWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  border: 1.4px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
