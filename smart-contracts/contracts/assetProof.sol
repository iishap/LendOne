// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetProof is ERC721Enumerable, Ownable {
    
    uint256 private tokenIdCounter;

    constructor() ERC721("AssetProof", "ASPF")  {
        tokenIdCounter = 1;
    }

    struct ProofData {
        address assetAddress;
        uint256 assetId;
    }

    mapping(uint256 => ProofData) public tokenIdToAsset;

    function mint(address recipient, address assetAddress, uint256 assetId) external onlyOwner {
        uint256 tokenId = tokenIdCounter;
        _mint(recipient, tokenId);
        tokenIdCounter++;

        tokenIdToAsset[tokenId] = ProofData({
            assetAddress: assetAddress,
            assetId: assetId
        });
    }
}
