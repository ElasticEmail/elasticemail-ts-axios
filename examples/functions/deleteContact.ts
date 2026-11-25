/* Initialization */
import { Configuration, ContactsApi } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Delete contact
 * Example of deleting contact using email address
 */

const contactsApi = new ContactsApi(config);

const contact = 'example@address.com'; // string

const deleteContact = (contact: string): void => {
    contactsApi.contactsByEmailDelete(contact).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

deleteContact(contact);