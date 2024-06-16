import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';
import { useState } from 'react';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  return (
    <li className={css.li}>
      <div>
        <h3 className={css.h3}>
          <FaUser className={css.icon} />
          {name}
        </h3>
        <p className={css.p}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={openModal}>
        Delete
      </button>

      {showModal && (
        <div className={css.modal}>
          <p>Are you sure you want to delete this contact?</p>
          <div>
            <button className={css.modalButton} onClick={handleDelete}>
              Yes
            </button>
            <button className={css.modalButton} onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Contact;
