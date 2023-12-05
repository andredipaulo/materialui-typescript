import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export default function AppRoutes(){

    const {toggleTheme} = useAppThemeContext();

    return (

        <Routes>
            <Route path="/" element={
                <Button variant="contained" color='primary' onClick={toggleTheme}>
                    Toggle Theme
                </Button>
            }/>

            <Route path="*" element={<Navigate to={"/"} />}/>
        </Routes>
    );
}