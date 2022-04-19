import Card from "../shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <h1>About This Page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nesciunt ipsa officia quo praesentium aut aliquid delectus facere reiciendis? Illo enim est sit, cum ut quas officiis provident doloremque harum?</p>
      <p>
        Version 1.0.0
      </p>

      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    
    </Card>
  )
}
export default AboutPage