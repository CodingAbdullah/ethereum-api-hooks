import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Volume Hook
export const useFetchERC721CollectionVolume = async (serverURL: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-volume
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}