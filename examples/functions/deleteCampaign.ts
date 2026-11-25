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
 * Delete Campaign
 * Example of deleting existing campaign by name
 */

const campaignsApi = new CampaignsApi(config);

const campaignName = "example"; // string

const deleteCampaign = (campaignName: string): void => {
    campaignsApi.campaignsByNameDelete(campaignName).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

deleteCampaign(campaignName)