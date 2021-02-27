import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5;
  box-shadow: 0 0 60 rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }
`;
export const Inactive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
  .strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }
`;
export const Active = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);

    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.25rem;

    border-bottom: 1px solid var(--gray-line);
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 5px;
      color: var(--white);

      font-size: 1rem;
      font-weight: 600;

      transition: 0.35s cubic-bezier(0.55, 0.055, 0.675, 0.19);

      outline: 0;
      &:hover {
        filter: brightness(0.9);
      }
    }
    .challenge-failed-button {
      background-color: var(--red);
    }
    .challenge-succeeded-button {
      background-color: var(--green);
    }
  }
`;
