'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './Main';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}
