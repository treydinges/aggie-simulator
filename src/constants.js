export const DATA = [
  {
    id: '1',
    label: 'Option1',
    options: [
      {
        text: 'child1 - sends to option 2',
        next: 1,
      },
      {
        text: 'child2 - sends to option 2',
        next: 1,
      },
    ],
  },
  {
    id: '2',
    label: 'Option2',
    options: [
      {
        text: 'child1 - sends to option 1',
        next: 0,
      },
    ],
  },
];
