import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';





const CategoriesSidebar = ({ categories }) => {

    //    console.log(categories);
    return (
        <div className=" bg-base-100 shadow p-3 rounded border border-base-200">

            {
                categories.map(category => <NavLink
                    to={`/gadgets/${category.category}`}
                    key={category.id}
                    className={({ isActive }) => `btn mb-3 w-full rounded-full ${isActive ? 'bg-blue-500 text-white' : ''}`}
                >
                    <button>{category.category}</button>
                </NavLink>)
            }

        </div>
    );
};

CategoriesSidebar.propTypes = {
    categories: PropTypes.array.isRequired,

}

export default CategoriesSidebar;