import {useState, useEffect} from 'react'
import Post from './Post';
import AddPost from './AddPost';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3009')
          .then(res => res.json())
          .then(data => setPosts(data.posts));
      }, []);


      const addPost = (title, summary) => {
        const id = posts.length + 1
        fetch("http://localhost:3009", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, title, summary})
        }).then(res => res.json())
        .then(data => setPosts(data.posts))
      }

    const deletePost = (id) => {
        fetch(`http://localhost:3009/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
        .then(data => setPosts(data.posts))
    }

    const editPost = (id, title, summary) => {
        fetch(`http://localhost:3009/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, summary})
        }).then(res => res.json())
        .then(data => setPosts(data.posts))
    }

  return (
    <div>
        <AddPost onAdd={addPost}/>
        {posts.map((post,i) => <Post key={i} post={post} onDelete={deletePost} onEdit={editPost}/>)}
    </div>
  )
}
export default Posts