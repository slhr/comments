import React, {useState} from "react";
import {Box, Card, CardHeader, Divider, Typography} from "@mui/material";
import CommentItem from "./CommentItem";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import CommentInputForm from "./CommentInputForm";


const initialState = [
    {
        id: 1,
        text: "9$9$",
        userName: "James Doe",
        userAvatar: defaultAvatar,
        creationDate: new Date("2022-02-20T10:00").getTime(),
        rating: 0,
        answers: [
            {
                id: 3,
                text: "с вас NaN",
                userName: "Jane Doe",
                userAvatar: defaultAvatar,
                creationDate: new Date("2022-02-20T14:00").getTime(),
                rating: 0,
                answers: [],
            }
        ],
    },
    {
        id: 2,
        text: "конкатенация)",
        userName: "Judy Doe",
        userAvatar: defaultAvatar,
        creationDate: new Date("2022-02-20T12:00").getTime(),
        rating: 1,
        answers: []
    },
];


const Comments = () => {
    const [comments, setComments] = useState(initialState);

    const addRootComment = (comment) => {
        setComments(prevState => [
            ...prevState, {
                ...comment,
                id: new Date().getTime(),
                userAvatar: defaultAvatar,
                creationDate: new Date().getTime(),
                rating: 0,
                answers: []
            }
        ]);
    };

    return (
        <Card variant="outlined" sx={{mt: 2, backgroundColor: "#fff"}}>

            <CardHeader title={<Typography variant="h5">Комментарии:</Typography>}/>

            <Box sx={{p: 2}}>
                {
                    comments.map(comment =>
                        <CommentItem key={comment.id} {...comment} />
                    )
                }
            </Box>

            <Divider/>

            <CommentInputForm addRootComment={addRootComment}/>

        </Card>
    );
};

export default Comments;