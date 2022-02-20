import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Card, Grid, InputAdornment, TextField} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import * as yup from "yup";


const schema = yup.object().shape({
    email: yup.string().email("Укажите валидный адрес").required("Обязательное поле"),
    userName: yup.string().required("Обязательное поле"),
    text: yup.string().required("Обязательное поле"),
});


const CommentInputForm = ({addComment, addRootComment, setIsInputFormVisible, isOutlined}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => {
        if (addRootComment) {
            addRootComment(values);
        } else {
            addComment(values);
            setIsInputFormVisible(false);
        }
        reset();
    };

    const commonTextFieldErrorProps = {error: true, label: "Ошибка", placeholder: ""};

    return (
        <Card sx={{p: 3}} variant={isOutlined ? "outlined" : null}>
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
                                           ? {...commonTextFieldErrorProps, helperText: errors.userName.message}
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
                                           ? {...commonTextFieldErrorProps, helperText: errors.email.message}
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
                                           ? {...commonTextFieldErrorProps, helperText: errors.text.message}
                                           : null
                                   }
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Button type="submit" variant="contained" color="success" size="small">
                            Отправить
                        </Button>
                    </Grid>

                </Grid>
            </form>
        </Card>
    );
};

export default CommentInputForm;
