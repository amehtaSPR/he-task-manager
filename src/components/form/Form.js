import { TextField } from 'components/fields/TextField';
import { NumberField } from 'components/fields/NumberField';
import { SelectField } from 'components/fields/SelectField';

const TYPE_VS_COMPONENT = {
  TEXT: TextField,
  NUMBER: NumberField,
  SELECT: SelectField,
};

export const Form = ({ onSave, formConfig, profile }) => {
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            {formConfig.map(({ type, defaultValue, ...formElementProps }) => {
              const Component = TYPE_VS_COMPONENT[type];

              if (!Component) return null;

              const elementId = formElementProps.id;

              return (
                <div key={elementId} className="col-span-full">
                  <Component
                    {...formElementProps}
                    value={
                      elementId in profile ? profile[elementId] : defaultValue
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
