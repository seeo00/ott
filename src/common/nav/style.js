import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const NavContainer = styled.nav`
  display: none;
  ${respondTo('desktop')} {
    overflow-y: auto;
    display: block;
    width: ${(props) => (props.$isCollapsed ? '104px' : '256px')};
    height: 100%;
    height: ${({ $bannerHeight }) => `calc(100svh - 70px - ${$bannerHeight}px)`};
    background-color: ${color.gray[800]};
    color: ${color.gray[70]};
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 2000;
  }
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  span {
    font-size: ${(props) => (props.$isCollapsed ? '12px' : '16px')};
  }
  a {
    padding: 16px 0px;
    display: flex;
    flex-direction: ${(props) => (props.$isCollapsed ? 'column' : 'row')};
    align-items: center;
    justify-content: flex-start;
    gap: ${(props) => (props.$isCollapsed ? '4px' : '12px')};
    &:hover {
      color: ${color.white};
    }
    &.active {
      /* color: ${color.primary[300]}; */
      color: ${color.white};
    }
  }
`;

export const HighlightWrap = styled.ul`
  padding: ${(props) => (props.$isCollapsed ? '0px 20px 32px 20px' : '0px 40px 32px 40px')};
`;

export const GenreWrap = styled.ul`
  position: relative;
  padding-top: 36px;
  padding: ${(props) => (props.$isCollapsed ? '32px 20px 0px 20px' : '32px 40px 0px 40px')};
  ::before {
    background-color: ${color.gray[500]};
    content: '';
    height: 1px;
    left: ${(props) => (props.$isCollapsed ? '20px' : '40px')};
    position: absolute;
    right: ${(props) => (props.$isCollapsed ? '20px' : '40px')};
    top: 0;
  }
`;
