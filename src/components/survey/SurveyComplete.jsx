import React, { useEffect, useRef, useState } from 'react';
import Layout from '../layout';
import { ReactComponent as FlagIcon } from '../../assets/svg/flag.svg';
import { ButtonSection } from '../buttonSection/ButtonSection';
import UserSearch from './UserSearch';
import { StyledSurveyComplete } from './style/SurveyComplete.style';

function SurveyComplete(props) {
  const { currentScreen } = props;
  const buttonRef = useRef(null);
  const inputElement = useRef(null);

  const [surveyCompleteMode, setSurveyCompleteMode] = useState('NOMINATE');
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [IsSearchResultPresent, setisSearchResultPresent] = useState(null);
  const [isSearchContainerOpen, setIsSearchContainerOpen] = useState(false);

  useEffect(() => {
    if (surveyCompleteMode === 'NOMINATE') {
      inputElement.current.onfocus = () => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
      };
    }
  }, [surveyCompleteMode]);

  const changeSurveyMode = () => {
    setSurveyCompleteMode('NOMINATE');
  };

  const chooseSearchResult = () => {
    setIsSearching(false);
    return searchText.includes('@')
      ? setisSearchResultPresent(true)
      : setisSearchResultPresent(false);
  };

  const searchForUsers = () => {
    setIsSearchContainerOpen(true);
    setIsSearching(true);
    setTimeout(() => {
      chooseSearchResult();
    }, 3000);
  };

  const closeSearchContainer = () => {
    setIsSearching(false);
    setIsSearchContainerOpen(false);
  };

  const changeInputText = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 3) {
      searchForUsers();
    }
  };

  return (
    <Layout screenHeader="Survey complete!">
      <StyledSurveyComplete currentScreen={currentScreen}>
        <div className="lottie__container">
          <FlagIcon />
        </div>

        {surveyCompleteMode === 'COMPLETED' && (
          <p className="complete__message">Thanks for your time!</p>
        )}

        {surveyCompleteMode === 'NOMINATE' && (
          <div className="survey__body">
            <h2 className="header">Pass it on?</h2>
            <p className="survey__text">Nominate someone else to take this incentivized survey.</p>

            <div className="input__container">
              <input
                type="text"
                className="survey__input"
                placeholder="Search/ Insert their Twitter handle"
                onChange={changeInputText}
                ref={inputElement}
              />
              {searchText !== '' && (
                <button className="okay__button" onClick={searchForUsers} type="button">
                  Ok
                </button>
              )}
            </div>
          </div>
        )}

        <UserSearch
          isSearching={isSearching}
          IsSearchResultPresent={IsSearchResultPresent}
          closeSearchContainer={closeSearchContainer}
          isSearchContainerOpen={isSearchContainerOpen}
        />
      </StyledSurveyComplete>

      <ButtonSection
        ref={buttonRef}
        buttonText={surveyCompleteMode === 'COMPLETED' ? 'Continue' : 'Skip'}
        buttonState={surveyCompleteMode === 'COMPLETED' ? 'active-primary' : 'active-secondary'}
        clickActionButton={changeSurveyMode}
      />
    </Layout>
  );
}

export default SurveyComplete;
