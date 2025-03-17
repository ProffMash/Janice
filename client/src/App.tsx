import LandingPage from './landingPage';
import { Toaster } from 'sonner'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LandingPage />
      <Toaster position="top-right" richColors /> 
    </div>
  );
}

export default App;