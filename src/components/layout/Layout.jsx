// no-use-before-define
// import/prefer-default-export
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { StyledLayout } from './Layout.style';
import { ReactComponent as Logo } from '../../assets/svg/vendly-logo.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';

function Layout({
  children,
  buttonState = 'active-primary',
  hasSkip,
  currentScreen,
  screenHeader,
}) {
  const windowDimension = useRef(window.innerHeight);
  const [positionOfCard, setPositionOfCard] = useState(0);
  const [test, setTest] = useState(0);

  const calculateSearchInputPosition = useCallback(() => {
    const screenHeight = windowDimension.current;
    const keyboardHeight = windowDimension.current - window.innerHeight;
    const cardHeight = 586; // height of the card
    const cardDistanceFromScreenTop = 78;
    const cardDistanceFromScreenBottom = screenHeight - (cardHeight + cardDistanceFromScreenTop);
    const cardRealEstateThatMustBeViewable = 433; // this is the card
    // content that must be seen even with keyboard overlap
    const spaceBetweenInputAndOpenedKeyboard = 30;
    const cardContentHiddenByOpenkeyboard = keyboardHeight - cardDistanceFromScreenBottom;

    const currentViewableCardRealEstate = cardHeight - cardContentHiddenByOpenkeyboard;

    const spaceNeededToShowTheViewableCardRealEstate =
      currentViewableCardRealEstate -
      cardRealEstateThatMustBeViewable -
      spaceBetweenInputAndOpenedKeyboard;
    // alert(spaceNeededToShowTheViewableCardRealEstate);

    setPositionOfCard(spaceNeededToShowTheViewableCardRealEstate);
  }, [window]);

  const calculateInputPosition = (event) => {
    //   console.log(event.target);
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (window.innerHeight !== windowDimension.current) {
      // buttonRef.current.style.display = 'none';
      if (/android/i.test(userAgent) || /windows phone/i.test(userAgent)) {
        calculateSearchInputPosition();
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        calculateSearchInputPosition();
        setPositionOfCard((position) => position - 20); // add a 20px spacing for ios
      }
    } else {
      setPositionOfCard(0);
    }
  };

  useEffect(() => {
    window.visualViewport.addEventListener('resize', calculateInputPosition);
    return () => {
      window.visualViewport.removeEventListener('resize', calculateInputPosition);
    };
  });

  return (
    <StyledLayout buttonState={buttonState} positionOfCard={positionOfCard}>
      <div className="logo__header">
        <Logo />
      </div>
      <div className="content__body">
        <div className="body__top">
          {currentScreen === 'SURVEY_HOME' && (
            <div className="ribbon__top">
              {[...new Array(4)].map((item) => (
                <div className="ribbon__item" />
              ))}
            </div>
          )}
          <div className="top__title">
            <h1 className="top__title__text">{screenHeader}</h1>
            {hasSkip && (
              <button className="skip__button" type="button">
                <span className="skip__text">Skip</span>
                <ArrowRight />
              </button>
            )}
          </div>
        </div>
        <div className="content__children">{children}</div>
      </div>
    </StyledLayout>
  );
}

export default Layout;
