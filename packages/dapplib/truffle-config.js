require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind million good process tail giant'; 
let testAccounts = [
"0x120f8510553a50463309cb0f277165f4a8914660382ba7f8d0e4512f55c8c306",
"0xa6f64149d441e35e1e4b5a7c50db6c459cb1b1df9db8abd5d37255168b6f43d7",
"0x73143bce7825308f6c243d2d5f587b0fc26cba8ebb9363e1acc30abcc421cb47",
"0xe0c5910d4d0cd1382b3694bc0c2c3289930cfc6eb3cdb694ef5e51ac33f4e7c8",
"0xaec9392284223fcb406324bd12feaf9cfa75d9df9bcc408cb7c06129524a6fdf",
"0xfc15891ad9672c37e4a470e2b98fc32276b3dfab97cd109da9e330f05b153371",
"0xb9d522e5b05c665d31c2dc219d1808adb16d93c6e82be63fa8a73f433ff345f1",
"0xf7065e2d5e40a896232f477d93f1c7d3b5dd541eaf165f5dbcb58c156b007bca",
"0x2f126b999eab42801174aaea13b8bc32b80d00be6df5b476f01352b2c6b37f4b",
"0xc7cb34982e001ad24bdd69525783503208b89b64bd7eb82fbbc5483b3bbd3297"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

