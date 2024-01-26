import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Counter from "./counter/Counter";

const Home = () => {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  
  `
const goToProduct = useNavigate();

  return (
    <div>
      <Counter/>
      <Title className=''>Home page</Title>
      <button onClick={()=>{goToProduct('/product')}}>go to product page</button>
    </div>
  )
}

export default Home
