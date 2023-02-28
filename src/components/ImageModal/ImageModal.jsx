import Modal from 'react-modal';
import PropTypes from 'prop-types';
import defaultImage from '../../img/default-image.jpg';
import { CloseModalBtnIcon } from './ImageModal.styled';

const customStyles = {
  content: {
    position: 'relative',
    outline: 'none',
    maxHeight: '80%',
    maxWidth: '80%',
    overflow: 'hidden',
    border: `2px solid #ff6a00`,
  },
  overlay: {
    height: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000e0',
  },
};

Modal.setAppElement('#root');

export default function ImageModal({
  isModalOpen,
  largeImageURL,
  tags,
  closeModal,
  className,
}) {
  return (
    <Modal
      isOpen={isModalOpen}
      className={className}
      // overlayClassName={'imageModal__overlay'}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      closeTimeoutMS={250}
      preventScroll={true}
    >
      <img
        src={largeImageURL ?? defaultImage}
        alt={tags ?? 'no data provided'}
        className="imageModal__image"
      />
      <button
        type="button"
        onClick={closeModal}
        className="imageModal__close-btn"
      >
        <CloseModalBtnIcon width="40" height="40" />
      </button>
    </Modal>
  );
}

ImageModal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
