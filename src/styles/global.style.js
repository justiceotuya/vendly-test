import { css, keyframes } from 'styled-components';

export const ClickAnimation = css `
    cursor: pointer;
    transform: translateY(0px);
    transition: transform 0.3s ease;

    :active {
        transform: translateY(3px);
        &:disabled {
            transform: translateY(0px);
        }
    }
`;

export const CustomScroll = css `
    scroll-behavior: smooth;
    scrollbar-width: 8px;
    padding-right: 10px;
    -ms-overflow-style: scrollbar;
    &::-webkit-scrollbar {
        width: 5px;
        display: block;
    }
    &::-webkit-scrollbar-thumb {
        background: #e1e4e8;
        border-radius: 50px;
        border-right: none;
        border-left: none;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 10px;
    }
    ::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 10px;
    }
`;

export const Appear = css `
    animation: appear 0.2s;

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const AppearSlideDown = css `
    animation: appear 0.3s;

    @keyframes appear {
        0% {
            opacity: 0;
            transform: translateY(-5px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;

export const Rotate = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;