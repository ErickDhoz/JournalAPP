import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../Layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";


function JournalPage() {



   const dispatch = useDispatch();

   const onClickNewNote=()=>{
      dispatch(startNewNote());
   }

   const {isSaving, active}=useSelector(state=>state.journal);

   return (
      <JournalLayout>
        
        {
          (!!active)
            ? <NoteView />
            : <NothingSelectedView />
        }
  
  
        <IconButton
          onClick={ onClickNewNote }
          size='large'
          disabled={ isSaving }
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
  
      </JournalLayout>
    )
  }
  
export default JournalPage;