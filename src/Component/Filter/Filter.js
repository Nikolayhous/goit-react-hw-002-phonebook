import s from './Filter.module.css';

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

export default Filter;
