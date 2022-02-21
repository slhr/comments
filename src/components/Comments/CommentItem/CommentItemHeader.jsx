import React, {useEffect, useState} from "react";
import {Avatar, Box, Typography} from "@mui/material";
import {getTimeDelta} from "../../../utils/helpers";
import styled from "styled-components";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const CommentRatingControl = styled.div`
  :hover {
    color: #548d27;
    cursor: pointer;
  }
`;


const CommentItemHeader = ({rating, userAvatar, userName, creationDate, setIsCommentVisible}) => {
    const [currentRating, setCurrentRating] = useState(rating);

    const plusRating = () => {
        setCurrentRating(prevState => prevState + 1);
    };

    const minusRating = () => {
        setCurrentRating(prevState => prevState - 1);
    };

    useEffect(() => {
        if (currentRating <= -10) {
            setIsCommentVisible(false);
        }
    }, [currentRating, setIsCommentVisible]);

    return (
        <Box sx={{display: "flex", alignItems: "center", mb: 1}}>

            <CommentRatingControl>
                <ArrowDropUpIcon onClick={plusRating}/>
            </CommentRatingControl>

            <Typography sx={{width: 30, textAlign: "center", color: "#757575"}}>
                {currentRating > 0 ? "+" + currentRating : currentRating}
            </Typography>

            <CommentRatingControl>
                <ArrowDropDownIcon onClick={minusRating}/>
            </CommentRatingControl>

            <Avatar alt="User Avatar" src={userAvatar} sx={{ml: 1, width: 20, height: 20}}/>

            <Box sx={{ml: 1, color: "#4d4d4d", fontWeight: "bold"}}>
                {userName}
            </Box>

            <Box sx={{ml: 1, color: "#757575"}}>
                {getTimeDelta(creationDate)}
            </Box>

        </Box>
    );
};

export default CommentItemHeader;