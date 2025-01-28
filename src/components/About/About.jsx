import { useEffect } from "react";
import Heading from "../Heading/Heading";


const About = () => {

    useEffect(() => {
            document.title = "About | Gadget Heaven";
          }, []);

    return (
        <div>
            <div className="text-center bg-[#9538E2] text-white pt-16 pb-36 p-5">

                <Heading
                    title={'About our mission and vision'}
                    subTitle={`Explore the latest gadgets that will take your experience 
                                        to the next level. From smart devices to the coolest accessories, we have it all!`}
                ></Heading>

            </div>
            <div className="md:flex gap-8 mt-10 mx-10">
                <div className="border border-[#9538E2] bg-[#9538E2]/20 rounded mb-7 md:mb-0">
                    <h1 className="text-5xl font-bold text-center py-6">Mission</h1>
                    <p className="text-center opacity-70 lg:px-28 px-7 pb-6">To provide gadget enthusiasts with the latest, high-quality tech products at competitive prices, while ensuring a seamless and delightful shopping experience through innovation and customer-centric solutions</p>
                </div>
                <div className="border border-[#9538E2] bg-[#9538E2]/20 rounded">
                    <h1 className="text-5xl font-bold text-center py-6">Vision</h1>
                    <p className="text-center opacity-70 lg:px-28 px-7 pb-6">To become the ultimate destination for technology lovers, empowering individuals with cutting-edge gadgets and fostering a community that celebrates technological advancement and creativity.</p>
                </div>
            </div>
        </div>
    );
};

export default About;