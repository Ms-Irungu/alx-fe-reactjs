import React from 'react'
import { useQuery } from '@tanstack/react-query';

//Define a PostsComponent that will use the useQuery hook to fetch data from the API
const PostsComponent = () => {

    //Use the useQuery hook to fetch data from the API
    const { data, isError, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json()),
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
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default PostsComponent;