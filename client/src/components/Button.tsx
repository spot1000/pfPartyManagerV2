import * as React from 'react';

// takes two props
//  onClick: what to do when button is clicked
//  name: what button says

// should probably be enhanced to have more styling?

interface Props {
    onClick?: () => void,
    name: string,
}

export const Button = ({onClick, name}: Props) => {
  return (
    <button onClick={onClick}>{name}</button>
  );
};