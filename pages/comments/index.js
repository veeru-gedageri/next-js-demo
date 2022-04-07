import { useState } from 'react'

function CommentsPage(){

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const response = await fetch('http://localhost:3000/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('http://localhost:3000/api/comments',
        {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {'Content-Type': 'application/json'}
        }
        )
        const data = await response.json()
    }

    return <>
    <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
    <button onClick={submitComment}>Submit Comment</button>

    <button onClick={fetchComments}>Fetch Comments</button>
    {
        comments.map((comment) => {
            return<h2>{comment.id} {comment.text}</h2>
        })
    }
    </>
}

export default CommentsPage