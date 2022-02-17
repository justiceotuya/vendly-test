import React, { useState } from 'react';
import './App.css';
import './styles/fonts/fonts.css';
import SurveyHome from './components/survey/SurveyHome';
import SurveySubmitLoading from './components/survey/SurveySubmitLoading';
import SurveyComplete from './components/survey/SurveyComplete';

function App() {
  const [currentScreen, setCurrentScreen] = useState('SURVEY_COMPLETE');

  const changeCurrentScreen = (screen) => {
    setCurrentScreen(screen);
  };
  return (
    <>
      {currentScreen === 'SURVEY_HOME' && (
        <SurveyHome changeCurrentScreen={changeCurrentScreen} currentScreen={currentScreen} />
      )}
      {currentScreen === 'SURVEY_SUBMIT_LOADING' && (
        <SurveySubmitLoading
          changeCurrentScreen={changeCurrentScreen}
          currentScreen={currentScreen}
        />
      )}
      {currentScreen === 'SURVEY_COMPLETE' && (
        <SurveyComplete changeCurrentScreen={changeCurrentScreen} currentScreen={currentScreen} />
      )}
    </>
  );
}

export default App;
