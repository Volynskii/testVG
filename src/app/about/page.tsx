const page = async () => {
    // Await the fetch call to get the response object
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    // Await the response.json() call to parse the response data
    const data = await response.json();

    // Return the data inside a div
    return <main>{JSON.stringify(data)}</main>
}

export default page;
