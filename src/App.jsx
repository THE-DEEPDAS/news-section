import { useState } from "react"
import Navbar from "./components/navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState("business");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App