# Delete Contacts

This is a guide how to delete many contacts from your account in one call in an easy way using JavaScript or TypeScript.

*Required Access Level: ModifyContacts*

## What's a contact?
It is a recipient of your emails. Contacts can be grouped by created segments or lists.

## Preparation
Create a new TypeScript file `snippet.ts` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Import classes and interfaces you want to use:

```javascript
import { Configuration, ContactsApi, EmailsPayload } from '@elasticemail/elasticemail-client-ts-axios';
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

Create an instance of ContactsApi that will be used to delete contacts.

```javascript
const contactsApi = new ContactsApi(config);
```

Specify the email addresses of the contacts to delete. To delete a single contact, see [deleteContact](deleteContact.md).

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/contactsDeletePost

```javascript
const emailsPayload: EmailsPayload = {
    Emails: ['example@address.com', 'example2@address.com']
}; // provide either Rule or a list of Emails, not both
```

Create a function calling `contactsDeletePost` method from the API to remove the contacts. You may include console logs called when response comes back.
In case of error it will display error details, otherwise it will display a success message.

```javascript
const deleteContacts = (emailsPayload: EmailsPayload): void => {
    contactsApi.contactsDeletePost(emailsPayload).then((response) => {
        console.log('API called successfully.');
        console.log('Contacts deleted.');
    }).catch((error) => {
        console.error(error);
    });
};
```

And finally, call `deleteContacts` function with proper arguments: 

```javascript
deleteContacts(emailsPayload);
```


## The whole code to copy and paste:

```javascript
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
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
npx ts-node snippet.ts
```
