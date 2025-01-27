import PropTypes from 'prop-types';

const Heading = ({title, subTitle}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>

            <p className="lg:w-[800px] mx-auto">{subTitle}</p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default Heading;