# Metamocks

a utility to mock metamask mainly for e2e testing like cypress

## installation

```
npm i metamocks
```

or

```
yarn add metamocks
```

## usage with cypress

add these to cypress support/commands.js file:

```js
import {JsonRpcProvider} from '@ethersproject/providers'
import {Wallet} from '@ethersproject/wallet'
import MetaMocks from 'metamocks'

const TEST_PRIVATE_KEY = '0xe580410d7c37d26c6ad1a837bbae46bc27f9066a466fb3a66e770523b4666d19'
const DEFAULT_CHAIN_ID = 5

Cypress.Commands.add('setupMetamocks', () => {
    const provider = new JsonRpcProvider(
        "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        DEFAULT_CHAIN_ID
    )
    const signer = new Wallet(TEST_PRIVATE_KEY, provider)
    const metamocks = new MetaMocks(signer, DEFAULT_CHAIN_ID)
    cy.wrap(metamocks).as('metamocks')
    cy.on('window:before:load', (win) => {
        win.ethereum = metamocks
    })
})

Cypress.Commands.add('registerMockContract', (...args) => {
    cy.get('@metamocks').then((metamocks) => {
        metamocks.registerMockContract(...args)
    })
})
```

if you are using typescript, create a metamocks.d.ts file in the cypress folder with the following content:

```ts
import MetaMocks from 'metamocks';

export interface EthereumProvider {
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
    autoRefreshOnNetworkChange?: boolean;
}

declare global {
    namespace Cypress {
        interface Chainable {
            registerMockContract: (...args: Parameters<MetaMocks['registerMockContract']>) => void;

            setupMetamocks(): void;
        }

        interface Window {
            ethereum?: EthereumProvider;
        }
    }
    namespace Mocha {
        interface Context {
            metamocks?: MetaMocks;
        }
    }
}

```

now you can setup metamocks in your tests using `cy.setupMetamocks()` before visiting a page

## mocking abis

To mock an abi, you should create an `AbiHanlder` class for it, and implement the mock contract methods there. An
example AbiHanlders can be
found [here](https://github.com/Song-Dust/interface/tree/master/cypress/utils/abihandlers). then register that
MockContract with

```ts
metamocks.registerMockContract(contractAddress, YourContractHandler)
```

if you are using cypress, use `this.metamocks.registerMockContract` or `cy.registerMockContract`

## example usage

visit [tests](https://github.com/alimahdiyar/metamocks/blob/master/tests/metamocks.test.ts)
and [this repository](https://github.com/Song-Dust/interface/tree/master/cypress) to see an example usage
