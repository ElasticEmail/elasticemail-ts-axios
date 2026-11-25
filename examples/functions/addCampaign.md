# Add Campaign

This is a guide how to create campaign in an easy way using JavaScript or TypeScript.

*Required Access Level: ModifyCampaigns*

## What's a campaign?
It is sending an email to the group of contacts. To send a campaign you must first create a template (which becomes the email) and you need contacts (the people who receive the email).

## Preparation
Create a new TypeScript file `snippet.ts` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Import classes and interfaces you want to use:

```javascript
import { Configuration, CampaignsApi, Campaign } from '@elasticemail/elasticemail-client-ts-axios';
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

Create an instance of CampaignsApi that will be used to create a campaign.

```javascript
const campaignsApi = new CampaignsApi(config);
```

Create an example campaign object:
- Name: defines campaign name by which you can identify it later
- Recipients: define your audience
- Content: define your message details
- Status: define status in which campaign should be created

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/campaignsPost

Send will be triggered immediately or postponed, depending on given options. 
Because we define `Status` as `Draft`, so in this case it will be postponed and campaign will be added to drafts.


```javascript
const newCampaign: Campaign = {
    Name: 'New campaign',
    Recipients: {
      ListNames: ['my list name'],
    },
    Content: [{
      From: 'myemail@address.com',
      ReplyTo: 'myemail@address.com',
      TemplateName: 'your_template',
      Subject: 'Hello'
    }],
    Status: 'Draft'
  }; // interface Campaign from '@elasticemail/elasticemail-client-ts-axios'
};
```

Create a function calling `campaignsPost` method from the API to create a campaign. You may include console logs called when response comes back.
In case of error it will display error details, otherwise it will display a success message and chosen details about newly created campaign.

```javascript
const addCampaign = (newCampaign: Campaign): void => {
    campaignsApi.campaignsPost(newCampaign).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
}
```

And finally, call `addCampaign` function with proper arguments: 

```javascript
addCampaign(newCampaign);
```


## The whole code to copy and paste:

```javascript
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

const campaignsApi = new CampaignsApi(config);

const newCampaign: Campaign = {
    Name: 'New campaign',
    Recipients: {
      ListNames: ["my list name"],
    },
    Content: [{
      From: 'myemail@address.com',
      ReplyTo: 'myemail@address.com',
      TemplateName: "your_template",
      Subject: 'Hello'
    }],
    Status: "Draft"
}; // interface Campaign from '@elasticemail/elasticemail-client-ts-axios'

const addCampaign = (newCampaign: Campaign): void => {
  campaignsApi.campaignsPost(newCampaign).then((response) => {
      console.log('API called successfully.');
      console.log(response.data);
  }).catch((error) => {
      console.error(error);
  });
};

addCampaign(newCampaign);
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
npx ts-node snippet.ts
```
