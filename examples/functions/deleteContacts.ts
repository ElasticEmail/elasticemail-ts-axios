/* Initialization */
import { Configuration, ContactsApi, EmailsPayload } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Delete contacts
 * Example of deleting contacts in bulk, by a list of email addresses
 * Required Access Level: ModifyContacts
 */

const contactsApi = new ContactsApi(config);

const emailsPayload: EmailsPayload = {
    Emails: ['example@address.com', 'example2@address.com']
}; // provide either Rule or a list of Emails, not both

const deleteContacts = (emailsPayload: EmailsPayload): void => {
    contactsApi.contactsDeletePost(emailsPayload).then((response) => {
        console.log('API called successfully.');
        console.log('Contacts deleted.');
    }).catch((error) => {
        console.error(error);
    });
};

deleteContacts(emailsPayload);
