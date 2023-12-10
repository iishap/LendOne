# LendOne - Decentralized Finance Overcollateralized Lending Protocol

LendOne represents a decentralized finance (DeFi) lending protocol operating on the principle of overcollateralization. It utilizes on-chain social profiles as collateral for borrowing assets within the blockchain ecosystem. The project leverages solutions from a consortium of sponsors including Arbitrum, Gnosis Chain, Polygon, IPFS & Filecoin, Metamask, Scroll, Push Protocol, Celo, and Mantle.

## Description

LendOne boasts an intricate system of smart analytics and an advanced social graph mechanism actively monitoring blockchain activities. This functionality generates distinct reputation scores for users, directly influencing their eligibility to borrow assets within the protocol.

## Problem Statement

Conventional undercollateralized lending protocols in the DeFi space suffer from inadequate borrower incentives for timely loan repayment. Integrating on-chain social media profiles like those from the Lens Protocol is poised to revolutionize this challenge by leveraging digital identity and reputation as potential solutions.

## How LendOne Functions

### Collateral Deposits: Leveraging Social Profiles

LendOne empowers users to deposit their Lens or ENS profiles as collateral. Beyond serving as digital identities, these profiles hold intrinsic value derived from the user's reputation within the ecosystem, directly impacting their borrowing capabilities.

### Key Functionalities

- **Uninterrupted Access:** Users retain complete access to their Lens or ENS profiles even after utilizing them as collateral.
- **Timely Repayment Notifications:** Push notifications alert users as the loan repayment deadline approaches, providing insights into their health factors and potential risks of liquidation.
- **Collateral Retrieval:** Upon successful repayment of the loan, users regain access to their initially deposited collateral.

### Consequences of Non-Repayment

Failure to repay a loan within the stipulated timeframe triggers a soft ban, imposing specific restrictions:
- **Lens:** All interactions on the platform are blocked.
- **ENS:** Funds are frozen within an escrow account, subsequently redirected to the lender.
- **Vouching Limitation:** Vouching capabilities are restricted to a maximum of two per wallet.

## Application Architecture

The architecture of LendOne encompasses crucial components:
- **Social Credit Scoring:** Utilizes blockchain activity to derive an on-chain reputation score for individual users.
- **On-Chain Reputation as Collateral:** Users deposit Lens or ENS profiles as collateral, symbolizing their value within the ecosystem.
- **Sybil Resistant Vouching System:** Implements a robust vouching system to foster trust and prevent malicious activities within the ecosystem.
