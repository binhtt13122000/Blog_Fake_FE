// import React, { useState } from "react";

// import BoxBase from "../../components/Box/BoxBase/index";
// import ButtonBase from "../../components/Button/ButtonBase/index";
// import TextFieldRhf from "../../components/TextField/TextFieldRhf/index";
// import { Avatar, CssBaseline, Tooltip, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import ErrorIcon from "@material-ui/icons/Error";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

// export const useStyles = makeStyles((theme) => ({
//     root: {
//         height: "100vh",
//         width: "100%",
//         position: "relative",
//     },
//     avatar: {
//         marginTop: theme.spacing(1),
//         position: "relative",
//     },
//     form: {
//         width: "100%",
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
//     profileContent: {
//         backgroundColor: "white",
//         borderRadius: "12px",
//     },
//     profileTop: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         paddingTop: "20px",
//         paddingBottom: "10px",
//     },
//     profileTitle: {
//         fontWeight: 600,
//     },
//     profileMain: {
//         padding: theme.spacing(4),
//         paddingTop: theme.spacing(1),
//     },
//     profileActions: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//     },
// }));

// const UserProfile: React.FC = () => {
//     const classes = useStyles();
//     const [isVerify, setIsVerify] = useState(true);
//     const [isEdit, setIsEdit] = useState(false);
//     return (
//         <BoxBase
//             className={classes.root}
//             bgcolor="primary"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//         >
//             <CssBaseline />
//             <BoxBase
//                 width={980}
//                 minHeight={560}
//                 height="max-content"
//                 className={classes.profileContent}
//             >
//                 <BoxBase className={classes.profileTop}>
//                     <Typography
//                         className={classes.profileTitle}
//                         component="h1"
//                         variant="h4"
//                         color="primary"
//                         align="center"
//                     >
//                         Thông tin cá nhân
//                     </Typography>
//                     <div className={classes.avatar}>
//                         <Avatar
//                             style={{
//                                 width: "120px",
//                                 height: "120px",
//                             }}
//                             src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
//                         />
//                         <Tooltip
//                             title={
//                                 isVerify
//                                     ? "Your account have been verified"
//                                     : "Your account is not verified yet."
//                             }
//                         >
//                             {isVerify ? (
//                                 <VerifiedUserIcon
//                                     fontSize="small"
//                                     color="primary"
//                                     style={{
//                                         position: "absolute",
//                                         bottom: "14px",
//                                         right: "20px",
//                                         transform: "translate(50%,50%)",
//                                     }}
//                                 />
//                             ) : (
//                                 <ErrorIcon
//                                     fontSize="small"
//                                     color="error"
//                                     style={{
//                                         position: "absolute",
//                                         bottom: "14px",
//                                         right: "20px",
//                                         transform: "translate(50%,50%)",
//                                     }}
//                                 />
//                             )}
//                         </Tooltip>
//                     </div>
//                 </BoxBase>
//                 <BoxBase className={classes.profileMain}>
//                     <form className={classes.form} autoComplete="off" noValidate>
//                         <TextFieldRhf
//                             variant="outlined"
//                             margin="normal"
//                             fullWidth
//                             required
//                             id="firstName"
//                             disabled={!isEdit}
//                             style={{
//                                 width: "49%",
//                             }}
//                             label="First Name"
//                             value="David"
//                         />
//                         <TextFieldRhf
//                             variant="outlined"
//                             margin="normal"
//                             fullWidth
//                             required
//                             disabled={!isEdit}
//                             style={{
//                                 width: "49%",
//                                 marginLeft: "2%",
//                             }}
//                             label="Last Name"
//                             id="lastName"
//                             value="Paul"
//                         />
//                         <TextFieldRhf
//                             variant="outlined"
//                             margin="normal"
//                             fullWidth
//                             required
//                             style={{
//                                 width: "49%",
//                             }}
//                             disabled={!isEdit}
//                             id="mobile"
//                             label="Phone Number"
//                             value="0902472118"
//                         />
//                         <TextFieldRhf
//                             variant="outlined"
//                             margin="normal"
//                             fullWidth
//                             required
//                             disabled={!isEdit}
//                             style={{
//                                 width: "49%",
//                                 marginLeft: "2%",
//                             }}
//                             type="email"
//                             label="Email"
//                             id="email"
//                             value="Danhskipper18@gmail.com"
//                         />
//                         <TextFieldRhf
//                             variant="outlined"
//                             margin="normal"
//                             fullWidth
//                             maxRows={4}
//                             style={{
//                                 resize: "none",
//                             }}
//                             disabled={!isEdit}
//                             label="Introduction"
//                             multiline
//                             rows={4}
//                             rowsMax={4}
//                             defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//                         />
//                         <div className={classes.profileActions}>
//                             <ButtonBase
//                                 variant="contained"
//                                 color={isEdit ? "default" : "primary"}
//                                 className={classes.submit}
//                                 style={{
//                                     marginRight: "20px",
//                                 }}
//                                 size="large"
//                                 onClick={() => {
//                                     setIsEdit((previous) => {
//                                         return !previous;
//                                     });
//                                 }}
//                             >
//                                 {isEdit ? "Cancel" : "Edit Profile"}
//                             </ButtonBase>
//                             {isEdit && (
//                                 <ButtonBase
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     className={classes.submit}
//                                     size="large"
//                                 >
//                                     Save
//                                 </ButtonBase>
//                             )}
//                         </div>
//                     </form>
//                 </BoxBase>
//             </BoxBase>
//         </BoxBase>
//     );
// };

// export default UserProfile;
