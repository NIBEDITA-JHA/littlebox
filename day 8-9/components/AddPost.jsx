import {useState} from 'react'

const AddPost = ({onAdd}) => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")

    const handleClick = () => {
        onAdd(title, summary)
        setTitle("")
        setSummary("")
    }

  return (
    <div>
        <h4>Add New Post</h4>
        <input placeholder="enter title" value={title} onChange={e => setTitle(e.target.value)}/>
        <input placeholder="enter summary" value={summary} onChange={e=>setSummary(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default AddPost