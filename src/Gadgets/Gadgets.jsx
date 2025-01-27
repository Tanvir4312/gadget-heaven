import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";


// eslint-disable-next-line react/prop-types
const Gadgets = () => {

    const { gadgetsName } = useParams();
    const products = useLoaderData();
    const [gadgets, setGadgets] = useState([])


    useEffect(() => {
        if (gadgetsName) {
            const filterGadget = [...products].filter(product => product.category === gadgetsName)
            setGadgets(filterGadget);
        }

        else {
            setGadgets(products)
        }

        if (gadgetsName === 'All Gadgets') {
            setGadgets(products)
        }





    }, [gadgetsName, products])
    return (
        <div className="lg:col-span-4 md:col-span-3 grid lg:grid-cols-3 gap-5 md:grid-cols-2">
            {
                gadgets.map((gadget, idx) => <Gadget

                    gadget={gadget}
                    key={idx}
                ></Gadget>)

            }

        </div>
    );
};

export default Gadgets;