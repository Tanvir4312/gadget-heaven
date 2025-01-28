import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";
import { useEffect } from "react";




const Home = () => {
    const categories = useLoaderData()

    useEffect(() => {
        document.title = "Home | Gadget Heaven";
    }, []);

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-center -mt-14 pb-8">Explore Cutting-Edge Gadgets</h1>
                <div>

                </div>
                <div className="px-4 grid lg:grid-cols-5 gap-6 md:grid-cols-4">
                    <div className="col-span-1">
                        <CategoriesSidebar categories={categories}></CategoriesSidebar>
                    </div>

                    <div className="lg:col-span-4 md:col-span-3 grid lg:grid-cols-3 gap-5 md:grid-cols-2">
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;