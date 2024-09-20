export const withCollapsibleInput = (Component) => (props) => {
  const { collapsibleConfig = {}, id, ...restProps } = props;
  const { title } = collapsibleConfig;

  // Implement checkbox toggle to control visibility of the field
  const handleToggle = (e) => {};

  return (
    <div className="flex flex-col rounded-md border border-solid border-slate-300 p-3">
      <div className="flex items-center gap-3">
        <input
          id={`collapsible-input-${id}`}
          name={`collapsible-input-${id}`}
          data-testid={`collapsible-input-${id}`}
          type="checkbox"
          onChange={handleToggle}
        />
        <label
          htmlFor={`collapsible-input-${id}`}
          className="text-sm font-semibold leading-3.5 text-slate-700"
        >
          {title}
        </label>
      </div>

      <div className="mt-3">
        <Component {...restProps} id={id} />
      </div>
    </div>
  );
};
