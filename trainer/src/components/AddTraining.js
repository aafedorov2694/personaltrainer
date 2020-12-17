import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCustomer(){
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date:'', duration:'', activity:'', customerlink:''
    })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleInputChange = (event) => {
    setTraining({...training,[event.target.training]: event.target.value})
  }

    return(
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Add Training
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New training</DialogTitle>
            <DialogContent>
            
                <TextField
                    autoFocus
                    margin="dense"
                    id="date"
                    value = {training.date}
                    onChange = {e => handleInputChange(e)}
                    label="date"
                    fullWidth
                /> 
                <TextField
                    margin="dense"
                    id="duration"
                    value = {training.duration}
                    onChange = {e => handleInputChange(e)}
                    label="duration"
                    fullWidth
                /> 
                <TextField
                    margin="dense"
                    id="activity"
                    value = {training.activity}
                    onChange = {e => handleInputChange(e)}
                    label="activity"
                    fullWidth
                /> 
                <TextField
                    margin="dense"
                    id="customer"
                    value = {training.activity.links[2].href}
                    onChange = {e => handleInputChange(e)}
                    label="customer"
                    fullWidth
                /> 

            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}
