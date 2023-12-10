# ClimateCoin

This is a Climate-focused project designed to rewards citizens with climate coin with carbon credits for climate change mitigation efforts. The goal is reduce the friction in Digital Monitorting, Review and Verification (D-MRV) by adding a registry for carbon credits and enabling on-chain rewards. This project seeks to demonstrate how D-MRV systems can be used to underpin future carbon markets under the goals
of the Paris Agreement by utilizing the smart contracts and reducing barriers to adoption. 

The use of blockchain technology to create immutable and auditable data and transfer records, including the creation of mitigation outcomes in digital form underpinned by smart contracts, is another important component of end-to-end digitalization of carbon markets that the industry requires.

To achieve this, the project contains a simple smart contract that achieves the following fuctions.

## Monitoring
A new farmer is registered by an administrator first. The administrator needs to indicate the total acerage of the farmer.

The farmer can then add a claim for consideration.

## Review & Verification

An admin can then verify pending submissions.

## Rewards
When an admin verifies a submission, ClimateCoin can then be allocated to participating farmers.


## Getting Started

Clone the repo and install dependencies

```shell
npm i
```

Create a .env file

```shell
cp .env-example .env;
```

Update .env to set your PRIVATE_KEY, ETHERSCAN_API_KEY, and POLYSCAN_API_KEY for Mumbai or ZKEVM_POLYSCAN_API_KEY for Polygon zkEVM environment variables.


Try running some of the following tasks to compile and create contract.

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts --network zkevmtestnent
```

My climatecoin contract
Polygon zkEVM: https://testnet-zkevm.polygonscan.com/address/0x2CCdB646497A5432D82b68BC9b107DE0aC9c6770
Mumbai: https://mumbai.polygonscan.com/address/0xb99460c473f65F8d84297A2Fa3262003283A5100


Update the command to use your contract address, then verify your contract

```shell
npx hardhat verify --network zkevmtestnet <your-contract-address> 1000
```

The result is your verified source code. Here's mine:

Polygon zkEVM Testnet: https://testnet-zkevm.polygonscan.com/address/0x2CCdB646497A5432D82b68BC9b107DE0aC9c6770#code
Mumbai:https://mumbai.polygonscan.com/address/0xb99460c473f65F8d84297A2Fa3262003283A5100#code


**Base Testnet**
````
LoanContract : 0x8D36089AB6eFdB3FEb2D8Ed42F7eC80f3c6d2b11
Asset. : 0xe078fe7A93017F8e18c1C52E79632d0B94c56c26
````

**Mantle Testnet**
````
LoanContract: 0x9eeC18cdE5eA704bc7DE582d08d52CD98A20EB30
AssetProof: 0xc17F2e12b888F808045Ed32E397317e8F426667b
````

**Polygon ZkEvm Testnet:**
````
AssetProof: 0x3672F4eb94d6f674D11b9D24321eaD0Bb0B490Ab
LoanContract: 0xD547726541FB37dB19fDB263f4855bA969034071
````

**Arbitrum Sepolia Testnet:**
````
LoanContract : 0xEbb3113e97eeaA16Dcc2FebD6a1617AB731066AE
AssetProof : 0x42Fc1d53EcF8B4c46989da0d44f07490668338c8
````

**Scroll Testnet**
````
scroll asset: 0x2B3D6338DaA99FA243aD91eC9EC4EB8a3D1462ab
Loan Contract : 0xC310585aD34ddEF51009A9C92f38E8bA8A5d2375
````

**Celo**
````
Asset: 0xe078fe7A93017F8e18c1C52E79632d0B94c56c26
Loan Contract : 0x8D36089AB6eFdB3FEb2D8Ed42F7eC80f3c6d2b11
````

**Linea testnet**
````
LoanContract : 
AssetProof : 0x3672f4eb94d6f674d11b9d24321ead0bb0b490ab
````

**Filecoin Callibration**
````
scroll asset: 0xDB642B0e682D880fF48A425526D3d17829C88514
Loan Contract : 0x8B2d30985a06Cf235AB06EfC779677EeF478bCd9
````

**OKX**
````
Asset: 
Loan Contract : 
````

**XDC Apothem**
````
LoanContract : xdc29dd278ad57014161b6b4041cd953fd7cd55f025 
AssetProof : 0x6D705842c9BA4Ce5092443302b874b67B699b429
````

**ZetaChain**
````
LoanContract : 
AssetProof : 
````