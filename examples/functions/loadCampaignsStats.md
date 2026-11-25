# Load Campaign Statistics

This is a guide how to load statistics for each campaign from your account in an easy way using JavaScript or TypeScript.

*Required Access Level: ViewChannels*

## What statistics can you get?
When you send campaigns to your audience we create some statistics reports for you eg. number of emails sent, delivered, openened, unsubscribed, clicked etc.

## Preparation
Create a new TypeScript file `snippet.ts` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Import classes and interfaces you want to use:

```javascript
import { Configuration, StatisticsApi } from '@elasticemail/elasticemail-client-ts-axios';
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

Create an instance of StatisticsApi that will be used to load campaigns statistics.

```javascript
const statisticsApi = new StatisticsApi(config);
```

Specify report pagination options:
- limit – maximum returned items, `limit = 0` means to return everything till the end of the list
- offset – how many items should be skipped from begging

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/statisticsGet

This example will show how to fetch information about your all campaigns.

```javascript
const limit = 0; // number
const offset = 0; // number
```

Create a function calling `statisticsCampaignsGet` method from the API to load campaigns statistics. You may include console logs called when response comes back.
In case of error it will display error details, otherwise it will display a success message and chosen details about newly created campaign.

```javascript
const loadCampaignsStats = (limit: number, offset: number): void => {
    statisticsApi.statisticsCampaignsGet(limit, offset).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};
```

And finally, call `loadCampaignsStats` function with proper arguments: 

```javascript
loadCampaignsStats(limit, offset);
```


## The whole code to copy and paste:

```javascript
/* Initialization */
import { Configuration, StatisticsApi } from '@elasticemail/elasticemail-client-ts-axios';

/* Read your API key from the ELASTICEMAIL_API_KEY environment variable */

const apiKey = process.env.ELASTICEMAIL_API_KEY;
if (!apiKey) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}

const config = new Configuration({
    apiKey: apiKey
});

const statisticsApi = new StatisticsApi(config);

const limit = 0; // number
const offset = 0; // number

const loadCampaignsStats = (limit: number, offset: number): void => {
    statisticsApi.statisticsCampaignsGet(limit, offset).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

loadCampaignsStats(limit, offset)
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
npx ts-node snippet.ts
```
