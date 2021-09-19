import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--input-border);
    background: var(--input-background);

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    // prettier-ignore
    &[type="number"]::-webkit-inner-spin-button,
     [type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  // prettier-ignore
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: var(--green);
    border-radius: 0.25rem;
    border: 0;
    margin-top: 1.5rem;

    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
  }
`;

interface RadioButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

// Map colors to the respective hex
const colors = {
  green: '#33CC95',
  red: '#E62E4D',
};

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;

  background: ${({ isActive, activeColor }) =>
    // Check wich type of transaction is selected and based on this
    // set "green" or "red" color to background. The "transparentize"
    // method is used to recude the background opacity
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
