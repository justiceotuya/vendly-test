import styled from 'styled-components';
import { AppearSlideDown } from '../../../styles/global.style';

/* eslint-disable import/prefer-default-export */
export const StyledUserSearch = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  ${AppearSlideDown};
  position: absolute;
  background: #e0faf8;
  border: 1px solid #68e3d9;
  box-sizing: border-box;
  border-radius: 8px;
  width: 268px;
  height: 411px;
  z-index: 30;
  top: -14px;
  left: -7px;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  .close__button {
    position: absolute;
    top: 10px;
    left: 10px;
    border: none;
    color: #e0faf8;
    background: none;
    padding: 0;
    display: grid;
  }
  .search__content__body {
    /* height: 211px;
    width: 200px;
    background: #fff; */
  }
  .text__item {
    font-weight: 600;
    font-size: 10.8px;
    line-height: 18px;
    text-align: center;
    color: #006e72;

  }

  .loopBell {
    height: 211px;
    width: 200px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 7px;
  }
`;
