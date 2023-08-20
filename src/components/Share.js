import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import kakao from "../img/kakao.png"
import { useScript } from "@uidotdev/usehooks";
import { useEffect } from "react";

// 공유하기 버튼을 사용하기 위해 라이브러리와 api를 사용
// 트위터, 페이스북, 카카오톡, URL 공유하기 버튼



// Style을 적용한 버튼 컴포넌트 추가 -> URL버튼
const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;

// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items : center;
  margin-bottom: 16px;
`

const KakaoShareButton = styled.a`
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;

function Share() {
  // window 객체에서 현재 url 가져오기
  const currentUrl = window.location.href;

  // kakao SDK import 하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js")

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행, status가 ready일 때 초기화를 시도

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javaScript key를 이용하여 initilize
        window.Kakao.init('3e350538c38ffbefe51afe8d14859449');
      }
    }
  }, [status]);


  return (
    <FlexContainer>
      <GridContainer>
        {/* 페이스북 공유버튼 */}
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24} ></FacebookIcon>
        </FacebookShareButton>

        {/* 트위터 공유버튼 */}
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>


        {/* 카카오톡 공유버튼 */}
        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src={kakao}></KakaoIcon>
        </KakaoShareButton>

        {/* URL 복사버튼 */}
        <CopyToClipboard text={currentUrl}>
          <URLShareButton>URL</URLShareButton>
        </CopyToClipboard>
        


      </GridContainer>
    </FlexContainer >
  )
}

export default Share;