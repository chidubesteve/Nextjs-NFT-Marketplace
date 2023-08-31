import { useMoralis } from "react-moralis";
import NFTBox from "../../components/NFTBox.js";
import networkMapping from "../../constants/networkMapping.json";
import {useQuery} from "@apollo/client"
import GET_ACTIVE_ITEMS from "../../constants/subgraphQueries.js";

export default function Home() {
  const { chainId, isWeb3Enabled } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : null;
  const marketplaceAddress = chainId
    ? networkMapping[chainString].NftMarketplace[0] : null;
  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);
  return (
    <>
      <main
        className="container mx-auto flex min-h-screen flex-col items-center justify-between p-24"
      >
        <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
        <div className="flex flex-wrap">
          {isWeb3Enabled && chainId ? (
            loading || !listedNfts ? (
              <div>Loading...</div>
            ) : (
              listedNfts.activeItems.map((nft) => {
                console.log(listedNfts)
                console.log(nft);
                const { price, nftAddress, tokenId, seller } = nft;
                return marketplaceAddress ? (
                  <NFTBox
                    price={price}
                    nftAddress={nftAddress}
                    tokenId={tokenId}
                    marketplaceAddress={marketplaceAddress}
                    seller={seller}
                    key={`${nftAddress}${tokenId}`}
                  />
                ) : (
                  <div>
                    Network error, please switch to a supported network.
                  </div>
                );
              })
            )
          ) : (
            <div>Web3 Currently Not Enabled</div>
          )}
        </div>
      </main>
    </>
  );
}
