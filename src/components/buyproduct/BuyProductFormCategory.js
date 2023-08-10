import { styled } from "styled-components";
import Input from "../input/Input";
import { btnSize, btnState } from "../../state/ButtonState";
import FormButton from "../button/FormButton";

export default function BuyProductFormCategory({ text, bigSize, address }) {
  return (
    <FormCategory>
      <div
        style={{
          width: "20%",
        }}
      >
        <span>{text}</span>
      </div>
      <div>
        <span>
          <Input size={bigSize ? btnSize.L : btnSize.S} />
        </span>
      </div>
      {address ? (
        <div>
          <span>
            <FormButton
              text="우편번호"
              addClass="margin-left:2rem; width:14.5rem; height:7.5rem"
            />
          </span>
        </div>
      ) : null}
    </FormCategory>
  );
}

const FormCategory = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  span {
    ${(props) => props.theme.fontStyles.text}
  }
`;
