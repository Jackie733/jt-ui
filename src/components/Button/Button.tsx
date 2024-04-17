import React from 'react';
import classNames from 'classnames';
import './button.css';
import styled from 'styled-components';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  textColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Btn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({
  type = 'primary',
  textColor,
  size = 'medium',
  onClick,
  label
}: ButtonProps) => {
  return (
    <Btn
      type="button"
      style={textColor ? { color: textColor } : {}}
      onClick={onClick}
    >
      {label}
    </Btn>
  );
};

export default Button;
