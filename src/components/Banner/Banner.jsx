import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="bg-[#9538E2] mx-3 text-white text-center pt-10 rounded-b-2xl pb-32 md:pb-56 p-2">
                <h1 className="text-2xl md:text-4xl font-bold pb-6">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p><small>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</small></p>
                <button className="btn rounded-full mt-8">Shop Now</button>
            </div>


            <div style={{backgroundColor:'rgba(255, 255, 255, 0.3)'}} className='relative  w-[250px] bottom-24 md:w-[500px] md:bottom-44 lg:w-[700px] mx-auto lg:bottom-44 rounded-2xl border border-base-100'>
                <img className='rounded-2xl p-3' src={bannerImg} alt="" />
            </div>


        </div>
    );
};

export default Banner;