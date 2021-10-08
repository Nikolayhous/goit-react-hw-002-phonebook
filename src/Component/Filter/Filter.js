import s from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
    return (
        <div className={s.filter}>
            <label className={s.label}>
                Find contacts by name
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    value={filter}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default Filter;
