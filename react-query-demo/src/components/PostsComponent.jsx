import React from 'react'
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
}

//Define a PostsComponent that will use the useQuery hook to fetch data from the API
const PostsComponent = () => {

    //Use the useQuery hook to fetch data from the API
    const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts, //The function that will be used to fetch the data
        staleTime: 20000, //The time in milliseconds after which the data will be considered stale
        cacheTime: 40000, //The time in milliseconds after which the data will be removed from the cache
        refetchInterval: false, // Disable automatic refetching at an interval
        refetchIntervalInBackground: false, // Disable automatic refetching in the background
        refetchOnWindowFocus: false, // Prevent automatic refetching when switching tabs
        keepPreviousData: true, // Keeps old data while fetching new data
    });

    //If the data is still loading, display a loading message
    //Handle loading state
    if (isLoading) return <div>Loading...</div>

    //If there is an error fetching the data, display an error message
    //Handle error state
    if (isError) return <div>Error loading data</div>

    //If the data has been fetched successfully, display the data
    //Handle success state
    //Render the fetched data
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => refetch()}>Refetch Data</button>
            <br />
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default PostsComponent;