import React from "react";
import { ButtonOutline, ButtonSolid, Text } from "../../../styledConstants";
import { ConfirmModalWrapper } from "./style";

const ConfirmationModal = ({
  message = "are you sure you want to confirm",
  onCancel = () => {},
  onConfirm = () => {},
  cancelButtonText = "Cancel",
  confirmButtonText = "Confirm",
}) => {
  return (
    <ConfirmModalWrapper>
      <div className="modal-content">
        <Text size="lg" className="mb30">
          {message}
        </Text>
        <div className="actions mt30">
          <ButtonOutline className="mr12" primary rg onClick={() => onCancel()}>
            {cancelButtonText}
          </ButtonOutline>
          <ButtonSolid primary rg onClick={() => onConfirm()}>
            {confirmButtonText}
          </ButtonSolid>
        </div>
      </div>
    </ConfirmModalWrapper>
  );
};

export default ConfirmationModal;
