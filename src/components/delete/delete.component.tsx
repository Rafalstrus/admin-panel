import './delete.styles.css'

import { useSelector } from 'react-redux'
import { Box, Button } from '@material-ui/core'
const Delete = () => {
    const UsersData = useSelector((state: any) => (state.usersData))
    const idToDelete = useSelector((state: any) => (state.idToDelete))
    var userToDelete = {}
    for (let position: number = 0; position < Object.keys(UsersData).length; position++) {
        if (UsersData[position].id === idToDelete) {
            userToDelete = UsersData[position]
            break
        }
    }
    console.log(userToDelete)
    return (
        <div id="delete-view">
            <Box id="delete-component">
                <p id="delete-title">Delete</p>
                <p>{idToDelete}</p>
                <Button>Cancel</Button>
                <Button>Delete</Button>
            </Box>
        </div>
    )
}
export default Delete

