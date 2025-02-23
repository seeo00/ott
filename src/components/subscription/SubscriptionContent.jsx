import { useState } from 'react';
import PlanCard from './PlanCard';
import InfoNotes from './InfoNotes';
import SubscriptionRow from './SubscriptionRow';
import SubscriptionModal from './SubscriptionModal';
import {
  PageWrapper,
  ContentWrapper,
  TitleSection,
  MainTitle,
  SubTitle,
  PlansGrid,
  MobileContentWrapper,
  ButtonContainer,
} from './style';

import { planDetails } from '../../assets/api/planData';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { InnerContainer } from '../../common/layout/InnerContainer';
import Button from '../../ui/button/Button';

const SubscriptionContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authed, user } = useSelector((state) => state.authR);
  const [selectedPlan, setSelectedPlan] = useState(
    user?.subscriptionPlan && user.subscriptionPlan !== '' ? user.subscriptionPlan : 'Basic'
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleNextClick = () => {
    if (!authed) {
      navigate('/auth');
      return;
    }
    dispatch(authActions.subscribePlan(selectedPlan));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <InnerContainer maxWidth="1920px">
      <PageWrapper>
        <ContentWrapper>
          <TitleSection>
            <MainTitle>콘텐츠를 즐길 준비가 되셨나요?</MainTitle>
            <SubTitle>원하는 이용권을 선택해 주세요. 이용권은 언제든지 원하실 때 해지할 수 있습니다.</SubTitle>
          </TitleSection>

          <PlansGrid>
            <ButtonContainer>
              <PlanCard title="Basic" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
              <PlanCard title="Standard" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
              <PlanCard title="Premium" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
            </ButtonContainer>
            {selectedPlan && (
              <MobileContentWrapper>
                {planDetails[selectedPlan].details.map((detail, index) => (
                  <SubscriptionRow key={index} label={detail.label} price={detail.value} extra={detail.extra} />
                ))}
              </MobileContentWrapper>
            )}
          </PlansGrid>

          <InfoNotes />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Button onClick={handleNextClick} width="510px" $isResponsive>
              {authed ? '다음' : '로그인'}
            </Button>
          </div>
        </ContentWrapper>
      </PageWrapper>
      {isModalOpen && <SubscriptionModal onClose={closeModal} selectedPlan={selectedPlan} />}
    </InnerContainer>
  );
};

export default SubscriptionContent;
