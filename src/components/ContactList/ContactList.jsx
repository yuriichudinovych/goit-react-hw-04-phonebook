import PropTypes from 'prop-types';

import { StyledContactList } from './ContactList.styled';

const ContactList = ({ contacts, removeContacts }) => (
  <>
    <StyledContactList>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>{`${name}: ${number}`}</p>
            <button onClick={() => removeContacts(id)}>delete</button>
          </li>
        );
      })}
    </StyledContactList>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
