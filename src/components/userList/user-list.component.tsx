import {Grid, Button} from "@material-ui/core";

import './user-list.styles.css'

export const UserList = () => {
    return(
    <div id="user-list">
              <Grid
        container direction={"row"} justifyContent="center"
        id="first-row"
      > 
      <Grid item xs={3} >
<p>User list</p>
      </Grid>
      <Grid item xs={6} ></Grid>
      <Grid item xs={3} >
        <Button
        variant="contained" color="primary"
        >Add new</Button>
      </Grid>
      
      </Grid>
    </div>
    )
}