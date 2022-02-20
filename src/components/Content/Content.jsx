import React from "react";
import {Avatar, Card, CardContent, CardHeader, CardMedia, Divider, Typography} from "@mui/material";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import contentImage from "../../assets/images/content.jpg";


const Content = () => {
    return (
        <Card variant="outlined">

            <CardHeader avatar={
                <Avatar alt="User Avatar" src={defaultAvatar}/>
            }
                        title="John Doe"
                        subheader={"1 day ago"}/>

            <Divider/>

            <CardContent>

                <Typography>
                    «Две книги по C++ для чайников. Смирительная рубашка в подарок».
                </Typography>

            </CardContent>

            <CardMedia component="img"
                       image={contentImage}
                       alt="Content Image"/>

        </Card>
    );
};

export default Content;