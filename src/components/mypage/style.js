import styled from 'styled-components';
import { color } from '../../styled/common';
import { respondTo } from '../../styled/GlobalStyle';

// 태블릿 전용 미디어 쿼리
const tabletOnly = () => `@media (min-width: 601px) and (max-width: 1279px)`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 86px 0 55px 0;

  ${respondTo('mobile')} {
    max-width: 390px;
    padding-top: 16px;
  }

  ${respondTo('tabletMore')} {
    max-width: 744px;
  }

  ${respondTo('desktop')} {
    max-width: 1280px;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: 32px;
`;

export const MainTitle = styled.h1`
  color: ${color.white};
  font-size: 32px;
  font-weight: 400;
  margin: 0 0 20px 0;

  ${respondTo('mobile')} {
    font-size: 20px;
    text-align: left;
    margin: 0px 0 12px 0;
    padding: 0;
  }
`;

export const SubTitle = styled.div`
  color: ${color.white};
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 400;

  ${respondTo('mobile')} {
    font-size: 16px;
    text-align: left;
    margin-bottom: 60px;
    padding: 0;
    display: block;
  }
`;

export const PlansGrid = styled.div`
  ${respondTo('mobile')} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
  }

  ${tabletOnly()} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  ${respondTo('desktop')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export const ButtonContainer = styled.div`
  ${respondTo('mobile')} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    padding: 0;
    margin-bottom: 38px;
  }

  ${tabletOnly()} {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 15px;
    width: 100%;
    padding: 0;
    margin-bottom: 38px;
    flex: 1;
    margin: 0 -10px; 
  }
  }

  ${respondTo('desktop')} {
    display: contents;
  }
`;

export const MobileContentWrapper = styled.div`
  display: none;

  ${respondTo('mobile')} {
    display: block;
    width: 100%;
    margin: 20px 0 0;
  }

  ${tabletOnly()} {
    display: block; // 태블릿에서도 표시되도록
    width: 100%;
    margin: 20px 0 0;
  }
`;

export const NotesContainer = styled.div`
  margin-top: 40px;
`;

export const NoteText = styled.div`
  color: ${color.gray[200]};
  font-size: 13.3px;
  line-height: 1.5;

  & + & {
    margin-top: 10px;
  }

  ${respondTo('mobile')} {
    font-size: 12px;
    & + & {
      margin-top: 12px;
    }
  }
`;

export const PlanTitle = styled.h2`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 29px 190px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${color.white};
  background: ${(props) =>
    props.isSelected
      ? `radial-gradient(54.97% 83.44% at 23.41% 78.7%, ${color.primary[300]} 0%, ${color.primary[500]} 72%, ${color.primary[500]} 100%)`
      : color.gray[600]};
  border-radius: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  ${respondTo('mobile')} {
    width: 100%;
    height: 96px;
    background: none;
    padding: 0;
    box-sizing: border-box;

    .desktop-only {
      display: none;
    }
  }

  ${tabletOnly()} {
    width: 45%;
    height: 120px;
    background-color: transparent; // 배경 투명하게 설정
    padding: 0;
    box-sizing: border-box;
    margin: 10px;

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block; // 모바일 내용 강제 표시
    }
  }

  ${respondTo('desktop')} {
    width: 400px;
    height: 748px;
    padding: 10px;
    margin: 0;
    background-color: ${color.gray[500]};
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .mobile-only {
      display: none;
    }

    &:hover ${PlanTitle} {
      background: radial-gradient(
        54.97% 83.44% at 23.41% 78.7%,
        ${color.primary[300]} 0%,
        ${color.primary[500]} 72%,
        ${color.primary[500]} 100%
      );
    }
  }
`;

export const PlanButton = styled.button`
  flex: 1;
  width: 100%;
  height: 96px;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${(props) =>
    props.isSelected
      ? `radial-gradient(54.97% 83.44% at 23.41% 78.7%, ${color.primary[300]} 0%, ${color.primary[500]} 72%, ${color.primary[500]} 100%)`
      : 'transparent'};
  border: ${(props) => (props.isSelected ? 'none' : `1px solid ${color.gray[90]}`)};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${tabletOnly()} {
    height: 120px;
    font-size: 22px;
  }

  &:hover {
    background: radial-gradient(
      54.97% 83.44% at 23.41% 78.7%,
      ${color.primary[300]} 0%,
      ${color.primary[500]} 72%,
      ${color.primary[500]} 100%
    );
    border: none;
  }
`;

export const RowContainer = styled.div`
  ${respondTo('mobile')} {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 14px 0;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${color.gray[90]};
    }
  }

  ${tabletOnly()} {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 18px 0;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${color.gray[90]};
    }
  }

  ${respondTo('desktop')} {
    padding: 10px 0 7px 0;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 330px;
      height: 2px;
      background-color: ${color.gray[90]};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const RowContent = styled.div`
  ${respondTo('mobile')} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${tabletOnly()} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${respondTo('desktop')} {
    display: flex;
    margin-left: 39px;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  color: ${color.gray[70]};
  line-height: 1.4;

  ${respondTo('mobile')} {
    &:last-child {
      text-align: right;
    }
    font-size: 14px;
  }

  ${tabletOnly()} {
    &:last-child {
      text-align: right;
    }
    font-size: 15px;
  }
`;

export const ExtraInfo = styled.div`
  ${respondTo('mobile')} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    color: ${color.gray[70]};
    line-height: 1.4;
    text-align: right;
  }

  ${tabletOnly()} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    color: ${color.gray[70]};
    line-height: 1.4;
    text-align: right;
  }

  ${respondTo('desktop')} {
    font-size: 16px;
    color: ${color.gray[70]};
    margin-top: 4px;
    margin-left: 39px;
    line-height: 1.4;
  }
`;

// MODAL
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.gray[800]};
  backdrop-filter: blur(10px);
  z-index: 50;
`;

export const ModalContainer = styled.div`
  width: 696px;
  height: 743px;
  background-color: ${color.gray[500]};
  border-radius: 16px;

  ${respondTo('mobile')} {
    width: 320px;
    height: 380px;
  }

  ${tabletOnly()} {
    width: 600px;
    height: 620px;
  }

  ${respondTo('desktop')} {
    width: 696px;
    height: 743px;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin: 120px auto 60px;
  color: ${color.gray[10]};

  ${respondTo('mobile')} {
    margin: 40px auto 25px;
    font-size: 16px;
  }

  ${tabletOnly()} {
    margin: 100px auto 40px;
    font-size: 20px;
  }

  ${respondTo('desktop')} {
    margin: 120px auto 60px;
    font-size: 24px;
  }
`;

export const SubscriptionCard = styled.div`
  position: relative;
  display: flex;
  background: transparent;
`;

export const SubscriptionCardLeft = styled.div`
  flex: 3;
  background-color: ${color.gray[100]};
  width: 422px;
  height: 214px;
  border-radius: 16px;
  margin-left: 85px;
  padding: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px ${color.gray[500]};
  z-index: 1;

  ${respondTo('mobile')} {
    width: 180px;
    height: 130px;
    margin-left: 15px;
    padding: 10px 0 10px 10px;
  }

  ${tabletOnly()} {
    width: 270px;
    height: 190px;
    margin-left: 60px;
    padding: 40px;
  }

  ${respondTo('desktop')} {
    width: 422px;
    height: 214px;
    margin-left: 85px;
    padding: 50px;
  }
`;

export const SubscriptionCardRight = styled.div`
  flex: 1;
  background-color: ${color.gray[100]};
  width: 103px;
  border-radius: 16px;
  margin-right: 86px;
  padding: 3px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px ${color.gray[500]};
  position: relative;
  left: -1px;

  ${respondTo('mobile')} {
    width: 170px;
    margin-right: 15px;
    padding: 0;
  }

  ${tabletOnly()} {
    width: 150px;
    margin-right: 60px;
    padding: 0px;
  }

  ${respondTo('desktop')} {
    width: 103px;
    margin-right: 86px;
    padding: 3px;
  }
`;

export const SubscriptionCardTitle = styled.div`
  margin: -10px 0 12px 0;
  color: ${color.gray[10]};
  font-size: 24px;
  font-weight: 400;

  ${respondTo('mobile')} {
    font-size: 18px;
    margin: 5px auto 4px;
  }

  ${tabletOnly()} {
    font-size: 22px;
    margin: -5px 0 6px -5px;
  }

  ${respondTo('desktop')} {
    font-size: 24px;
    margin: -10px 0 12px 0;
  }
`;

export const SubscriptionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${color.gray[20]};
  width: 100%;

  span:first-child {
    margin-right: 80px;
    min-width: 70px;
    flex-shrink: 0;
  }

  span:last-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    flex-grow: 1;
  }

  ${respondTo('mobile')} {
    font-size: 12px;
    margin-bottom: 4px;

    span:first-child {
      margin-right: 10px;
      width: 50px;
      text-align: left;
    }
    span:last-child {
      margin-left: -9px;
      flex: 1;
    }
  }

  ${tabletOnly()} {
    font-size: 14px;
    margin-bottom: 6px;

    span:first-child {
      margin: 1px 55px 0 -5px;
      min-width: 80px;
    }
  }

  ${respondTo('desktop')} {
    font-size: 14px;
    margin-bottom: 8px;

    span:first-child {
      margin-right: 80px;
      min-width: 70px;
    }
    span:last-child {
      margin-left: 0;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 525px;
  max-width: 525px;
  margin-top: 80px;
  margin-left: 50%;
  transform: translateX(-50%);

  ${respondTo('mobile')} {
    width: 290px;
    max-width: 290px;
    margin-top: 40px;

    & > button {
      height: 40px;
    }
  }

  ${tabletOnly()} {
    width: 480px;
    max-width: 480px;
    margin-top: 60px;

    & > button {
      height: 55px;
    }
  }

  ${respondTo('desktop')} {
    width: 525px;
    max-width: 525px;
    margin-top: 80px;

    & > button {
      height: auto;
    }
  }
`;

export const AutoMoveText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  color: ${color.gray[40]};
  margin-top: 40px;

  ${respondTo('mobile')} {
    font-size: 10px;
    margin-top: 20px;
  }

  ${tabletOnly()} {
    font-size: 12px;
    margin-top: 30px;
  }

  ${respondTo('desktop')} {
    font-size: 14px;
    margin-top: 40px;
  }
`;
