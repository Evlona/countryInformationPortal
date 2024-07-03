import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css';
import HomePage from './pages/Home';
import CountryPage from './pages/CountryDetails';

const queryClient = new QueryClient();
const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/country/:name', element: <CountryPage /> },
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
