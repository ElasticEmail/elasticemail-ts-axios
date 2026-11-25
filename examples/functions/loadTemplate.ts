/* Initialization */
import { Configuration, TemplatesApi } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Load template
 * Example of loading existing template
 */

const templatesApi = new TemplatesApi(config);

const templateName = 'Example template'; // string

const loadTemplate = (templateName: string): void => {
    templatesApi.templatesByNameGet(templateName).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

loadTemplate(templateName)