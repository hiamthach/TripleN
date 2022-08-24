import React from "react";

import "./styles.scss";
import { Button, Modal } from "antd";

import FormContainer from "../../components/FormContainer";

const BookModal = ({ isVisible, setVisible }) => {
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="book-modal">
      <Modal visible={isVisible} onCancel={handleCancel}>
        <FormContainer isBook={true} setVisible={setVisible} />
      </Modal>
    </div>
  );
};

export default BookModal;
