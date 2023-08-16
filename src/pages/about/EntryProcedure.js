import WebBanner from "../../components/banner/WebBanner";
import { useNavigate } from "react-router-dom/dist";
import PrimaryButton from "../../components/button/PrimaryButton";
import { styled } from "styled-components";

export default function EntryProcedure() {
    const navigate = useNavigate();

    const storeEntryClick = () => {
      navigate("/storeentry");
    };

    return (
        <EntryProcedureWrapper>
            <WebBanner text="About" subText="About > 입점 절차" />
            <BoxWrapper>
                <IntroText>
                    <h1>입점 절차</h1>
                    <span>
                        "사이트명"은 정책을 사전 안내하여 투명한 입점 심사를 지향합니다.
                    </span><br/>
                    <span>
                        ● 자사의 판매 유형에 따른 스토어 유형(쇼핑몰 혹은 브랜드)으로만 
                        입점이 가능하며, 스토어 유형별 중복 입점은 불가합니다.
                    </span><br/>
                    <span>
                        ● 심사 결과는 영업일 기준 1~3일 정도 소요되며 기재해주신 이메일로 
                        결과를 안내하고 있습니다.
                    </span><br/>
                    <span>
                        ● 입점 신청은 셀러 회원가입 > 마이페이지 > 입점신청 버튼을 통해 신청 가능합니다.
                    </span>
                </IntroText>
                <img
                    src="/img/AboutImg2.png"
                    style={{
                        width: "50vw",
                        height: "40vw",
                        float: "right",
                    }}
                />
            </BoxWrapper>
            <ProcedureInfo>
                <span>입점 신청</span>
                <p>></p>
                <span>심사 중</span>
                <p>></p>
                <span>상품 등록</span>
                <p>></p>
                <span>입점 완료</span>
            </ProcedureInfo>
            <EntryButton>
                <PrimaryButton 
                    text="바로가기" 
                    addClass={"width: 22rem"}
                    onClick={storeEntryClick}
                />
            </EntryButton>
        </EntryProcedureWrapper>
    );
}

const EntryProcedureWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const BoxWrapper = styled.div`
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const IntroText = styled.div`
    width: 100%;
    padding: 0 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        ${(props) => props.theme.fontStyles.title}
        margin: 7rem 0;
        display: flex;
    }
    span {
        ${(props) => props.theme.fontStyles.text}
        margin-bottom: 2.5rem;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        line-height: 4rem;
    }
`;

const ProcedureInfo = styled.div`
    height: 50rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    span {
        ${(props) => props.theme.fontStyles.subTitle}
    }
    p {
        ${(props) => props.theme.fontStyles.title}
    }
`;

const EntryButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;