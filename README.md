# EPM test package

Ethereum test package with simple escrow contract inside. Use it as example of ethpm package structure.
(https://www.ethpm.com)

You can find this release here:
(https://www.ethpm.com/registry/packages/22)


# How to install ethpm package from truffle?

use ``` truffle instal <package_name> ``` or you can describe dependencies in  ```ethpm.json``` file and type ```truffle install```

For example - you can install this package as ``` git clone``` and then ```truffle install ```.

# How to publish my own package into EthPM with INFURA (without node)?

  First you need to ```npm init ``` and create your own npm package.json defenition of your project.

  Then you need to install ``` truffle-hdwallet-provider```, because truffle can't sign your transaction itself.
  You can do it by ```npm install truffle-hdwallet-provider --save ```

  Then you need to edit your ```truffle.js``` file to interact with Hd-walle mnemonic you have - type these lines in begin of file

  ```
  const HDWalletProvider = require("truffle-hdwallet-provider")
const fs = require("fs")

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
if(fs.existsSync("secrets.json")) {
  secrets = JSON.parse(fs.readFileSync("secrets.json", "utf8"))
  mnemonic = secrets.mnemonic
} else {
  console.log("No secrets.json found. If you are trying to publish EPM " +
              "this will fail. Otherwise, you can ignore this message!")
  mnemonic = ""
}
  ```
  Your secrets.json file must look like:
  ```
  {
    "mnemonic":"life cost vessel ..."
  }
  ```
Then you need to edit your  ```truffle.js``` file to interact with INFURA:

```

module.exports = {
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
      gas: "30000",
      network_id: "3"
    }

  }
};

```

and then you can finally type ```truffle publish ``` to publish your contracts to EthPM.

NOTE - parity mnemonic phrase may, and probably will fail.

# How to publish my project in the EthPM without INFURA, hd-wallet, etc?

just start your node (geth,parity, somthing else) with rpc option, unlock accounts and do ```truffle publish ```
