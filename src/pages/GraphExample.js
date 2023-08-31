import {useQuery, gql} from "@apollo/client"


  const GET_ACTIVE_ITEMS =  gql`
    {
  activeItems(first: 5) {
    id
    buyer
    seller
    nftAddress
    tokenId
    price
  }
}`
export default function GraphExample() {
    const {loading, error, data} = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return<div  className="container mx-auto flex min-h-screen flex-col items-center justify-between p-24">Hi!</div>
}