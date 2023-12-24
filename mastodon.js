class MastodonAPI {
  constructor(baseUrl, accessToken) { // class constructor
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }
  
  uploadMedia(mediaBlob) {
    let url = `${this.baseUrl}/api/v2/media`;

    var media_result;

    let postData = {
      'file': mediaBlob
    }

    let options = {
      'method': 'POST',
      'headers': {
        'Authorization': `Bearer ${this.accessToken}`
      },
      'payload': postData
    }

    try {
      media_result = UrlFetchApp.fetch(url, options);
      Logger.log("Upload media success. Response code was: " + media_result.getResponseCode() + "\n\n");
      return JSON.parse(media_result);
    } catch (e) {
      Logger.log(e);
      Logger.log("Upload media failed. Error was:\n" + JSON.stringify(e) + "\n\noptions were:\n" + JSON.stringify(options) + ((typeof media_result !== 'undefined')?"\n\nmedia_result was:\n" + media_result:"") + "\n\n");
      return null;
    }
  }

  getMedia(mediaId) {
    let url = `${this.baseUrl}/api/v1/media/${mediaId}`;

    var media_result;

    let options = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${this.accessToken}`
      },
      'muteHttpExceptions': true
    }

    try {
      media_result = UrlFetchApp.fetch(url, options);
      Logger.log("Get media success. Response code was: " + media_result.getResponseCode() + "\n\n");
      return media_result
    } catch (e) {
      Logger.log(e);
      Logger.log("Upload media failed. Error was:\n" + JSON.stringify(e) + "\n\noptions were:\n" + JSON.stringify(options) + ((typeof media_result !== 'undefined')?"\n\nmedia_result was:\n" + media_result:"") + "\n\n");
      return null;
    }
  }

  publishStatus(status, media_id) {
    let url = `${this.baseUrl}/api/v1/statuses`;

    var status_result;

    let postData = {};

    if (status) {
      postData.status = status
    }

    if (media_id) {
      postData.media_ids = [media_id]
    }

    let options = {
      'method': 'POST',
      'headers': {
        'Authorization': `Bearer ${this.accessToken}`
      },
      'contentType': 'application/json',
      'muteHttpExceptions': true,
      'payload': JSON.stringify(postData)
    }

    try {
      status_result = UrlFetchApp.fetch(url, options);
      Logger.log("Post status success. Response code was: " + status_result.getResponseCode() + "\n\n");
      return JSON.parse(status_result);
    } catch (e) {
      Logger.log(e);
      Logger.log("Post status failed. Error was:\n" + JSON.stringify(e) + "\n\noptions were:\n" + JSON.stringify(options) + ((typeof status_result !== 'undefined')?"\n\nmedia_result was:\n" + status_result:"") + "\n\n");
      return null;
    }
  }
}

function init(baseUrl, accessToken) {
  return new MastodonAPI(baseUrl, accessToken);
}
