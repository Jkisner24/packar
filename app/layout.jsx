import { Montserrat } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'PACKAR Project',
  description: 'Entrega tus pedidos al destino que quieras.',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
       <body className={montserrat.className}>{children}</body>
       <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`}> </script>
       </body>
     </html>
    </StoreProvider>
  )
}
