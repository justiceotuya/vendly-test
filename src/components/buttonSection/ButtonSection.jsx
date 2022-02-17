import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';

export const StyledButtonSection = styled.div`
  position: relative;
  /* background: red; */
  height: 129px;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  top: 456px;
  .body__bottom {
  }
  .button__action {
    background: ${(props) => {
      switch (props.buttonState) {
        case 'active-primary':
          return '#006E72';
        case 'loading':
          return '#82ECD3';
        case 'active-secondary':
          return '#C6F6F2';
        case 'disabled':
          return '#C6F6F2';

        default:
          return '#006E72;';
      }
    }};

    border-radius: 5px;
    border: none;
    width: 100%;
    font-weight: 800;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: ${(props) => {
      switch (props.buttonState) {
        case 'loading':
          return '#006E72';

        case 'active-secondary':
          return '#00D0BE';

        default:
          return '#FFFFFF;';
      }
    }};
    height: 45px;
    position: relative;
    margin-bottom: 25px;
    svg {
      position: ${(props) => (props.buttonState === 'loading' ? 'unset' : 'absolute')};
      top: 15px;
      right: 30.55px;
    }
  }
  .buttom__button__action {
    border: none;
    background: none;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    color: #006e72;
    span {
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      color: #00e0be;
    }
  }
  .bottom__content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonSection = React.forwardRef((props, ref) => {
  const { clickActionButton, buttonState, buttonText } = props;
  return (
    <StyledButtonSection buttonState={buttonState} ref={ref}>
      <div className="body__bottom">
        <button className="button__action" onClick={clickActionButton} type="button">
          <span className="button__text">{buttonText}</span>
          {buttonState !== 'loading' && <ArrowRight />}
        </button>

        <div className="bottom__content">
          <button className="buttom__button__action" type="button">
            Read <span>Instructions</span>
          </button>
        </div>
      </div>
    </StyledButtonSection>
  );
});
