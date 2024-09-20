export const FORM_CONFIG = [
  {
    id: 'firstName',
    type: 'TEXT',
    label: 'First Name',
    placeholder: 'Enter first name',
    defaultValue: 'Jane',
  },
  {
    id: 'lastName',
    type: 'TEXT',
    label: 'Last Name',
    placeholder: 'Enter last name',
    defaultValue: 'Doe',
  },
  {
    id: 'about',
    type: 'TEXT',
    label: 'About',
    placeholder: 'Write a few sentences about yourself',
  },
  {
    id: 'emailAddress',
    type: 'TEXT',
    label: 'Email Address',
    placeholder: 'jane-doe@example.com',
  },
  {
    id: 'age',
    type: 'NUMBER',
    label: 'Age',
    defaultValue: 45,
  },
  {
    id: 'country',
    type: 'SELECT',
    label: 'Country',
    dropdownOptions: [
      {
        value: 'india',
        label: 'India',
      },
      {
        value: 'usa',
        label: 'USA',
      },
      {
        value: 'china',
        label: 'China',
      },
      {
        value: 'japan',
        label: 'Japan',
      },
    ],
    defaultValue: 'india',
  },
];
