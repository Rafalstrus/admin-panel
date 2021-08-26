import { useRef } from 'react'

import { connect } from "react-redux";

import { Grid, Button } from '@material-ui/core'
import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';
import './add-form.styles.css';

 const AddForm = ({addUser} :any) => {
    const nameInputRef = useRef<HTMLInputElement>(null)
    const nameErrorRef =useRef<HTMLParagraphElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const emailErrorRef =useRef<HTMLParagraphElement>(null)
    const addFormRef = useRef<HTMLDivElement>(null)

    return (
        <div id="add-form"
            ref={addFormRef}
            style={{ display: "none" }}
        >
            <Grid
                container direction={"row"} justifyContent="center"
            >
                <Grid
                    container
                    style={{ padding: "2vh" }}
                >
                    <Grid item xs={12}

                    >
                        <Grid item xs={3} >
                            <p
                                className="view-tittle"
                            >Form</p>
                        </Grid>
                        <Grid item xs={12} style={{ height: "6vh" }} />
                    </Grid>
                    <Grid container direction={"row"} >
                        <Grid item xs={2} />
                        <Grid item xs={2}><p
                            className="input-title"
                        >Name</p></Grid>
                        <Grid item xs={8}><input
                            ref={nameInputRef}
                            style={{ width: "60vw", height: "2.5vh" }}
                        >
                        </input></Grid>
                        <Grid item xs={4} />
                        <Grid><p
                        ref={nameErrorRef}> </p></Grid>
                    </Grid>
                    <Grid item xs={12} style={{ height: "3vh" }} />
                    <Grid container direction={"row"}>
                        <Grid item xs={2} />
                        <Grid item xs={2}><p
                            className="input-title"
                        >Email</p></Grid>
                        <Grid item xs={8}><input
                            ref={emailInputRef}
                            type="email"
                            style={{ width: "60vw", height: "2.5vh" }}
                        >
                        </input></Grid>
                        <Grid item xs={4} />
                        <Grid><p
                        ref={emailErrorRef}> </p></Grid>

                    </Grid>
                    <Grid item xs={12} style={{ height: "6vh" }} />
                    <Grid item xs={10}></Grid>
                    <Grid item xs={1}><Button
                        variant="contained"
                        style={{ backgroundColor: "white", color: "red", borderColor: "red", textTransform: "none" }}
                        onClick={() => {
                            if (nameInputRef.current?.value !== undefined &&
                                emailInputRef.current?.value !== undefined){
                                    emailInputRef.current.value=""
                                    nameInputRef.current.value=""
                                    emailErrorRef.current!.innerHTML =""
                                    nameErrorRef.current!.innerHTML=""
                                }
                            addFormRef.current!.style.display = "none"
                            document.getElementById("user-list")!.style.display = "block"

                        }}
                    >
                        Cancel</Button></Grid>
                    <Grid item xs={1}><Button
                        variant="contained"
                        style={{ backgroundColor: "rgb(92,184,92)", color: "white", textTransform: "none" }}
                        onClick={() => {
                            if (nameInputRef.current?.value !== undefined &&
                                emailInputRef.current?.value !== undefined &&
                                (nameInputRef.current?.value).length !== 0) {
                                var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                                var regexExecute = email.test(emailInputRef.current?.value)
                                if (regexExecute) {
                                    addUser([nameInputRef.current?.value,emailInputRef.current?.value])
                                    emailInputRef.current.value=""
                                    nameInputRef.current.value=""
                                    emailErrorRef.current!.innerHTML =""
                                    nameErrorRef.current!.innerHTML=""
                                    addFormRef.current!.style.display = "none"
                                    document.getElementById("user-list")!.style.display = "block"
                                }
                                else{
                                    emailErrorRef.current!.innerHTML ="Email is required"
                                }
                            }
                            else {nameErrorRef.current!.innerHTML ="Name is required"}
                        }}>
                        Submit</Button></Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddForm)