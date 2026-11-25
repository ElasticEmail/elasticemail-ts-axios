/* Initialization */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
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
 * Upload contacts
 * Example of adding contacts by uploading csv file
 * Column required in csv file: Email
 * Required Access Level: ModifyContacts
 */

const contactsApi = new ContactsApi(config);

const listName = 'My list'; // string
const encodingName = 'utf-8'; // string

/* CSV file with contacts list, read from files/contacts.csv next to this script */
const file = new File([readFileSync(join(__dirname, 'files', 'contacts.csv'))], 'contacts.csv', { type: 'text/csv' });

const uploadContacts = (listName: string, encodingName: string, file: File): void => {
    // The third argument, fileUrl, is for importing from a URL instead of a file.
    contactsApi.contactsImportPost(listName, encodingName, undefined, file).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
}

uploadContacts(listName, encodingName, file);
