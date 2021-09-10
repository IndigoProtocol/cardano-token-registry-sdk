# Cardano Token Registry SDK - TypeScript

This SDK is intended to allow developers to interact with [metadata-server](https://github.com/input-output-hk/offchain-metadata-tools).

## Getting Started


The SDK is hosted on [npmjs.com](https://www.npmjs.com/package/@indigo-labs.io/cardano-token-registry-sdk), so you can directly import it using your favorite package manager.

```console
$ yarn add @indigo-labs.io/cardano-token-registry-sdk
```

## Usage

Using the SDK is pretty straight-forward as you can see from the following examples.

### Query a Token from Subject

```typescript
  import {MainnetInstance} from '@indigo-labs.io/cardano-token-registry-sdk';

  const response = await MainnetInstance.query({
    subject: '' // A Subject ID
  })
```
