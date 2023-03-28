import styled from 'styled-components';

export const SidePanelCon = styled.div`
  width: 14rem;
  background-color: ${({theme}) => theme.colors.header};
  min-height: calc(100vh - 40px);
  position: fixed;
  top: 40px;
`;

export const SidePanelEl = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1rem 1.2rem;
    color: inherit;
    transition: all .2s ease-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`;
