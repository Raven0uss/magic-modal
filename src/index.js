import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled component to manage the mask
const Mask = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2147483645;
  width: 100%;
  height: 100%;
`;

// Styled component to manage the container
const ModalContainer = styled.div`
  width: 50%;
  min-width: 450px;
  max-height: 50%;
  padding: 12px;
  border-radius: 8px;
  overflow-y: auto;

  @media (max-width: 500px) {
    width: calc(100% - 12px);
    margin: 0 6px;
    min-width: unset;
    border-radius: 0px;
  }
`;

const MagicModal = ({
  children,
  isOpen,
  setOpen,
  onClose,
  maskColor,
  backgroundColor,
}) => {
  // Check if the modal is displayed or not. If no children inside JSX scope, it display nothing.
  if (!isOpen || children === undefined) return null;
  return (
    <Mask
      onClick={(e) => {
        // Call the hooks func passed in props
        setOpen(false);
        onClose();
      }}
      style={{
        backgroundColor: maskColor,
      }}
    >
      <ModalContainer
        // Trigger the bubbling and skip it, to avoid the close modal when user interact inside container
        onClickCapture={(e) => e.stopPropagation()}
        style={{
          boxShadow: `2px 2px 12px ${maskColor}`,
          backgroundColor,
        }}
      >
        {children}
      </ModalContainer>
    </Mask>
  );
};

MagicModal.propTypes = {
  children: PropTypes.node.isRequired,

  // Management
  isOpen: PropTypes.bool.isRequired, // React useState value
  setOpen: PropTypes.func.isRequired, // React useState func
  onClose: PropTypes.func, // Callback executed when the modal has been closed

  // Mask
  maskColor: PropTypes.string, // Personnalize the mask color

  // Modal Container
  backgroundColor: PropTypes.string, // Personnalize the container background
};

MagicModal.defaultProps = {
  maskColor: "#00000080",
  backgroundColor: "#ffffff",
  onClose: () => {},
};

export default MagicModal;
