import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AppThemeProvider from "./shared/contexts/ThemeContext";
//import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export default function App() {
  
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>    
    </AppThemeProvider>      
    
  );

}