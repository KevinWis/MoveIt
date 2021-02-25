import styled from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;

    margin-left: 1.5rem;
  }
`;

export const Image = styled.div`
  width: 5.5rem;
  height: 5.5rem;

  border-radius: 50%;

  background-image: url(${(props: { src: string }) => props.src});
`;

export const Name = styled.p`
  font-size: 1.5rem;
  color: var(--text);
  font-weight: bold;
`;

export const Level = styled.p`
  margin-top: 0.5rem;

  & > img {
    margin-right: 0.5rem;
  }
`;
