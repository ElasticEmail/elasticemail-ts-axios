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

/**
 * Send bulk emails
 * Example of sending bulk merge emails
 */

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

/* One key per send. Reuse it only to retry this send with the same message. */
const idempotencyKey = randomUUID();

sendBulkEmails(emailMessageData, idempotencyKey)