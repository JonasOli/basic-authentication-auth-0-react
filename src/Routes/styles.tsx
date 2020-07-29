import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  height: 5.6rem;
  background: #2b2b2b;
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.6rem;
  border-right: 1px solid rgba(0, 0, 0, 0.4);

  .menu-sanduiche-topbar {
    cursor: pointer;
    stroke: #dfe3e8;
  }
`;

export const LogoContainer = styled.div`
  margin: 1.6rem;
`;

export const SelectDestacamento = styled.select`
  margin: 1rem 2.8rem;
  border: 0;
  height: 3.6rem;
  width: 8rem;
  border-radius: 4px;
`;
