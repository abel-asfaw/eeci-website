import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VisitPage } from './pages/VisitPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/visit" element={<VisitPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
