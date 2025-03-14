import React from 'react'
import {useQuery} from 'react-query'


//Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}
console.log(fetchPosts())

//Define a PostsComponent that will use the useQuery hook to fetch data from the API
const PostsComponent = () => {

    //Use the useQuery hook to fetch data from the API
    const {data, error, isLoading} = useQuery('FetchData', fetchPosts)

    //If the data is still loading, display a loading message
    //Handle loading state
    if (isLoading) {
        return <div>Loading...</div>
    }
    //If there is an error fetching the data, display an error message
    //Handle error state
    if (error) {
        return <div>Error loading data</div>
    }

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