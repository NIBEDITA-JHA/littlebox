import {useState} from 'react'

const EditPost = ({post, onEdit, setEditable}) => {
    const [title, setTitle] = useState(post.title)
    const [summary, setSummary] = useState(post.summary)

    const handleClick = () => {
        onEdit(post._id, title, summary)
        setTitle("")
        setSummary("")
        setEditable(false)
    }

  return (
    <div>
        <h4>Edit Post</h4>
        <input value={title} onChange={e => setTitle(e.target.value)}/>
        <input value={summary} onChange={e=>setSummary(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}
 export default EditPost