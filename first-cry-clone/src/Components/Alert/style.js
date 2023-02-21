import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  width: fit-content;
  position: fixed;
  box-shadow: 0 0 20px #d8d8d8;
  transition: all 500ms linear;
  z-index: 99;
  &:empty {
    display: none;
  }
  &.info {
    color: #fff;
    background-color: #ff9902;
    border-color: #ff9902;
  }
  &.success {
    color: #fff;
    background-color: #60c3ad;
    border-color: #60c3ad;
  }
  &.error {
    color: #fff;
    background-color: #f55f71;
    border-color: #f55f71;
  }
`;
