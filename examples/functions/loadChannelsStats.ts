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

/**
 * Load channels stats
 * Example of loading your channels' statistics
 */

const statisticsApi = new StatisticsApi(config);

const limit = 0; // number
const offset = 0; // number

const loadChannelsStats = (limit: number, offset: number): void => {
    statisticsApi.statisticsChannelsGet(limit, offset).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

loadChannelsStats(limit, offset)