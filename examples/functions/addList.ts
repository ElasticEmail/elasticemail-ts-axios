/* Initialization */
import { Configuration, ListsApi, ListPayload } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Add list
 * Example of creating new list from existing contact emails
 */

const listsApi = new ListsApi(config);

const listPayload = {
    ListName: "New list",
    AllowUnsubscribe: true,
    Emails: ["example@address.com"] // existing emails or empty to add all contacts
  }; // interface ListPayload from '@elasticemail/elasticemail-client-ts-axios'

const addList = (listPayload: ListPayload): void => {
    listsApi.listsPost(listPayload).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

addList(listPayload)