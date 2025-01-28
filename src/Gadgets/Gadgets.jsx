import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";



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
        if (gadgetsName === 'Accessories') {
            setGadgets([])
        }
    }, [gadgetsName, products])
   
    return (
        <div className="lg:col-span-4 md:col-span-3 grid lg:grid-cols-3 gap-5 md:grid-cols-2">
            {
                gadgets.length > 0 ?
                    gadgets.map((gadget, idx) => <Gadget

                        gadget={gadget}
                        key={idx}
                    ></Gadget>) : <Gadget>
                        
                        <h1 className="text-4xl text-red-500 font-bold">Oops!!!</h1>
                        <h3 className="text-3xl font-bold pt-5">No Data Found</h3>
                        
                    </Gadget>

            }

        </div>
    );
};

export default Gadgets;