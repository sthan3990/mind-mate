import ChakraUiProvider from '@/providers/chakra-ui.provider'
import Navbar from './components/header'
import Footer from './components/footer'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        {/* Add your head content here */}
      </head>
      <body>
        <ChakraUiProvider>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ChakraUiProvider>
      </body>
    </html>
  )
}

export default RootLayout;
