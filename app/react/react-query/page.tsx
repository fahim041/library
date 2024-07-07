'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './Main';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Main />
    </QueryClientProvider>
  );
}
