import {TokenRegistrySDK, MainnetInstance} from '../src/index';

const INDY_SUBJECT = TokenRegistrySDK.subject(
  '5d9d887de76a2c9d057b3e5d34d5411f7f8dc4d54f0c06e8ed2eb4a9',
  'INDY'
)

async function run (){
  try {
    const response = await MainnetInstance.query({
      subject: INDY_SUBJECT
    })

    console.log('Response:', response);
  } catch (e) {
    console.log('Error:', e);
  }
}

run();
