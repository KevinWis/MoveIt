import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }
`;

export const CurrentXpBar = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);

  width: ${(props: { charge: number }) => props.charge + "%"};
`;

export const CurrentXp = styled.span`
  top: 12px;

  transform: translateX(-50%);
  left: ${(props: { offsetX: number }) => props.offsetX + "%"};

  position: absolute;
`;
