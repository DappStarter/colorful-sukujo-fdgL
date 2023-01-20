require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind huge hidden prize orange gift'; 
let testAccounts = [
"0x211468a08dd0459c23f3b8017b34a88897454f7dbf905194c87d946eb0876ce2",
"0x6a84a10f2ea4f7913297be7ff435046ad16e4d9419e28679358f3d508d8650c8",
"0xecb1bada5b3e41559a870415d6d3d7333cd69fbeb96533480ccae4513188025d",
"0x585a26b85eb9b0540e07841c6c76593645757836a72155fc6f924d8d4072b59a",
"0x94145cbde99c9c2ee22b8763b06e9b5446aee6b860af03a68d7094a519d630d6",
"0x22a7511e0cdafa6a59fe98830b491c29ca24e2145d6be2379b2775c22fb92cc3",
"0x3d7b729eb0bc2278ffe9741d656b28dcb5aa536597a9b46d99f6865851e33c4b",
"0x62b8a7321891c7e56eb01ef3ec2175621c56c3d0b71292765b34f227427b6fbb",
"0x85658b519888158bac6432568537f3eef8a2f0238791d5955578e720c69c1e08",
"0x520e4b225c9ddd64ebb10ada6d2ed906d343ccaf94bdb5ee63c63c950e3f3f9e"
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

