import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component, type ErrorInfo, type ReactNode } from 'react';

import Navbar from './components/AppNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Season from './pages/Season';
import ContentItem from './pages/ContentItem';

interface ErrorBoundaryProps { children: ReactNode; }
interface ErrorBoundaryState { hasError: boolean; }

class AppErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro inesperado na interface:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <main className="mx-auto max-w-2xl p-8 text-center"><h1 className="text-2xl font-bold">Não foi possível carregar esta página.</h1><p className="mt-3">Atualize a página e tente novamente.</p></main>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <AppErrorBoundary>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ContentItem />} />
        <Route path="/season/:id" element={<Season />} />
        <Route path="*" element={<p className="text-center mt-5">Página não encontrada.</p>} />
      </Routes>
        <Footer />
      </BrowserRouter>
    </AppErrorBoundary>
  );
}

export default App;
