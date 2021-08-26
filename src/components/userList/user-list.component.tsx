import { useRef } from 'react'

import { Grid, Button } from "@material-ui/core";

import './user-list.styles.css'

import { useSelector } from "react-redux";

import  Table,{ FirstRow } from './user-list-table.component';

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';

 const UserList = ({sortUsers} :any) => {
    const arraytoTable = useSelector((state: any) => (state.usersData))
    const userListRef = useRef<HTMLDivElement>(null)
    //console.log(arraytoTable)
    return (
        <div id="user-list"
            
            ref={userListRef}
        >
            <Grid
                container direction={"row"} justifyContent="center"
            >
                <Grid
                    container
                    style={{ padding: "2vh" }}
                >
                    <Grid item xs={3} >
                        <p
                        className="view-tittle"
                        >User list</p>
                    </Grid>
                    <Grid item xs={6} ></Grid>
                    <Grid container item xs={3} justifyContent="flex-end">
                        <Button
                            variant="contained" color="primary"
                            onClick={() => {
                                userListRef.current!.style.display="none"
                                document.getElementById("add-form")!.style.display = "block"
                            }}
                        >Add new</Button>
                    </Grid>
                </Grid>
                <table>
                    <tbody style={{ width: "inherit" }}><FirstRow 
                    sortUsers={sortUsers}
                    />{
                        (Object.keys(arraytoTable).length !== 0) ?
                            arraytoTable.map((row: any) => (
                                <Table
                                    key={row.id}
                                    row={row}
                                />
                            )) : ""}</tbody>
                </table>
            </Grid>
        </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)