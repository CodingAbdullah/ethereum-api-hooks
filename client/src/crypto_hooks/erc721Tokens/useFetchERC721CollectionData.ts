import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Data Hook
export const useFetchERC721CollectionData = async (contractAddress: string, port: number) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch(`http://localhost:${port}/erc721-collection-data`, options);

    // Return the state from the custom hook
    return state;
}