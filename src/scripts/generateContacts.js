import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: number }, createFakeContact);

  contacts.push(...newContacts);
  try {
    await writeContacts(contacts);

    console.log(`${number}: контактів додано`);
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

generateContacts(5);
