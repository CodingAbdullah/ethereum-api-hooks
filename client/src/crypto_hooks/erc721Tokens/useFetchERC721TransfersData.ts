import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Transfer data hook
export const useFetchERC721TransfersData = async (walletAddress: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ walletAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch('http://localhost:5000/erc721-wallet-transfers', options);

    // Return the state from the custom hook
    return state;
}