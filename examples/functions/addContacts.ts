/* Initialization */
import { Configuration, ContactsApi, ContactPayload } from '@elasticemail/elasticemail-client-ts-axios';

/* Read your API key from the ELASTICEMAIL_API_KEY environment variable */

const apiKey = process.env.ELASTICEMAIL_API_KEY;
if (!apiKey) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}

const config = new Configuration({
    apiKey: apiKey
});

/**
 * Add contacts
 * Example of adding up to 1000 contacts
 * You can pass an array with contact details
 * Specify a list name in options or add to all contacts
 */

const contactsApi = new ContactsApi(config);

const contacts = [{
    Email: "example@address.com",
    FirstName: "John",
    LastName: "Smith"
  },
  {
    Email: "test@address.com",
    FirstName: "Test",
    LastName: "Test"
  }
]; // interface ContactPayload[] from '@elasticemail/elasticemail-client-ts-axios'

const listNames = ["My list"]; // string[]

const addContacts = (contacts: ContactPayload[], listNames: string[]): void => {
  contactsApi.contactsPost(contacts, listNames).then((response) => {
      console.log('API called successfully.');
      console.log(response.data);
  }).catch((error) => {
      console.error(error);
  });
};

addContacts(contacts, listNames)