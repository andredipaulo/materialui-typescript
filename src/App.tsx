import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import AppThemeProvider from './shared/contexts/ThemeContext'
import MenuLateral from './shared/components/menu-lateral/MenuLateral'

export default function App() {

    return (
        <AppThemeProvider>
            <BrowserRouter>

                <MenuLateral>
                    <AppRoutes />
                </MenuLateral>                

            </BrowserRouter>
        </AppThemeProvider>
    )

}