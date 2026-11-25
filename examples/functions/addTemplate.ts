/* Initialization */
import { Configuration, TemplatesApi, TemplatePayload } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Add template
 * Example of adding new template
 */

const templatesApi = new TemplatesApi(config);

const templatePayload: TemplatePayload = {
    Name: 'New template',
    Subject: 'Default subject',
    Body: [{
      ContentType: 'HTML',
      Charset: 'utf-8',
      Content: '<div>My template</div>'
    }],
    TemplateScope: 'Personal',
}; // interface TemplatePayload from '@elasticemail/elasticemail-client-ts-axios'

const addTemplate = (templatePayload: TemplatePayload): void => {
    templatesApi.templatesPost(templatePayload).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

addTemplate(templatePayload)