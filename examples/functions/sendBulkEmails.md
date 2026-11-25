# Send Bulk Email

This is a guide how to send bulk emails in an easy way using JavaScript or TypeScript.

*Required Access Level: SendHttp*

## What's a bulk email?
This is single email message send to a large group of recipients at once.

## Preparation
Create a new TypeScript file `snippet.ts` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Import `randomUUID`, used to create an idempotency key, and the classes and interfaces you want to use:

```javascript
import { randomUUID } from 'node:crypto';
import { Configuration, EmailsApi, EmailMessageData } from '@elasticemail/elasticemail-client-ts-axios';
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

Create an instance of EmailsApi that will be used to send bulk emails.

```javascript
const emailsApi = new EmailsApi(config);
```

Specify email details:
- email recipients:
    - this example demostrates merge fields usage, for each recipient `{name}` will be changed to recipient's name
- email content:
    - body parts
    - from email – it needs to be your validated email address
    - email subject

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/emailsPost


```javascript
const emailMessageData: EmailMessageData = {
    Recipients: [
      { 
        Email: "example@address.com",
        Fields: {
          name: "Name"
        }
      }
    ],
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
          Content: "<strong>Hi {name}!<strong>"
        },
        {
          ContentType: "PlainText",
          Charset: "utf-8",
          Content: "Hi {name}!"
        }
      ],
      From: "myemail@address.com",
      Subject: "Example bulk email"
    }
}; // interface EmailMessageData from '@elasticemail/elasticemail-client-ts-axios'
```

Create an idempotency key for this send. If the request times out, retry it with the same message and the same key, and the email won't be delivered twice.

```javascript
const idempotencyKey = randomUUID();
```

Create a function calling `emailsPost` method from the API to send bulk emails. You may include console logs called when response comes back.
In case of error it will display error details, otherwise it will display the `TransactionID` and the idempotency key.

```javascript
const sendBulkEmails = (emailMessageData: EmailMessageData, idempotencyKey: string): void => {
  emailsApi.emailsPost(emailMessageData, idempotencyKey).then((response) => {
      console.log('API called successfully.');
      console.log(`TransactionID: ${response.data.TransactionID}, Idempotency-Key: ${idempotencyKey}`);
  }).catch((error) => {
      console.error(error);
  });
};
```

And finally, call `sendBulkEmails` function with proper arguments: 

```javascript
sendBulkEmails(emailMessageData, idempotencyKey);
```


## The whole code to copy and paste:

```javascript
/* Initialization */
import { randomUUID } from 'node:crypto';
import { Configuration, EmailsApi, EmailMessageData } from '@elasticemail/elasticemail-client-ts-axios';

/* Read your API key from the ELASTICEMAIL_API_KEY environment variable */

const apiKey = process.env.ELASTICEMAIL_API_KEY;
if (!apiKey) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}

const config = new Configuration({
    apiKey: apiKey
});

const emailsApi = new EmailsApi(config);

const emailMessageData: EmailMessageData = {
    Recipients: [
      { 
        Email: "example@address.com",
        Fields: {
          name: "Name"
        }
      }
    ],
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
          Content: "<strong>Hi {name}!<strong>"
        },
        {
          ContentType: "PlainText",
          Charset: "utf-8",
          Content: "Hi {name}!"
        }
      ],
      From: "myemail@address.com",
      Subject: "Example bulk email"
    }
  }; // interface EmailMessageData from '@elasticemail/elasticemail-client-ts-axios'

const sendBulkEmails = (emailMessageData: EmailMessageData, idempotencyKey: string): void => {
  emailsApi.emailsPost(emailMessageData, idempotencyKey).then((response) => {
      console.log('API called successfully.');
      console.log(`TransactionID: ${response.data.TransactionID}, Idempotency-Key: ${idempotencyKey}`);
  }).catch((error) => {
      console.error(error);
  });
};

const idempotencyKey = randomUUID();

sendBulkEmails(emailMessageData, idempotencyKey)
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
npx ts-node snippet.ts
```
