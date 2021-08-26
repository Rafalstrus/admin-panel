import { Button } from "@material-ui/core";

import './user-list.styles.css'

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';


const Table = ({ row, changeIdToDelete}: any) => (
    <tr>
        <td>
            <p>{row.id}</p>
        </td>
        <td>
            <p>{row.name}</p>
        </td>
        <td>
            <p>{row.username}</p>
        </td>
        <td>
            <p>{row.email}</p>
        </td>
        <td>
            <p>{row.address.city}</p>
        </td>
        <td>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "rgb(239,173,78)",
                    color: "white",
                    textTransform: "none"
                }}
            >edit</Button>
        </td>
        <td><Button
            variant="contained"
            onClick={()=>{
                document.getElementById("delete-view")!.style.display = "block"
                changeIdToDelete(row.id)
            }}
            style={{
                backgroundColor: "rgb(217,83,79)",
                color: "white",
                textTransform: "none"
            }}>
            delete
        </Button></td>
    </tr>
)
export const FirstRow = ({sortUsers} :any) => (
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td onClick={
            () => {
                sortUsers()
            }}>Username</td>
        <td>Email</td>
        <td>City</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>
        )
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)
