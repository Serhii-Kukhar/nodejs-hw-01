import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (!contacts.length) {
      console.log('Контактів немає!');
    }

    contacts.pop();

    return await writeContacts(contacts);
  } catch (error) {
    console.error('Помилка видалення контакту', error);
  }
};

removeLastContact();
