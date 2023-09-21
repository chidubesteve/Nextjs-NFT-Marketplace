import "../styles/globals.css";
import styles from  '../styles/Home.Module.css'; // Import your global CSS file here
import Header from "../../components/Header";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import {NotificationProvider} from "web3uikit"
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUB_GRAPH_QUERY_URL
})
export default function App({ Component, pageProps }) {
  return (
<div>
      <Head>
        <title>Home - PhoenixCollectibles</title>
        <meta name="description" content="view all available NFT listings" />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
      <NotificationProvider>
        <Header />
        <Component {...pageProps} />
        </NotificationProvider>
        </ApolloProvider>
      </MoralisProvider>
    </div>
  );
}
