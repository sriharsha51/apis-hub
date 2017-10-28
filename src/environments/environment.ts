// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  PIXABAY_API_KEY: '6719579-ab29e6f33de09b04761920409',
  PIXABAY_API_URL: 'https://pixabay.com/api/?key=',
  MAILBOXLAYER_API_KEY: '8ed78578dffa6ccae89db0f072e9144f',
  MAILBOXLAYER_API_URL: 'http://apilayer.net/api/check?access_key=',
  NUM_VERIFY_API_URL:'http://apilayer.net/api/validate?access_key=',
  NUM_VERIFY_API_KEY:'e2007c7110fff3439179b5b655004b1e',
  LANGUAGE_LAYER_API_URL:'http://apilayer.net/api/detect?access_key=',
  LANGUAGE_LAYER_API_KEY:'8d2d2537f1dbb47d78458537799e9351'
};
