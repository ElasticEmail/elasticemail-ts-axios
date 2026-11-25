/* Initialization */
import { Configuration, CampaignsApi } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Load Campaign
 * Example of loading details about existing campaign by name (eg. campaign status, name, recipients)
 */

const campaignsApi = new CampaignsApi(config);

const campaignName = "example"; // string

const loadCampaign = (campaignName: string): void => {
    campaignsApi.campaignsByNameGet(campaignName).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

loadCampaign(campaignName);

