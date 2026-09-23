import { TbMathGreater } from "react-icons/tb"
import { Link } from "react-router"


function ProDetail() {


    return (

        <>
            <div className="bg-gray-400">
                <div className="bg-gray-200 max-w-5xl mx-auto flex items-center gap-x-3">

                    <Link to="/"> Home </Link>
                    <TbMathGreater />
                    <Link to="/product"> Product </Link>
                    <TbMathGreater />
                    <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>

                </div>

                <div className="bg-red-400 h-screen max-w-5xl mx-auto flex mt-10">

                    <div className="bg-blue-400 w-[50%] h-150">
                        <div className="w-full h-full">
                            <img
                                className="w-full h-full py-10 px-20"
                                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-green-400 w-[50%] h-150">
                        <div className="ml-5">
                            <h4 className="text-lg uppercase">men's clothingMen</h4>
                            <h1 className="text-3xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                            <h3 className="text-2xl font-bold text-red-500">109.95$</h3>
                            <div className="my-5 flex gap-x-5">
                                <div className="border w-30 text-center flex justify-between p-2">
                                    <button> - </button>
                                    <span> 1 </span>
                                    <button> + </button>
                                </div>
                                <button className="bg-gray-400 text-white px-4 rounded">Add to cart</button>
                            </div>
                            <hr />
                            <p className="my-5 text-gray-500">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )

}

export default ProDetail