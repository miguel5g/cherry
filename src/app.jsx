import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './routes';
import { Toaster } from 'sonner';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}

export { App };
