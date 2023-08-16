import WebBanner from "../../components/banner/WebBanner";
import { styled } from "styled-components";

export default function FeeRating() {
    return (
        <FeeRatingWrapper>
            <WebBanner text="About" subText="About > 수수료 등급" />
            <BoxWrapper>
                <IntroText>
                    <h1>수수료 등급</h1>
                    <span>
                        "사이트명"은 매출 이력 확인을 통한 차등 수수료 지급 방식으로 
                        신규 판매자들도 성장할 수 있는 기회를 주는 플랫폼입니다.
                    </span><br/>
                    <span>
                        매출에 따라 네 가지 등급으로 나뉘어 수수료가 부과되며 가장 높은 
                        등급도 4%의 낮은 수수료를 부과하고 있습니다.
                    </span><br/>
                    <span>
                        수수료 등급은 매년 매출 기록에 의해 자동으로 갱신됩니다.
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
            <FeeRateBoxWrapper>
                <img src="/img/feerate/A.png" />
                <img src="/img/feerate/B.png" />
                <img src="/img/feerate/C.png" />
                <img src="/img/feerate/D.png" />
            </FeeRateBoxWrapper>
        </FeeRatingWrapper>
    );
}

const FeeRatingWrapper = styled.div`
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

const FeeRateBoxWrapper = styled.div`
    height: 60rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    img {
        width: 25rem;
    }
`;