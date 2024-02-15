import { useState } from "react";
import { isEmpty } from "lodash";
import Categories from "./components/categories/categories.component";

const App = () => {

  const [categories,setCategories] = useState<Category[]>([
      {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
      }
  ])

    return(
      <div className="App">
        {
          isEmpty(categories)?
            <div>No categories found!</div>
          : 
            <Categories categories={categories}/>
        }
      </div>
)}

export default App;
