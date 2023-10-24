import ChakraUiProvider from '@/providers/chakra-ui.provider';
import Navbar from './components/header';
import Footer from './components/footer';

const rootLayoutStyles = {
  display: 'flex',
  minHeight: '100vh',
};

const contentStyles = {
  flex: 1,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        {/* Add your head content here */}
      </head>
      <body style={rootLayoutStyles}>
        <ChakraUiProvider>
          <Navbar />
          <div style={contentStyles}>
            {children}
          </div>
          <Footer />
        </ChakraUiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
