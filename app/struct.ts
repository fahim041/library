type Feature = {
  id: number;
  name: string;
  url: string;
  code: string;
};

export type Framework = {
  id: number;
  name: string;
  features: Feature[];
};

const frameworks: Framework[] = [
  {
    id: 1,
    name: 'Next',
    features: [
      {
        id: 1,
        name: 'Server Side data fetching',
        url: '/next/data-fetching/server/users',
        code: 'https://github.com/fahim041/library/tree/main/app/next/data-fetching/server',
      },
      {
        id: 2,
        name: 'Client Side data fetching',
        url: '/next/data-fetching/client/users',
        code: 'https://github.com/fahim041/library/tree/main/app/next/data-fetching/client',
      },
    ],
  },
  {
    id: 2,
    name: 'React',
    features: [
      {
        id: 1,
        name: 'React Router',
        url: '/react/routing',
        code: 'https://github.com/fahim041/library/tree/main/app/react/routing',
      },
    ],
  },
];

export default frameworks;
