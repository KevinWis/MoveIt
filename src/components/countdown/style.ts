import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: "Rajdhani";
  font-weight: 600;
  color: var(--title);

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  .timer {
    flex: 1;
    display: flex;
    align-items: center;

    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
      &:first-child {
        border-right: 1px solid #f0f1f3;
      }
      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;

  background-color: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: 0.35s cubic-bezier(0.55, 0.055, 0.675, 0.19);

  outline: none;
  &:disabled {
    cursor: default;
  }
  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }

  &.red {
    background-color: var(--white);
    color: var(--title);

    &:hover {
      background-color: var(--red);
      color: var(--white);
    }
  }
`;
