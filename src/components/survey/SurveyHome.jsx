import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../layout';
import { ReactComponent as AddButton } from '../../assets/svg/add.svg';
import { ReactComponent as CloseButton } from '../../assets/svg/close.svg';
import { ButtonSection } from '../buttonSection/ButtonSection';
import { Appear } from '../../styles/global.style';

export const StyledSurveyHome = styled.div`
  display: ${(props) => (props.currentScreen === 'SURVEY_HOME' ? 'block' : 'none')};
  .survey__row {
    display: flex;
  }
  .number {
    margin-right: 4px;
    font-weight: 800;
    font-size: 15.5px;
    line-height: 26px;
    text-align: right;
    color: #006e72;
    padding-left: 11px;
  }
  .instruction {
    font-style: normal;
    font-weight: 800;
    font-size: 15.5px;
    line-height: 26px;
    color: #000000;
    padding-right: 26px;
    margin-bottom: 50px;
  }
  .add__attachment {
    border: none;
    padding: 0;
    background: none;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 800;
    font-size: 14.5px;
    line-height: 24px;
    color: #00d0be;
    span {
      margin-left: 8px;
    }
  }
  .image__container__item {
    width: 124px;
    height: 130px;
    left: 0px;
    top: 0px;
    border: 2px solid #82ecd3;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
  .delete__button {
    position: absolute;
    z-index: 50;
    /* left: 0; */
    right: 0;
    border: none;
    background: none;
    padding: 0;
    top: 8px;
    right: 9px;
    height: 28px;
    margin: 0;
    width: 28px;
  }
  .upload__control_input {
    display: none;
  }
  .upload__control_input:disabled ~ label {
    color: #82ecd3 !important;
  }
  .image__container__scroll {
    width: calc(336px - 35.39px);
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }
  .image__container__scroll::-webkit-scrollbar {
    display: none;
  }
  .image__container {
    display: flex;
    align-items: center;
    padding-bottom: 24px;
    gap: 15px;
    width: ${(props) => props.ImagesLength * 140}px;
  }
`;

function SurveyHome(props) {
  const { changeCurrentScreen, currentScreen } = props;

  const inputRef = useRef(null);
  const [Images, setImages] = useState([]);

  const handleSelectImageFromFile = (e) => {
    setImages([
      ...Images,
      {
        id: new Date().getTime(),
        file: e.target.files ? URL.createObjectURL(e?.target?.files[0]) : '',
      },
    ]);
    // setProfileImage(e.target.files);
  };
  const handleRemovePicture = (id) => {
    const newImages = Images.filter((item) => item.id !== id);
    setImages(newImages);
    inputRef.current.value = null;
  };

  const goToNextPage = () => {
    changeCurrentScreen('SURVEY_SUBMIT_LOADING');
  };

  return (
    <Layout screenHeader="Survey" hasSkip>
      <StyledSurveyHome ImagesLength={Images.length} currentScreen={currentScreen}>
        <div className="survey__row">
          <p className="number">13.</p>
          <div className="instruction__container">
            <p className="instruction">
              Add an attachment that reflects and portrays similar features and characteristics with
              the image shown below.
            </p>

            <div className="image__container__scroll">
              <div className="image__container">
                {Images.length > 0 &&
                  [...Images].map((item, index) => {
                    const { id, file } = item;
                    return (
                      <div className="image__container__item" key={id}>
                        <img
                          src={file}
                          alt="item of a merchant"
                          className="content__image"
                          // placeholder="blur"
                        />
                        <button
                          className="delete__button"
                          onClick={() => handleRemovePicture(id)}
                          type="button"
                        >
                          <CloseButton />
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
            <input
              onChange={handleSelectImageFromFile}
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              className="upload__control_input"
              ref={inputRef}
              disabled={Images.length === 3}
            />

            <label htmlFor="image" className="add__attachment" disabled={Images.length === 3}>
              <AddButton />
              <span>Add attachments</span>
            </label>
          </div>
        </div>
        <ButtonSection
          buttonState={Images.length === 0 ? 'disabled' : 'active-primary'}
          buttonText="Finish"
          clickActionButton={goToNextPage}
        />
      </StyledSurveyHome>
    </Layout>
  );
}

export default SurveyHome;
