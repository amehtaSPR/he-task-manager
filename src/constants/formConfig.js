export const FORM_CONFIG = [
  {
    id: 'firstName',
    type: 'TEXT',
    label: 'First Name',
    placeholder: 'Enter first name',
  },
  {
    id: 'lastName',
    type: 'TEXT',
    label: 'Last Name',
    placeholder: 'Enter last name',
  },
  {
    id: 'about',
    type: 'TEXT',
    label: 'About',
    placeholder: 'Write a few sentences about yourself',
    collapsibleConfig: {
      title: 'Allow to add some information about me',
    },
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
    collapsibleConfig: {
      title: 'Allow Age Selection',
      initialValue: 45,
    },
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
    collapsibleConfig: {
      title: 'Allow Country Selection',
      initialValue: 'india',
    },
  },
];
