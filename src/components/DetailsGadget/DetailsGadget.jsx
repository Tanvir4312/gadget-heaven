import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Heading from "../Heading/Heading";
import { addToAddCard, addToWishlist } from "../../utilities";



const DetailsGadget = () => {
    const gadgets = useLoaderData()
    const { id } = useParams()

    const product = gadgets.find(gadget => gadget.product_id === parseInt(id));

    const { product_id, product_image, product_title, price, availability, description, Specification, rating } = product

    const handleAddToCard = id => {
        addToAddCard(id)
    }

    const handleWishlistCard = id =>{
        addToWishlist(id)
    }


    return (
        <div>
            <div className="text-center bg-[#9538E2] text-white pt-8 pb-36 px-5">

                <Heading
                    title={'Product Details'}
                    subTitle={`Explore the latest gadgets that will take your experience 
                to the next level. From smart devices to the coolest accessories, we have it all!`}
                ></Heading>

            </div>
            <div className="relative bg-base-200 lg:w-[900px] lg:bottom-28 md:w-[600px] md:bottom-28 w-[270px] bottom-28 mx-auto  rounded-2xl">
                <div className="md:flex gap-7">
                    <div className="md:w-[50%]">
                        <img className="w-full h-full p-5 rounded-4xl" src={product_image} alt="" />
                    </div>
                    <div className="md:w-[50%] pt-5 pl-5 md:pl-0">
                        <h4 className="text-xl font-semibold">{product_title}</h4>
                        <p className="font-semibold py-2">Price: ${price}</p>
                        {availability ? <span className="border border-[#9538E2] bg-[#9538E2]/20 px-2 py-1 rounded-full">In Stock</span> : ''}
                        <p className="pt-2"><small>{description}</small></p>
                        <p className="font-medium">Specification:</p>
                        {
                            Specification.map((statement, idx) => <li key={idx}><small>{statement}</small></li>)
                        }
                        <p className="py-2">Rating:</p>
                        <div className="flex gap-5">

                            <div>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                />,
                            </div>
                            <div className="mt-2">{rating}</div>
                        </div>


                        <div className="flex">

                            <div className="mb-3 flex items-center gap-2 btn btn-outline rounded-full w-40">
                                <button onClick={() => handleAddToCard(product_id)} className="cursor-pointer">Add To Card</button>
                                <img src="https://img.icons8.com/?size=24&id=zhda2EVBCvHY&format=png" alt="" />
                            </div>

                            <button onClick={()=> handleWishlistCard(product_id)} className="btn px-3 rounded-full mb-3 ml-3 cursor-pointer bg-slate-200">
                                <img className="h-6 w-7 mt-2" src="https://img.icons8.com/?size=24&id=85038&format=png" alt="" />
                            </button>
                        </div>






                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsGadget;