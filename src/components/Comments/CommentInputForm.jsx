import React from "react";
import {useForm} from "react-hook-form";
import {Box, Button, Grid, InputAdornment, TextField} from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    email: yup.string().email("Укажите валидный адрес").required("Обязательное поле"),
    userName: yup.string().required("Обязательное поле"),
    text: yup.string().required("Обязательное поле"),
});


const CommentInputForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box sx={{p: 3}}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField {...register("userName")} fullWidth size="small" placeholder="Имя"
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <PersonOutlineIcon/>
                                           </InputAdornment>
                                       ),
                                   }}

                                   {
                                       ...errors.userName
                                           ? {
                                               error: true,
                                               label: "Ошибка",
                                               helperText: errors.userName.message,
                                               placeholder: ""
                                           }
                                           : null
                                   }
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField {...register("email")} fullWidth size="small" placeholder="E-mail"
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <MailOutlineIcon/>
                                           </InputAdornment>
                                       ),
                                   }}

                                   {
                                       ...errors.email
                                           ? {
                                               error: true,
                                               label: "Ошибка",
                                               helperText: errors.email.message,
                                               placeholder: ""
                                           }
                                           : null
                                   }
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField {...register("text")} multiline fullWidth size="small" placeholder="Комментарий"
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <ChatBubbleOutlineIcon/>
                                           </InputAdornment>
                                       ),
                                   }}

                                   {
                                       ...errors.text
                                           ? {
                                               error: true,
                                               label: "Ошибка",
                                               helperText: errors.text.message,
                                               placeholder: ""
                                           }
                                           : null
                                   }
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Button type="submit"
                                variant="contained"
                                color="success"
                                size="small"
                        >
                            Отправить
                        </Button>

                    </Grid>

                </Grid>

            </form>

        </Box>
    );
};

export default CommentInputForm;