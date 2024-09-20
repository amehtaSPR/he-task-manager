import { useState, useCallback } from 'react';

export const withCollapsibleInput = (Component) => (props) => {
  if (!props.toggleConfig) {
    return <Component {...props} />;
  }

  const { toggleConfig, value: _value, onChange, id, ...restProps } = props;
  const { title, initialValue } = toggleConfig;

  const [isOn, setIsOn] = useState(!!_value);
  const [value, setValue] = useState(_value);

  const handleToggle = useCallback(
    (e) => {
      if (e.target.checked) {
        setIsOn(true);

        if (value == null && initialValue) {
          setValue(initialValue);
        }

        onChange(value ?? initialValue);
      } else {
        setIsOn(false);
        onChange(undefined);
      }
    },
    [setIsOn, onChange, value, initialValue, setValue]
  );

  const handleChange = useCallback(
    (newValue) => {
      setValue(newValue);

      return onChange(newValue);
    },
    [onChange, setValue]
  );

  return (
    <div className="flex flex-col rounded-md border border-solid border-slate-300 p-3">
      <div className="flex items-center gap-3">
        <input
          id={`collapsible-input-${id}`}
          name={`collapsible-input-${id}`}
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
        />
        <label
          htmlFor={`collapsible-input-${id}`}
          className="text-sm font-semibold leading-3.5 text-slate-700"
        >
          {title}
        </label>
      </div>

      {isOn ? (
        <div className="mt-3">
          <Component
            {...restProps}
            id={id}
            value={value}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </div>
  );
};
