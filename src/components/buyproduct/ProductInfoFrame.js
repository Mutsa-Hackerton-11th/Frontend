import { styled } from "styled-components";

export default function ProductInfoFrame({ details, hasSelectBtn, onClick }) {
  return (
    <FrameWrapper
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      {details.map((detail, index) => {
        return (
          <div>
            <div
              style={{
                padding: "3rem 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  cursor: hasSelectBtn && index === 0 ? "pointer" : null,
                }}
              >
                {detail.category}
              </span>
            </div>
            <div
              style={{
                padding: "2rem 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  cursor: hasSelectBtn && index === 0 ? "pointer" : null,
                }}
                onClick={onClick && index === 0 ? onClick : null}
              >
                {index === 1 ? (
                  <img
                    style={{
                      width: "10rem",
                      height: "13.4rem",
                    }}
                    alt="주문 사진"
                    src={detail.detail}
                  />
                ) : (
                  detail.detail
                )}
              </span>
            </div>
          </div>
        );
      })}
    </FrameWrapper>
  );
}

const FrameWrapper = styled.div`
  position: relative;
  padding: 1rem;
  text-align: center;
  border: none; /* Remove border from the main element */

  &::before {
    content: "";
    position: absolute;
    top: 26%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    border: 1px solid #e8e8e8;
  }
  span {
    ${(props) => props.theme.fontStyles.text}
  }
`;
