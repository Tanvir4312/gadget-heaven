import { useLoaderData, useParams } from "react-router-dom";



const DetailsGadget = () => {
    const gadgets = useLoaderData()
    const { id } = useParams()

    const product = gadgets.find(gadget => gadget.product_id === parseInt(id));

    const { product_image, product_title, price, availability, description, Specification, rating } = product




    return (
        <div>
            <div className="text-center bg-[#9538E2] text-white pt-8 pb-36">
                <h2 className="text-2xl font-bold mb-4">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
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
                        <p className="py-2">Rating: <span className="ml-3">{rating}</span></p>

                        <div className="flex">
                            <div className="mb-3 flex items-center gap-2 btn btn-outline rounded-full w-40">
                                <button className="">Add To Card</button>
                                <img src="https://img.icons8.com/?size=24&id=zhda2EVBCvHY&format=png" alt="" />
                            </div>
                            <span className="px-3 rounded-full mb-3 ml-3 cursor-pointer bg-slate-200">
                                <img className="h-6 w-7 mt-2" src="https://img.icons8.com/?size=24&id=85038&format=png" alt="" />
                            </span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsGadget;