# NextJS NFT Marketplace with TheGraph


## 1. Git clone the contracts repo

In it's own terminal / command line, run: 

```
git clone https://github.com/chidubesteve/Nextjs-NFT-Marketplace
cd Nextjs-NFT-Marketplace
npm i
```

## 2. Deploy to sepolia 

After installing dependencies, deploy your contracts to sepolia:

```
npx hardhat deploy --network sepolia
```

## 3. Deploy your subgraph

```
cd ..
git clone https://github.com/chidubesteve/Nextjs-NFT-Marketplace
cd graph-nft-marketplace-fcc
npm i
```

Follow the instructions of the [README](https://github.com/chidubesteve/nft-marketpace-subgraph/blob/main/README.md) of that repo. 
- You can check the repo of the [smart contracts](https://github.com/chidubesteve/Hardhat-NFT-Marketplace)code

Then, make a `.env` file and place your temporary query URL into it as `NEXT_PUBLIC_SUBGRAPH_URL`.


## 4. Start your UI

Make sure that:
- In your `networkMapping.json` you have an entry for `NftMarketplace` on the sepolia network. 
- You have a `NEXT_PUBLIC_SUBGRAPH_URL` in your `.env` file. 

```
npm run dev
```
