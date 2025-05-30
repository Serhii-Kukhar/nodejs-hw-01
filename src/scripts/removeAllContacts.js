import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Усі контакти видалено.');
  } catch (error) {
    console.error('Помилка видалення всіх контактів', error);
  }
};

removeAllContacts();
