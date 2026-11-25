/* Initialization */
import { Configuration, ContactsApi, ExportFileFormats, CompressionFormat } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Export contacts
 * Example of exporting selected contacts to downloadable file
 */

const contactsApi = new ContactsApi(config);

/* You can't provide both a rule and list of emails, only one or the other.  */
const rule = 'exampleFilterRule'; // string or undefined if you want to provide list of emails
const emails = ['example@example.com']; // string[] or empty Array if you want to provide a rule

const fileFormat = 'Csv'; // interface ExportFileFormats: 'Csv' || 'Xml' || 'Json'
const compressionFormat = 'None'; // interface CompressionFormat: 'None || 'Zip
const fileName = 'fileName.csv'; // name of your file including extension in string

const exportContacts = (fileFormat: ExportFileFormats, rule: string, emails: string[], compressionFormat: CompressionFormat, fileName: string): void => {
    contactsApi.contactsExportPost(fileFormat, rule, emails, compressionFormat, fileName).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

exportContacts(fileFormat, rule, emails, compressionFormat, fileName)