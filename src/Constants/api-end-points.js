/**
 * The URL is pointing to an API endpoint which is used to generate a token for the application.
 * 
 * @params
 * This method does not take any parameters.
 * @returns
 * the URL of an API endpoint to generate a token.
 */
export const GENERATE_TOKEN = () => {
    return `https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken`;
}

/**
 * It is likely that this endpoint is used to fetch posts from a backend API.
 * 
 * @returns 
 * the URL of an API which is used to fetch posts.
 */
export const GET_CONTENT = () => {
    return `https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent`;
}
