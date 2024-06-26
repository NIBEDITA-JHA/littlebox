import {useState} from 'react'
import EditPost from './EditPost'

 const Post = ({post, onDelete, onEdit}) => {
    const [editable, setEditable] = useState(false)
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        {editable ? <EditPost post={post} onEdit={onEdit} setEditable={setEditable}/> 
        : <button onClick={() => setEditable(true)}>EDIT</button>}
        <button onClick={() => onDelete(post._id)}>DELETE</button>
    </div>
  )
}
export default Post