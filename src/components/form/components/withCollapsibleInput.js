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
    <div className="flex flex-col rounded-8 border border-solid border-slate-400 p-3">
      <div className="flex items-center justify-between gap-1">
        <input
          id={`collapsible-input-${id}`}
          name={`collapsible-input-${id}`}
          type="checkbox"
          // className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          checked={isOn}
          onChange={handleToggle}
        />
        <label
          htmlFor={`collapsible-input-${id}`}
          className="text-base leading-3.5 text-slate-700"
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
