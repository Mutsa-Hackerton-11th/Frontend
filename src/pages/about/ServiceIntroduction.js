import WebBanner from "../../components/banner/WebBanner";
import { styled } from "styled-components";

export default function ServiceIntroduction() {
    return (
        <ServiceIntroductionWrapper>
            <WebBanner text="About" subText="About > 서비스 소개" />
            <BoxWrapper>
                <IntroText>
                    <h1>서비스 소개</h1>
                    <span>
                        "사이트명"은 이전에 쇼핑몰을 운영한 경험이 없어도,
                        개설한지 얼마 되지 않아 인지도가 높지 않아도 쉽게 입점이 가능합니다.
                    </span>
                    <br/>
                    <span>
                        고객과 자사몰을 연결해주는 플랫폼인 "사이트명"은
                        이용자에게는 취향에 맞는 예쁜 옷이 많은 곳으로,
                        판매자에게는 운영이 편리하고 매출 상승에 도움을 주는 플랫폼입니다.
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
        </ServiceIntroductionWrapper>
    );
}

const ServiceIntroductionWrapper = styled.div`
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