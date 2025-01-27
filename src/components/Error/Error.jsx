import { useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    

   
    return (
        <div>
            <h1 className="md:text-6xl text-3xl font-bold text-center mt-36">Oops!!!</h1>
            <p className="text-2xl font-semibold mt-10 text-center">Status: {error.status}</p>

            <p className="text-center mt-7">Go to <a onClick={() => navigate('/about')} href=""><span className="ml-2 text-blue-600 underline">About</span></a></p>
        </div>
    );
};

export default Error;