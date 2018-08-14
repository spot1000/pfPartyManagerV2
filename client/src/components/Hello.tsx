import * as React from 'react';
import { Button } from './Button'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onChangeName?: () => void;
}

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement, onChangeName }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>

        <Button onClick={onDecrement} name='-' />
        <Button onClick={onIncrement} name='+' />
        <Button onClick={onChangeName} name='Not Typescript' />
      </div>
    </div>
  );
}

export default Hello;

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}