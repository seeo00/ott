import * as S from './style';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailStep from '../../components/auth/steps/EmailStep';
import PasswordStep from '../../components/auth/steps/PasswordStep';
import SignupStep from '../../components/auth/steps/SignupStep';
import SignupCompleteStep from '../../components/auth/steps/SignupCompleteStep';
import ResetPasswordStep from '../../components/auth/steps/ResetPasswordStep';
import ResetCompleteStep from '../../components/auth/steps/ResetCompleteStep';

const Auth = () => {
  const [currentStep, setCurrentStep] = useState('email');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const goToStep = (step) => {
    setCurrentStep(step);
    if (step === 'email' || step === 'resetPassword') {
      setIsEmailValid(false);
    }
    if (step === 'password') {
      setIsPasswordValid(false);
    }
  };

  const commonProps = { goToStep, isEmailValid, setIsEmailValid, isPasswordValid, setIsPasswordValid };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'email':
        return <EmailStep {...commonProps} />;
      case 'password':
        return <PasswordStep {...commonProps} />;
      case 'signup':
        return <SignupStep {...commonProps} />;
      case 'signupComplete':
        return <SignupCompleteStep />;
      case 'resetPassword':
        return <ResetPasswordStep {...commonProps} />;
      case 'resetComplete':
        return <ResetCompleteStep {...commonProps} />;
      default:
        return <EmailStep {...commonProps} />;
    }
  };

  return (
    <>
      <S.GridContainer>
        <S.LeftBox>
          {/* <S.FlexWrap>
              <S.ImgBox1></S.ImgBox1>
              <S.ImgBox2></S.ImgBox2>
              <S.ImgBox3></S.ImgBox3>
            </S.FlexWrap> */}
        </S.LeftBox>
        <S.RightBox>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {renderCurrentStep()}
            </motion.div>
          </AnimatePresence>
        </S.RightBox>
      </S.GridContainer>
    </>
  );
};

export default Auth;
