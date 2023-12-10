import * as dotenv from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import { getHardhatConfigNetworks } from "@zetachain/addresses-tools/dist/networks";

dotenv.config()

const config: HardhatUserConfig = {
  mocha: {
    timeout: 3600000,
  },
  solidity: '0.8.17',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: { yul: false },
    },
  },
  compilers: [
    {
        version: '0.8.17', 
        settings: {
            evmVersion: 'london'
        }
    }
],
  networks: {
    
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    matic: {
      url: 'https://rpc.ankr.com/polygon',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    zkevm: {
      url: 'https://zkevm-rpc.com',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    zkevmtestnet: {
      url: 'https://rpc.public.zkevm-test.net',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 9000000000,
      allowUnlimitedContractSize: true,
      gas: 9000000, //units of gas you are willing to pay, aka gas limit
    },
    mantle: {
      url: "https://rpc.testnet.mantle.xyz", // 0.8.19
      chainId: 5001,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1000000000,
    },
    scrollSepolia: {
      url: `https://sepolia-rpc.scroll.io`, 
      accounts: [process.env.PRIVATE_KEY]
    },
    callibration: {
      chainId: 314159,
      url: "https://rpc.ankr.com/filecoin_testnet",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
  base_testnet: {
    url: 'https://sepolia.base.org',
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    gasPrice: 1000000000,
  },
  xinfin: {
    url: 'https://erpc.xinfin.network',
    accounts:[process.env.PRIVATE_KEY],
  },
  apothem: {
    url: 'https://rpc.apothem.network', 
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    allowUnlimitedContractSize: true,
    gas: 5000000, //units of gas you are willing to pay, aka gas limit
    gasPrice:  90000000000,
  },
  X1: {
    url: "https://testrpc.x1.tech",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
  celo: {
    url: "https://alfajores-forno.celo-testnet.org",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
  linea: {
    url: "https://linea-goerli.blockpi.network/v1/rpc/public",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
  
  zetachain: {
    url: "https://rpc.ankr.com/zetachain_evm_athens_testnet",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    gas: 5000000, //units of gas you are willing to pay, aka gas limit
    gasPrice:  80000000000,
  },
  
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYSCAN_API_KEY ?? '',
      polygon: process.env.POLYSCAN_API_KEY ?? '',
      zkevm: process.env.ZKEVM_POLYSCAN_API_KEY ?? '',
      zkevmtestnet: process.env.ZKEVM_POLYSCAN_API_KEY ?? '',
    },
    customChains: [
      {
        network: 'zkevm',
        chainId: 1101,
        urls: {
          apiURL: 'https://api-zkevm.polygonscan.com/api',
          browserURL: 'https://zkevm.polygonscan.com',
        },
      },
      {
        network: 'zkevmtestnet',
        chainId: 1442,
        urls: {
          apiURL: 'https://api-testnet-zkevm.polygonscan.com/api',
          browserURL: 'https://testnet-zkevm.polygonscan.com',
        },
      },
    ],
  },
}

export default config
