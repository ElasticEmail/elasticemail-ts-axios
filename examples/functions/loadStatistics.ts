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
 * Load statistics
 * Example of loading basic statistics
 */

const statisticsApi = new StatisticsApi(config);

/* dates in YYYY-MM-DDThh:mm:ss format */
const fromDate = new Date('2015-01-01').toJSON(); // string
const toDate = new Date('2022-01-01').toJSON(); // string or null

const loadStatistics = (fromDate: string, toDate?: string): void => {
    statisticsApi.statisticsGet(fromDate, toDate).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};

loadStatistics(fromDate, toDate)