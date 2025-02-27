import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const BottomNavContainer = styled.nav`
  //border: 1px solid ${color.gray[300]};
  background-color: ${color.gray[900]};
  color: ${color.gray[70]};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 64px;
  z-index: 1000;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
      flex-basis: 33.3333%;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
          color: ${color.white};
        }
      }
      button {
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
  ${respondTo('tabletMore')} {
    display: none;
  }
`;
