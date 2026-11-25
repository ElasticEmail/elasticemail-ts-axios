# Delete Contact

This is a guide how to delete contact from your account in an easy way using JavaScript or TypeScript.

*Required Access Level: ModifyContacts*

## What's a contact?
It is a recipient of your emails. Contacts can be grouped by created segments or lists.

## Preparation
Create a new TypeScript file `snippet.ts` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Import classes and interfaces you want to use:

```javascript
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

Create an instance of ContactsApi that will be used to delete contact.

```javascript
const contactsApi = new ContactsApi(config);
```

Specify a contact to delete. To delete many contacts in one call, see [deleteContacts](deleteContacts.md).

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/contactsByEmailDelete

```javascript
const contact = 'example@address.com'; // string
```

Create a function calling `contactsByEmailDelete` method from the API to remove a contact. You may include console logs called when response comes back.
In case of error it will display error details, otherwise it will display a success message and chosen details about newly created campaign.

```javascript
const deleteContact = (contact: string): void => {
    contactsApi.contactsByEmailDelete(contact).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
}
```

And finally, call `deleteContact` function with proper arguments: 

```javascript
deleteContact(contact);
```


## The whole code to copy and paste:

```javascript
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
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
npx ts-node snippet.ts
```
