const parseResponse = (response) => {
  // falsey
  if (!response) {
    return new Error('Response was falsey');
  } else if (response instanceof Error) {
    return response.message ? response.message : new Error('Response was an error');
  } else if (response instanceof Object) {
    if (response._bodyText) {
      if (response._bodyText instanceof String) {
        return JSON.parse(response._bodyText);
      } return response._bodyText;
    } else if (response.token) {
      return response.token;
    } else {
      return new Error('Unable to parse response');
    }
  } else if (response instanceof String) {
    try {
      const parse = JSON.parse(response);
      return parse;
    } catch (e) {
      return response;
    }
  }
  return new Error('Unable to parse response');
};
