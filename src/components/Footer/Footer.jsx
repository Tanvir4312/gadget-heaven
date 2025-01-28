import Heading from "../Heading/Heading";



const Footer = () => {
    return (
        <div className="bg-base-200 text-base-content mt-10 pt-10">
            <div className="">
                <div className="text-center">
                    <Heading
                        title={'Gadget Heaven'}
                        subTitle={'Leading the way in cutting-edge technology and innovation.'}
                    ></Heading>
                </div>
                <div className="opacity-25 mt-7 lg:w-[900px] mx-auto md:w-[700px]">
                    <hr />
                </div>
                <footer className="footer sm:footer-horizontal p-10 lg:w-[800px] mx-auto md:w-[600px]">

                    <nav>
                        <h6 className="text-lg font-semibold">Services</h6>
                        <a className="link link-hover opacity-75">Product Support</a>
                        <a className="link link-hover opacity-75">Order Tracking</a>
                        <a className="link link-hover opacity-75">Shipping & Delivery</a>
                        <a className="link link-hover opacity-75">Returns</a>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-semibold">Company</h6>
                        <a className="link link-hover opacity-75">About us</a>
                        <a className="link link-hover opacity-75">Contact</a>
                        <a className="link link-hover opacity-75">Careers</a>

                    </nav>
                    <nav>
                        <h6 className="text-lg font-semibold">Legal</h6>
                        <a className="link link-hover opacity-75">Terms of use</a>
                        <a className="link link-hover opacity-75">Privacy policy</a>
                        <a className="link link-hover opacity-75">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;