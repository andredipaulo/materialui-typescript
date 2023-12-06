import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';
import { useDrawerContext } from '../shared/contexts/DrawerContext'

export default function AppRoutes() {

    const { toggleDrawerOpen } = useDrawerContext();

    return (

        <Routes>
            <Route path="/" element={
                <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>
                    Toggle Theme
                </Button>
            } />

            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    );
}