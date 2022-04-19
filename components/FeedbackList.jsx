import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0) {
    return 'No Feedback Yet'
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FeedbackList