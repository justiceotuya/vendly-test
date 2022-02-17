import styled from 'styled-components';
import { Appear } from '../../../styles/global.style';

/* eslint-disable import/prefer-default-export */
export const StyledSurveyComplete = styled.div`
  display: ${(props) => (props.currentScreen === 'SURVEY_COMPLETE' ? 'block' : 'none')};
  ${Appear};
  /* position: relative; */
  .lottie__container {
    width: 289px;
    height: 161px;
    background: #e0faf8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 0.8px solid #82ecd3;
  }
  .complete__message {
    font-style: normal;
    font-weight: 800;
    font-size: 17.5px;
    line-height: 29px;
    text-align: center;
    color: #003333;
    margin-top: 108px;
  }
  .survey__body {
    ${Appear}
    bottom: 153px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    right: 26px;
    left: 26px;
    /* top: calc(100vh - 300px); */
  }
  .header {
    margin-bottom: 3px;
    font-weight: 800;
    font-size: 18.5px;
    line-height: 31px;
    text-align: center;
    color: #003333;
  }
  .survey__text {
    margin-bottom: 38px;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #006e72;
  }
  .okay__button {
    position: absolute;
    right: 0;
    border: none;
    background: none;
    font-weight: 900;
    font-size: 15px;
    line-height: 25px;
    text-align: right;
    color: #00d0be;
    /* color: #C6F6F2; */
    text-transform: uppercase;
  }
  .survey__input {
    width: 262px;
    margin: 0 auto;
    right: 38px;
    left: 38px;
    border: none;
    border-bottom: 2.5px solid #007575;
    width: 274px;
    font-weight: 800;
    font-size: 16px;
    line-height: 27px;
    color: #000000;
    border-radius: 0;
    /* padding: 0px 30px 0px 18px; */
    ::placeholder {
      font-weight: bold;
      font-size: 14.8px;
      line-height: 24px;
      text-align: center;
      color: #00d0be;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    :focus {
      ::placeholder {
        text-shadow: none;
      }
    }
  }
`;
