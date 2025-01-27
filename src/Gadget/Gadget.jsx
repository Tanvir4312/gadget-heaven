import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const {product_id ,product_image, product_title, price } = gadget;
    return (
        <div className="card bg-base-100 shadow-sm p-4">
         
                    <figure>
                        <img
                            className="h-[200px] object-cover mb-5 rounded-b-lg"
                            src={product_image}
                            alt={product_title} />
                    </figure>
                    <div className="space-y-3">
                        <h2 className="card-title">{product_title}</h2>
                        <p>Price: ${price}</p>
                        <div className="card-actions">
                            <Link to={`/detailGadget/${product_id}`}><button className="btn btn-outline border border-blue-500 hover:bg-blue-500 rounded-full">View Details</button></Link>
                        </div>
                    </div>
                
            

        </div>
    );
};

Gadget.propTypes = {
    gadget: PropTypes.object.isRequired
}

export default Gadget;