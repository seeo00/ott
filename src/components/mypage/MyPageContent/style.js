import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #121212;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden; // 가로 스크롤 방지
`;

export const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 74px 0 55px 0;
  @media (max-width: 744px) {
    // 태블릿
    max-width: 744px;
    width: 100%;
    padding: 74px 20px 55px 20px;
    box-sizing: border-box;
  }

  @media (max-width: 390px) {
    // 모바일
    max-width: 390px;
    width: 100%;
    padding: 74px 20px 55px 20px;
    box-sizing: border-box;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: 32px;
`;

export const MainTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 20px 0;

  @media (max-width: 899px) {
    font-size: 24px;
    text-align: left;
    padding: 0 20px;
  }
`;

export const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
  font-size: 24px;

  @media (max-width: 899px) {
    font-size: 18px;
    text-align: left;
    padding: 0 20px;
  }
`;

export const PlansGrid = styled.div`
  // 데스크탑 스타일 - 원본 유지
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  // 모바일/태블릿 스타일
  @media (max-width: 899px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    padding: 0; // 20px을 rem으로 변환
    width: 100%;
  }
`;
export const ButtonContainer = styled.div`
  @media (min-width: 900px) {
    display: contents; // 데스크탑에서는 이 div가 레이아웃에 영향을 주지 않음
  }

  @media (max-width: 899px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 0;
    width: 100%;
    padding: 0 20px;
  }
`;

export const MobileContentWrapper = styled.div`
  display: none; // 데스크탑에서는 숨김

  @media (max-width: 899px) {
    display: block;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    order: 4; // flex order를 사용해서 버튼들 아래에 위치하도록
    flex-basis: 100%; // 전체 너비 사용
  }
`;

export const ActionButton = styled.button`
  margin: 40px auto 0;
  display: block;
  padding: 16px 24px 16px 24px;
  width: 510px;
  height: 60px;
  background-color: #0040ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1565c0;
  }

  @media (max-width: 899px) {
    width: 90%;
    max-width: 400px;
    height: 48px;
    font-size: 18px;
    margin: 24px auto 0;
  }
`;
