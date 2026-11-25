/* Initialization */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { Configuration, EmailsApi, EmailTransactionalMessageData } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Send transactional emails with attachment
 * Example of sending a transactional email with a file attached
 * Required Access Level: SendHttp
 */

const emailsApi = new EmailsApi(config);

const invoicePath = join(__dirname, 'invoice.pdf');
if (!existsSync(invoicePath)) {
    console.log(`Attachment file not found: ${invoicePath}. Skipping send.`);
    process.exit(0);
}
const binData = readFileSync(invoicePath);

const emailTransactionalMessageData: EmailTransactionalMessageData = {
    Recipients: { 
      To: ["example@address.com"] // maximum 50 recipients
    },
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
          Content: "<strong>Example content<strong>"
        },
        {
          ContentType: "PlainText",
          Charset: "utf-8",
          Content: "Example content"
        }
      ],
      From: "myemail@address.com",
      Subject: "Example transactional email with attachment",
      Attachments: [
        {
          BinaryContent: binData.toString('base64'),
          Name: "Invoice.pdf"
        }
      ]
    }
  };

/* One key per send. Reuse it only to retry this send with the same message. */
const idempotencyKey = randomUUID();

const sendTransactionalEmailsWithAttachment = (emailTransactionalMessageData: EmailTransactionalMessageData, idempotencyKey: string): void => {
  emailsApi.emailsTransactionalPost(emailTransactionalMessageData, idempotencyKey).then((response) => {
      console.log('API called successfully.');
      console.log(`TransactionID: ${response.data.TransactionID}, Idempotency-Key: ${idempotencyKey}`);
  }).catch((error) => {
      console.error(error);
  });
};

sendTransactionalEmailsWithAttachment(emailTransactionalMessageData, idempotencyKey);
