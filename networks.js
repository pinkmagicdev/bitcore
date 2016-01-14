var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('70352205'),
  addressVersion: 0x3f,
  privKeyVersion: 153,
  P2SHVersion: 125,
  hkeyPublicVersion: 0x02cfbede,
  hkeyPrivateVersion: 0x02cfbf60,
  genesisBlock: {
    hash: hex('000005A3B4890B53D3ECEF70FFD1DB15F3D4C57EE211712396D06167AE75384E'),
    merkle_root: hex('AA74E9CCBB2F003DA48576A5C4499427347211C409C256758649EDDEE2BA1AB9'),
    height: 0,
    nonce: 2533105,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1449624234,
    bits: 504365055,
  },
  dnsSeeds: [
    '',
	'',
	'',
	'',
	'',
	''
  ],
  defaultClientPort: 1337
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
