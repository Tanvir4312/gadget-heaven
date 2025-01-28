
import { useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useEffect, useState } from "react";
import { getStoredToAddCard, getStoredWishlist } from "../../utilities";


const Dashboard = () => {
    const products = useLoaderData();
    const [storedCard, setStoredCard] = useState([]);
    const [storedWishlists, setStoredWishlists] = useState([])
    const navigate = useNavigate();
    const [modalDisabled, setModalDisabled] = useState(false)

    const [isActive, setIsActive] = useState({
        cart: true
    })

    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
      }, []);


    const prices = storedCard.map(p => p.price)
    const sum = prices.reduce((acc, num) => acc + num, 0);

    const handleCard = text => {
        if (text === 'card') {
            setIsActive({
                cart: true
            })
        }
        else {
            setIsActive({
                cart: false
            })
        }
    }

    useEffect(() => {
        const cardArrIdStr = getStoredToAddCard()
        const cardIdInt = cardArrIdStr.map(id => parseInt(id))

        const productCard = products.filter(product => cardIdInt.includes(product.product_id))
        setStoredCard(productCard);

    }, [products])


    useEffect(() => {
        const storedWishlistArr = getStoredWishlist();
        const storedWishlistInt = storedWishlistArr.map(id => parseInt(id));

        const wishlists = products.filter(product => storedWishlistInt.includes(product.product_id))
        setStoredWishlists(wishlists)
    }, [products])


    const handleSortPrice = text => {
        if (text === 'sort') {
            const sortByPrice = [...storedCard].sort((a, b) => b.price - a.price)
            setStoredCard(sortByPrice)
        }
    }

    const handleShowModal = () => {
        document.getElementById('my_modal_1').showModal()
        setModalDisabled(true)
    }

    const handleModalClose = () => {

        setStoredCard([]);
        setStoredWishlists([])
        navigate('/');
        localStorage.clear()
    }

    return (
        <div>
            {/* Modal Start */}
            <button className="btn hidden" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center">
                    <div className="flex justify-center mb-3">
                        <img src="https://img.icons8.com/?size=80&id=1VEgTLI35oSW&format=png" alt="" />
                    </div>
                    <h3 className="font-bold text-xl">Payment Successfully</h3>
                    <div className="md:mx-28 mt-2 opacity-30">
                        <hr />
                    </div>
                    <p className="py-4 font-bold">Thanks for purchasing</p>
                    <p className="font-bold">Total: {sum.toFixed(2)}</p>
                    <div className="modal-action">
                        <form className="w-full" method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleModalClose} className="btn w-[220px]">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* Modal End */}

            <div className="text-center bg-[#9538E2] text-white pt-8 pb-36 p-5">

                <Heading
                    title={'Product Details'}
                    subTitle={`Explore the latest gadgets that will take your experience 
                            to the next level. From smart devices to the coolest accessories, we have it all!`}
                ></Heading>

                <div className="mt-5">
                    <button onClick={() => handleCard('card')} className={`btn btn-outline border border-white rounded-full text-white mr-3 ${isActive.cart ? 'bg-white/40' : ''}`}>Card</button>
                    <button onClick={() => handleCard('wishlist')} className={`px-7 btn btn-outline border border-white rounded-full text-white ${!isActive.cart ? 'bg-white/40' : ''}`}>Wishlist</button>
                </div>
            </div>

            <div>
                {
                    isActive.cart ?
                        <>
                            <div className="md:flex justify-between items-center md:pr-32 pr-10 pt-10">
                                <p className="md:text-xl md:font-medium md:pl-32 pl-10 md:pt-0 text-2xl font-bold text-center pb-4 md:pb-0">Cart</p>
                                <div className="flex items-center justify-center md:gap-6 gap-2">
                                    <p className="text-2xl font-bold hidden lg:block">Total Cost: {sum.toFixed(2)}</p>
                                    <div className="flex btn btn-outline border border-[#9538E2] rounded-full md:w-[180px]">
                                        <button className="cursor-pointer" onClick={() => handleSortPrice('sort')}>Sort by Price</button>
                                        <img src="https://img.icons8.com/?size=32&id=14338&format=png" alt="" />
                                    </div>
                                    <div>
                                        <button disabled={modalDisabled} className="btn btn-outline border border-[#9538E2] rounded-full" onClick={handleShowModal}>Purchase</button>
                                    </div>
                                </div>
                            </div>
                            <p className="text-2xl font-bold lg:hidden text-center mt-4">Total Cost: {sum.toFixed(2)}</p>
                        </>
                        :
                        <p className="text-xl font-medium  md:pl-32 pl-10 pt-10">Wishlist</p>
                }
            </div>

            {
                isActive.cart ?
                    storedCard.map(card =>
                        <div className=" md:flex gap-7 p-5 border border-base-300 md:mx-32 mx-10 mb-6 mt-6 rounded-lg" key={card.product_id}>
                            <div>
                                <img className="rounded-lg w-[200px] mx-auto mb-7 md:mb-0" src={card.product_image} alt="" />
                            </div>
                            <div>
                                <h4 className="text-xl font-medium">{card.product_title}</h4>
                                <p className="py-3"><small>{card.description}</small></p>
                                <p className="font-medium">Price: ${card.price}</p>
                            </div>
                        </div>)
                    :
                    storedWishlists.map(wishProduct => <div className="md:flex gap-7 p-5 border border-base-300 md:mx-32 mx-10 mb-6 mt-6 rounded-lg" key={wishProduct.product_id}><div>
                        <img className="rounded-lg w-[200px] mx-auto mb-7 md:mb-0" src={wishProduct.product_image} alt="" />
                    </div>
                        <div>
                            <h4 className="text-xl font-medium">{wishProduct.product_title}</h4>
                            <p className="py-3"><small>{wishProduct.description}</small></p>
                            <p className="font-medium">Price: ${wishProduct.price}</p>
                        </div></div>)
            }
        </div>
    );
};

export default Dashboard;