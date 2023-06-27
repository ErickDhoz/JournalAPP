import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";


function SideBarItem({title='',body, id, date,imageUrls =[]}) {

    const dispatch = useDispatch();

    const onClickNote=()=>{

        dispatch(setActiveNote({title, body, id, date, imageUrls}));
    }

        return (
        <div>
          <ListItem disablePadding>
                            {
                                <ListItemButton onClick={onClickNote}>
                                    <ListItemIcon>
                                      <TurnedInNot/>  
                                    </ListItemIcon>
                                   <Grid container>
                                        <ListItemText primary={title} />
                                        <ListItemText secondary={body} />

                                        
                                   </Grid>
                                </ListItemButton>
                            }
                            </ListItem>  
    </div>
    );
}

export default SideBarItem;
