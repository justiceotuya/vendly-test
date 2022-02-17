import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import Layout from '../layout';
import { ReactComponent as Loading } from '../../assets/svg/loading.svg';
import lottieLoading from '../../assets/lottie/loading.json';
import lottieComplete from '../../assets/lottie/loading_complete.json';
import { ButtonSection } from '../buttonSection/ButtonSection';
import { Appear, AppearSlideDown } from '../../styles/global.style';

const defaultOptions = {
  // loop: true,
  // autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const StyldSurveySubmitLoading = styled.div`
  display: ${(props) => (props.currentScreen === 'SURVEY_SUBMIT_LOADING' ? 'block' : 'none')};
  ${Appear};
  /* ${AppearSlideDown} */
  .lottie__container {
    width: 300px;
    height: 300px;
    background: #e0faf8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 0.8px solid #82ecd3;
  }
  .loopBell {
    height: 150px;
    width: 150px;
  }
`;

function SurveySubmitLoading(props) {
  const { changeCurrentScreen, currentScreen } = props;
  const [isLottieComplete, setIsLottieComplete] = useState(false);
  const lottieRef = useRef();

  const checkLoop = (e) => {
    // console.log('screen', currentScreen, e);
    if (e.currentLoop === 1) {
      setIsLottieComplete(true);
    }
    if (isLottieComplete && e.currentLoop === 1) {
      lottieRef.current.goToAndStop(154, true);
      setTimeout(() => {
        changeCurrentScreen('SURVEY_COMPLETE');
      }, 100);
    }
  };

  return (
    <Layout screenHeader="Survey...">
      <StyldSurveySubmitLoading currentScreen={currentScreen}>
        <div className="lottie__container">
          <Lottie
            {...defaultOptions}
            animationData={isLottieComplete ? lottieComplete : lottieLoading}
            // autoplay={isLottieComplete ? false : true}
            // loop={isLottieComplete ? false : true}
            className="loopBell"
            lottieRef={lottieRef}
            onLoopComplete={checkLoop}
            loop={2}
            // when loop finishes fire thi function that pushes user to succces page
          />
        </div>
      </StyldSurveySubmitLoading>
      <ButtonSection buttonState="loading" buttonText={<Loading />} />
    </Layout>
  );
}

export default SurveySubmitLoading;
