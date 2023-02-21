import styled from "styled-components";

export const ConfirmModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    flex: 0 0 400px;
    max-width: 400px;
    top: 200px;
    padding: 30px;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
  }
`;
