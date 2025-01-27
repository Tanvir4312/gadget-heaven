import PropTypes from 'prop-types';

const Category = ({ category }) => {
    console.log(category);
    const {product_image, product_title, price} = category;
    return (
        <div className="card bg-base-100 shadow-sm p-4">
            <figure>
                <img
                    className="h-[200px] object-cover mb-5"
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="space-y-3">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};


Category.propTypes = {
    category: PropTypes.object.isRequired
}
export default Category;