// import/prefer-default-export
import styled from 'styled-components';
import BackgroundImage from '../../assets/IMG_3223.jpg';
import { AppearSlideDown } from '../../styles/global.style';

export const StyledLayout = styled.div`
  background-image: url(${BackgroundImage});
  min-height: 100vh;
  overflow: auto;
  /* position: fixed; */
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  bottom: 0;

  .logo__header {
    position: absolute;
    top: 20px;
    left: 18px;
  }
  .body__top {
    position: relative;
    margin-bottom: 12px;
  }
  .ribbon__top {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 34px);
    grid-template-rows: 4px;
    grid-gap: 20px;
    right: 13px;
    top: 8px;
  }
  .ribbon__item {
    :nth-of-type(1) {
      background-color: #17e7b3;
    }
    :nth-of-type(2) {
      background-color: #006e72;
    }
    :nth-of-type(3) {
      background-color: #c6f6f2;
    }
    :nth-of-type(4) {
      background-color: #c8f6f3;
    }
  }
  .content__body {
    height: 100%;
    width: 100%;
    background: #ffffff;
    border: 1px solid #82ecd3;
    box-sizing: border-box;
    border-radius: 10px;
    max-width: 338px;
    height: 586px;
    margin-top: 78px;
    transform: ${(props) => `translateY(${props.positionOfCard}px)`};
    transition: transform 0.3s ease;
    /* position: fixed; */
    position: ${(props) => (props.positionOfCard < 0 ? 'fixed' : 'unset')};
    ${AppearSlideDown}
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .top__title {
    height: 86px;
    font-weight: 800;
    font-size: 22px;
    line-height: 37px;
    color: #000000;
    padding: 36px 24px 13px;
    display: flex;
    justify-content: space-between;
  }
  .skip__button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #006e72;
    svg {
      width: 5.61px;
      height: 9.51px;
      margin-left: 6px;
    }
  }
  .skip__text {
  }

  @media screen and (min-width: 600px) {
    .content__body {
      left: 18px;
      margin: unset;
    }
  }
  @media screen and (min-width: 1024px) {
    .logo__header {
      top: 20px;
      left: 40px;
    }
    .content__body {
      left: 40px;
      top: 200px;
    }
  }
`;
