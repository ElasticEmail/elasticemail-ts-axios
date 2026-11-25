# TypeScript Axios Snippets

## Installation
Run in your project `npm install @elasticemail/elasticemail-client-ts-axios` or download from GitHub repository https://github.com/ElasticEmail/elasticemail-ts-axios

### Requirements
https://github.com/ElasticEmail/elasticemail-ts-axios/blob/master/README.md

## Prepare test enviroment in this repo
Enter this catalog and run `npm install`

## Set your API key
Every snippet reads the API key from the `ELASTICEMAIL_API_KEY` environment variable and stops with a message if it isn't set:

```
export ELASTICEMAIL_API_KEY=...
```

## Prepare a snippet
Replace other data if needed eg.: 
- your validated email address, 
- your email address to receive example email.
- template name
- campaign name
- ...etc

## Running a snippet
Run

`cd functions`

`npx ts-node snippetFile.ts`

## Snippets

Snippet | What it does | Guide
--- | --- | ---
[addCampaign](functions/addCampaign.ts) | Create a campaign | [readme](functions/addCampaign.md)
[addContacts](functions/addContacts.ts) | Add contacts | [readme](functions/addContacts.md)
[addList](functions/addList.ts) | Create a contact list | [readme](functions/addList.md)
[addTemplate](functions/addTemplate.ts) | Create a template | [readme](functions/addTemplate.md)
[deleteCampaign](functions/deleteCampaign.ts) | Delete a campaign by name | [readme](functions/deleteCampaign.md)
[deleteContact](functions/deleteContact.ts) | Delete one contact by email address | [readme](functions/deleteContact.md)
[deleteContacts](functions/deleteContacts.ts) | Delete many contacts in one call | [readme](functions/deleteContacts.md)
[deleteList](functions/deleteList.ts) | Delete a list by name | [readme](functions/deleteList.md)
[deleteTemplate](functions/deleteTemplate.ts) | Delete a template by name | [readme](functions/deleteTemplate.md)
[exportContacts](functions/exportContacts.ts) | Export contacts to a downloadable file | [readme](functions/exportContacts.md)
[loadCampaign](functions/loadCampaign.ts) | Load a campaign by name | [readme](functions/loadCampaign.md)
[loadCampaignsStats](functions/loadCampaignsStats.ts) | Load statistics for campaigns | [readme](functions/loadCampaignsStats.md)
[loadChannelsStats](functions/loadChannelsStats.ts) | Load statistics for channels | [readme](functions/loadChannelsStats.md)
[loadList](functions/loadList.ts) | Load a list by name | [readme](functions/loadList.md)
[loadStatistics](functions/loadStatistics.ts) | Load account statistics | [readme](functions/loadStatistics.md)
[loadTemplate](functions/loadTemplate.ts) | Load a template by name | [readme](functions/loadTemplate.md)
[sendBulkEmails](functions/sendBulkEmails.ts) | Send a bulk email with merge fields | [readme](functions/sendBulkEmails.md)
[sendTransactionalEmails](functions/sendTransactionalEmails.ts) | Send a transactional email | [readme](functions/sendTransactionalEmails.md)
[sendTransactionalEmailsWithAttachment](functions/sendTransactionalEmailsWithAttachment.ts) | Send a transactional email with an attachment | [readme](functions/sendTransactionalEmailsWithAttachment.md)
[updateCampaign](functions/updateCampaign.ts) | Update a campaign | [readme](functions/updateCampaign.md)
[uploadContacts](functions/uploadContacts.ts) | Import contacts from a CSV file | [readme](functions/uploadContacts.md)
