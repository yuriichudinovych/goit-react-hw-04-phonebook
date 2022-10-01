import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { Container, Title, SecondTitle } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return value ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('contacts');
    };
  }, []);

  const addContacts = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} - is already on the site`);
    }

    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return [...prev, newContact];
    });
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(contact => contact.name === name);
    return result;
  };

  const removeContacts = id => {
    setContacts(prev => {
      const newContacts = prev.filter(contact => contact.id !== id);

      return newContacts;
    });
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const FilteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();

      return normalizedName.includes(normalizedFilter);
    });

    return FilteredContacts;
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContacts} />
      <SecondTitle>Contacts</SecondTitle>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} handleChange={handleChange} />

          <ContactList
            contacts={getFilteredContacts()}
            removeContacts={removeContacts}
          />
        </>
      ) : (
        <p>Contacts are not find.</p>
      )}
    </Container>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts?.length) {
//       this.setState({
//         contacts,
//       });
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.state === nextState) {
//       return false;
//     }
//     return true;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   addContacts = contact => {
//     if (this.isDuplicate(contact)) {
//       return alert(`${contact.name} - is already on the site`);
//     }

//     this.setState(prev => {
//       const newContact = {
//         id: nanoid(),
//         ...contact,
//       };
//       return {
//         contacts: [...prev.contacts, newContact],
//       };
//     });
//   };

//   removeContacts = id => {
//     this.setState(prev => {
//       const newContacts = prev.contacts.filter(contact => contact.id !== id);

//       return { contacts: newContacts };
//     });
//   };

//   isDuplicate({ name }) {
//     const { contacts } = this.state;
//     const result = contacts.find(contact => contact.name === name);
//     return result;
//   }

//   getFilteredContacts() {
//     const { contacts, filter } = this.state;

//     if (!filter) {
//       return contacts;
//     }

//     const normalizedFilter = filter.toLowerCase();
//     const FilteredContacts = contacts.filter(({ name }) => {
//       const normalizedName = name.toLowerCase();

//       return normalizedName.includes(normalizedFilter);
//     });

//     return FilteredContacts;
//   }

//   render() {
//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <ContactForm onSubmit={this.addContacts} />
//         <SecondTitle>Contacts</SecondTitle>
//         {this.state.contacts.length > 0 ? (
//           <>
//             <Filter
//               filter={this.state.filter}
//               handleChange={this.handleChange}
//             />

//             <ContactList
//               contacts={this.getFilteredContacts()}
//               removeContacts={this.removeContacts}
//             />
//           </>
//         ) : (
//           <p>Contacts are not find.</p>
//         )}
//       </Container>
//     );
//   }
// }
