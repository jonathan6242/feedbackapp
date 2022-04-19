import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const {addFeedback, feedbackEdit, setFeedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)

    }
  }, [feedbackEdit])

  const handleTextChange = ({ target: {value}}) => {
    if(value === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if(value.length < 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage('')
    }

    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.length >= 10) {
      const newFeedback = {
        text,
        rating
      }
      if(feedbackEdit.edit === false) {
        addFeedback(newFeedback)
      } else {
        updateFeedback({...feedbackEdit.item, ...newFeedback})
        setBtnDisabled(true)
        setRating(10)
        setFeedbackEdit({
          item: {rating: 10},
          edit: false
        })
      }
     
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our product or service?</h2>
        <RatingSelect select={(rating) => {setRating(rating)}}/>
        <div className="input-group">
          <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}
export default FeedbackForm