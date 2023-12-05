import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, TextField, useTheme } from '@mui/material'

interface IMenuLateralProps{
    children?: React.ReactNode;
}
export default function MenuLateral(props: IMenuLateralProps){

    const theme = useTheme();

    return (        
        <>
            <Drawer variant='permanent'>
                <Box 
                    width={ theme.spacing(28)}
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
                    <Box flex={1}>                    

                        <List component={'nav'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>                    
                </Box>                
            </Drawer>

            <Box height="100vh" marginLeft={ theme.spacing(28) }>
                {props.children}
            </Box>
            
        </>
    )
}