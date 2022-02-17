// eslint-disable jsx-props-no-spreading
import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import LoadingSearch from '../../assets/lottie/loading_twiter.json';
import FailedSearch from '../../assets/lottie/search__error.json';
import { StyledUserSearch } from './style/UserSearch.style';
import { ReactComponent as CloseButton } from '../../assets/svg/close.svg';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function UserSearch(props) {
  const { isSearching, IsSearchResultPresent, closeSearchContainer, isSearchContainerOpen } = props;

  const [isLottieComplete, setIsLottieComplete] = useState(false);
  const lottieRef = useRef();

  const checkLoop = (e) => {
    if (e.currentLoop === 3) {
      setIsLottieComplete(true);
    }
  };

  return (
    <StyledUserSearch isOpen={isSearchContainerOpen}>
      <div className="search__content__body">
        <button
          onClick={closeSearchContainer}
          type="button"
          className="close__button"
          disabled={isSearching}
        >
          <CloseButton />
        </button>
        <Lottie
          {...defaultOptions}
          animationData={isSearching ? LoadingSearch : FailedSearch}
          className="loopBell"
          lottieRef={lottieRef}
          onLoopComplete={checkLoop}
        />
        <p className="text__item">
          {!isSearching && IsSearchResultPresent === false && 'No results found'}
          {isSearching && 'Fetching Search Results'}
        </p>
      </div>
    </StyledUserSearch>
  );
}

export default UserSearch;
