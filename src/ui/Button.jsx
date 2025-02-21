import styled, { css } from 'styled-components';
import { color } from '../styled/common';

const disabledStyles = css`
  background-color: transparent;
  color: ${color.gray[70]};
  border: 2px solid ${color.gray[70]};
  cursor: default;
`;

const activeStyles = css`
  background-color: ${color.primary[300]};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 64, 255, 0.8);
  }
`;

const outlineStyles = css`
  background-color: transparent;
  color: ${color.white};
  border: 2px solid white;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width || '100%'};
  /* height: ${(props) => props.height || '56px'}; */

  ${(props) =>
    props.isResponsive &&
    css`
      @media (max-width: 1279px) {
        width: 100%;
      }
    `}

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;

  ${(props) => (props.$variant === 'outline' ? outlineStyles : props.disabled ? disabledStyles : activeStyles)}
`;

export default Button;
