import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const VisitPage = lazy(() =>
  import('./pages/VisitPage').then((m) => ({ default: m.VisitPage }))
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Box
        as="a"
        href="#main-content"
        position="absolute"
        left="-9999px"
        zIndex="1000"
        padding="4"
        bg="white"
        color="black"
        fontWeight="bold"
        _focus={{ left: '0', top: '0' }}
      >
        Skip to main content
      </Box>
      <Navbar />
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <Spinner size="xl" />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visit" element={<VisitPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
