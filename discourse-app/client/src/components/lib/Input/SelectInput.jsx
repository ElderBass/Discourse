import React from 'react';
import { POST_TYPE_OPTIONS } from '../../../global/consts';
import Option from './Option';

const SelectInput = (props) => {
  const {
    id,
    label,
    labelExtension = '',
    name,
    onChange,
    styles,
    value,
  } = props;

  // const [options, setOptions] = useState(POST_TYPE_OPTIONS);

  return (
    <div className={styles.inputField}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      {labelExtension.length > 0 &&
        <div className={styles.labelExtension}>
          {labelExtension}
        </div>}
        <br />
      <select
        className={styles.input}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option disabled value=''>
          Select a {label}
        </option>
        {POST_TYPE_OPTIONS.map((op) => {
          return (
            <Option
              key={op.value}
              value={op.value}
              style={styles.option}
            />
          )
        })}
      </select>
    </div>
  );
}


export default SelectInput;