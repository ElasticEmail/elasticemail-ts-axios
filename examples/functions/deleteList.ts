/* Initialization */
import { Configuration, ListsApi } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Delete list
 * Example of deleting existing contact list by name
 */

const listsApi = new ListsApi(config);

const listName = 'Example list' // string

const deleteList = (listName: string): void => {
    listsApi.listsByNameDelete(listName).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

deleteList(listName)