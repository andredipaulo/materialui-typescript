import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, TextField, useMediaQuery, useTheme } from '@mui/material'
import { useDrawerContext } from '../../contexts/DrawerContext';
import { Navigate, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { IconButton } from '@mui/material';

interface IMenuLateralProps{
    children?: React.ReactNode;
}
interface IListItemLinkProps{
    label: string
    icon: string
    to: string
    onClick: (() => void) | undefined
}


const ListItemLink = ( props: IListItemLinkProps ) => {
    
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(props.to);
    const match = useMatch({ path: resolvedPath.pathname, end: false })

    const handleClick = () => {
        navigate(props.to)
        props.onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{props.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </ListItemButton>
    )
}

export default function MenuLateral(props: IMenuLateralProps){

    const theme = useTheme();

    const smDown = useMediaQuery( theme.breakpoints.down('sm'));

    const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

    return (        
        <>
            <Drawer open={isDrawerOpen} variant={ smDown ? 'temporary' : 'permanent' } onClose={toggleDrawerOpen}>
                <Box 
                    width={ theme.spacing(25)}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Box 
                        width="100%" 
                        height={theme.spacing(10)} 
                        display="flex"
                        alignItems="center" 
                        justifyContent="space-evenly"                        
                        marginX={1}                        
                    >
                        <Avatar 
                            sx={
                                {
                                    height: theme.spacing(8),
                                    width: theme.spacing(8)
                                }
                            }
                            alt="user"                            
                        >                        
                        </Avatar>
                        
                        <Box>
                            CADASTRO                            
                        </Box>                            
                    </Box>                    
                    
                    <Divider />
                    <Box 
                        //display="flex" 
                        flex={1}
                    >

                        <List component={'nav'}>
                            <ListItemLink                                
                                icon='home'
                                to='/'
                                label='Home'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />                            
                        </List>
                    </Box>                    
                </Box>                
            </Drawer>

            <Box height="100vh" marginLeft={ smDown ? 0 : theme.spacing(25) }>
                {props.children}
            </Box>
            
        </>
    )
}