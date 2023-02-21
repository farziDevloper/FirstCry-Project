import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100%;
  .sidebar {
    flex: 0 0 18%;
    max-width: 272px;
    padding: 24px 0 24px 0;
    background-color: #fcfcfc;
    box-shadow: 0 5px 1px 0 rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .main-content {
    flex: 1;
    max-width: calc(100% - 272px);
  }
  .copyrights {
    padding: 24px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 24px;
  min-height: calc(100vh - 187px);
`;
