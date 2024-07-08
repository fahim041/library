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
        name: 'Server side data fetching',
        url: '/next/data-fetching/server/users',
        code: 'https://github.com/fahim041/library/tree/main/app/next/data-fetching/server',
      },
      {
        id: 2,
        name: 'Client side data fetching',
        url: '/next/data-fetching/client/users',
        code: 'https://github.com/fahim041/library/tree/main/app/next/data-fetching/client',
      },
      {
        id: 3,
        name: 'Routing - params',
        url: '/next/routing/users',
        code: 'https://github.com/fahim041/library/tree/main/app/next/routing/users',
      },
      {
        id: 4,
        name: 'Routing - multiple params & search params',
        url: '/next/routing/products/tech/apple/iphone?sort=price',
        code: 'https://github.com/fahim041/library/tree/main/app/next/routing/products/%5B%5B...slug%5D%5D',
      },
      {
        id: 5,
        name: 'Api (zod payload validation)',
        url: '/next/api/users',
        code: 'https://github.com/fahim041/library/tree/main/app/next/api/users',
      },
      {
        id: 6,
        name: 'SEO',
        url: '/next/seo',
        code: 'https://github.com/fahim041/library/tree/main/app/next/seo',
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
      {
        id: 2,
        name: 'Hook form (zod validation)',
        url: '/react/hook-form',
        code: 'https://github.com/fahim041/library/tree/main/app/react/hook-form',
      },
      {
        id: 3,
        name: 'Reusable fetch hook',
        url: '/react/fetch-hook',
        code: 'https://github.com/fahim041/library/tree/main/app/react/fetch-hook'
      },
      {
        id: 4,
        name: 'Reusable http service',
        url: '/react/http-service',
        code: 'https://github.com/fahim041/library/tree/main/app/react/http-service'
      },
      {
        id: 5,
        name: 'React Query',
        url: '/react/react-query',
        code: 'https://github.com/fahim041/library/tree/main/app/react/react-query'
      }
    ],
  },
];

export default frameworks;
