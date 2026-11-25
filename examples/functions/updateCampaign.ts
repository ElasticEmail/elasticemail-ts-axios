/* Initialization */
import { Configuration, CampaignsApi, Campaign } from '@elasticemail/elasticemail-client-ts-axios';

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
 * Update Campaign
 * Example of updating existing campaign
 */

const campaignsApi = new CampaignsApi(config);

const campaignName = 'Example'; // string
const updatedCampaign: Campaign = {
    Name: 'Updated example campaign',
    Recipients: {
      ListNames: ["my list name"],
    },
    Content: [{
      From: 'myemail@address.com',
      ReplyTo: 'myemail@address.com',
      TemplateName: "your_template",
      Subject: 'Updated campaign'
    }],
    Status: "Draft"
}; // interface Campaign from '@elasticemail/elasticemail-client-ts-axios'

const updateCampaign = (campaignName: string, updatedCampaign: Campaign): void => {
  campaignsApi.campaignsByNamePut(campaignName, updatedCampaign).then((response) => {
      console.log('API called successfully.');
      console.log(response.data);
  }).catch((error) => {
      console.error(error);
  });
};

updateCampaign(campaignName, updatedCampaign)