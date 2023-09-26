export const registerFetch = async (url, options = {}) => {
    try {
        const combinedOptions = {
            header: {
                'Content-Type': 'application/json',
            },
            ...options
        };
        const response = await fetch(url, options);
        console.log(response);
        const json = await response.json();
        return json();
 
    } catch (error) {
    }
}