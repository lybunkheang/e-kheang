import { Link } from "react-router"
import axios from 'axios'
import { useEffect, useState } from "react"
function Home() {

  const url = 'https://fakestoreapi.com/products?limit=8'
  const [products ,setProducts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get(url);
      // console.log(response)
      // console.log(response.data)
      setProducts(response.data)
    }

    //todo: call function
    fetchData();

  }, [])

  return (

    <>
      <div className="max-w-full h-screen max-h-320  bg-[#f6e6cf] mx-auto">
        <div className=" w-full h-full flex justify-center items-center">

          <div className=" text-center flex flex-col gap-3">
            <h3 className="text-2xl font-bold">New Collection</h3>
            <h1 className="text-4xl font-bold">Luxary without Labels</h1>
            <p className="">Explore new-in product and best sellers</p>
            <Link
              className="bg-black text-white w-44 py-2.5 mx-auto rounded-md"
              to='/product'
            >
              View Collection
            </Link>
          </div>

        </div>
      </div>

      {/*//todo: Product */}
      <div className="pt-15">

        <h2 className="text-center text-3xl font-medium">Best Sellers</h2>
        <p className="text-center text-lg mt-4 mb-5">Explore our best seller products</p>

        <div className=" max-w-7xl mx-auto px-10 flex justify-around flex-wrap gap-y-10">

          {/*//todo: item */}
          {products.map((pro, index)=> ( 

          <div 
          key={index}
          className="item">
            <Link to="/pro-detail">
            <div className=" h-78">

              <img
                className="w-full h-full transition-all hover:scale-105 "
                src={pro.image} alt="" />
            </div>
            <div className="mt-2">
              <p className="line-clamp-1">{pro.title}</p>
              <p className="text-red-500 font-bold">$ {pro.price}</p>
            </div>
          </Link>

          </div>
          ))}

        </div>

        <div className=" text-center m-10">
          <Link 
            className="border px-6 py-3 rounded transition-all duration-200 hover:bg-black hover:text-white"
            to='/product'>
            Explore more
          </Link>
        </div>

      </div>



    </>

  )
}

export default Home