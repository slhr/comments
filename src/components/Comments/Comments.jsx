import React, {useState} from "react";
import {Card, CardHeader, Divider, Typography} from "@mui/material";
import CommentItem from "./CommentItem/CommentItem";
import CommentInputForm from "./CommentInputForm";
import styled from "styled-components";
import defaultAvatar from "../../assets/images/defaultAvatar.png";


const CommentsWrapper = styled.div`
  margin-top: 20px;
`;


const CommentItemsWrapper = styled.div`
  padding: 20px;
`;


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
        <CommentsWrapper>
            <Card variant="outlined">

                <CardHeader title={<Typography variant="h6">Комментарии:</Typography>}/>

                <CommentItemsWrapper>
                    {
                        comments.map(comment =>
                            <CommentItem key={comment.id} {...comment} />
                        )
                    }
                </CommentItemsWrapper>

                <Divider/>

                <CommentInputForm addRootComment={addRootComment}/>

            </Card>
        </CommentsWrapper>
    );
};

export default Comments;