# MastodonAPI
Mastodon API integration for Google Apps Script


### Inspiration

Inspiration for this comes from Bradley Momberger's [Twitterlib](https://github.com/airhadoken/twitter-lib) which unfortunately stopped working since Twitter (or X I guess) decided to shut down the v1 Twitter API for non-Enterprise developers, and since I wanter to give Mastodon a try, I wanted some Twitter bots I implemented to live on somewhere else.

### Use

Click the + after Libraries, paste in v1jS989gPrhRRehNc6tBvMDF8XPzKAIHeiVLpmOf_V5mZ-JgYLQA6XeRg9 (the project key for this script), and add in MastodonAPI and select its latest version.

Create a Mastodon API access token in your favourite Mastodon instance and create a MastodonAPI object passing the url of your instance and the access token.

```javascript
let masto = MastodonAPI.init(mastodonBaseUrl, accessToken);
```

After that, with the created MastodonAPI object you can start using the different methods:

```javascript
// Start uploading media to Mastodon
let uploadMediaInit = masto.uploadMedia(videoBlob);
// Get the status of the media upload
let getMedia = masto.getMedia(uploadMediaInit.id);
// Publish an status post with the uploaded media attached
let response = masto.publishStatus(null, uploadMediaInit.id)
```

### Example of use

You can find an example of use in the [following repo](https://github.com/manglaneso/oraleputosbot/blob/main/src/MastodonTriggerService.js).