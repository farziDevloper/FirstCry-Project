import styled from "styled-components";

export const TabsWrapper = styled.div`
  button {
    padding: 18px 30px;
    border: none;
    background-color: rgba(247, 248, 249, 0.4);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17);
    color: #828282;
    cursor: pointer;
    &.active {
      border-radius: 5px;
      background-color: #f7f8f9;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17);
      color: #005aa3;
    }
  }
`;
