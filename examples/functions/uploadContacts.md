# Upload Contacts

This is a guide how to upload contacts from CSV file in an easy way using JavaScript or TypeScript.

*Required Access Level: ModifyContacts*

## What's a contact?
It is a recipient of your emails. Contacts can be grouped by created segments or lists.

## Preparation
Create a new TypeScript file `snippet.ts` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Import classes and interfaces you want to use:

```javascript
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Configuration, ContactsApi } from '@elasticemail/elasticemail-client-ts-axios';
```

Read your API key from the `ELASTICEMAIL_API_KEY` environment variable, stop with a clear message if it isn't set, and create config with it (remember to check a required access level):

```javascript
const apiKey = process.env.ELASTICEMAIL_API_KEY;
if (!apiKey) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}

const config = new Configuration({
    apiKey: apiKey
});
```

Create an instance of ContactsApi that will be used to upload contacts from CSV file.

```javascript
const contactsApi = new ContactsApi(config);
```

In this example we will load a CSV file that contains a list of contacts. Save it as `files/contacts.csv` next to your `snippet.ts`.

The simplest CSV file requires only one column `Email`, eg.:

```
Email
john@johnsmith.com
```

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/contactsImportPost

Create variables with listName and encodingName.

```javascript
const listName = 'My list'; // string
const encodingName = 'utf-8'; // string
```

Read the CSV file and wrap it in a `File` (available globally in Node.js 20 and later).

```javascript
const file = new File([readFileSync(join(__dirname, 'files', 'contacts.csv'))], 'contacts.csv', { type: 'text/csv' });
```

Create a function calling `contactsImportPost` method from the API to upload contacts. The third argument, `fileUrl`, is for importing from a URL instead, so pass `undefined` there. You may include console logs called when response comes back.
In case of error it will display error details, otherwise it will display a success message and the API response.

```javascript
const uploadContacts = (listName: string, encodingName: string, file: File): void => {
    contactsApi.contactsImportPost(listName, encodingName, undefined, file).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
}
```

And finally, call `uploadContacts` function with proper arguments: 

```javascript
uploadContacts(listName, encodingName, file);
```


## The whole code to copy and paste:

```javascript
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
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
npx ts-node snippet.ts
```
