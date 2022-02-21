import React, {useEffect, useState} from "react";
import {getTimeDelta} from "../../../utils/helpers";
import styled from "styled-components";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;


const CommentRatingControl = styled.div`
  :hover {
    color: #548d27;
    cursor: pointer;
  }
`;


const CommentRating = styled.span`
  color: #757575;
  font-size: 16px;
  text-align: center;
  width: 30px;
`;


const UserAvatar = styled.img`
  margin-left: 10px;
  height: 20px;
  width: 20px;
`;


const UserName = styled.span`
  color: #4d4d4d;
  font-weight: bold;
  margin-left: 10px;
`;


const CreationTime = styled.span`
  color: #757575;
  margin-left: 10px;
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
        <FlexWrapper>

            <CommentRatingControl>
                <ArrowDropUpIcon onClick={plusRating}/>
            </CommentRatingControl>

            <CommentRating>
                {currentRating > 0 ? "+" + currentRating : currentRating}
            </CommentRating>

            <CommentRatingControl>
                <ArrowDropDownIcon onClick={minusRating}/>
            </CommentRatingControl>

            <UserAvatar alt="UserAvatar" src={userAvatar}/>

            <UserName>{userName}</UserName>

            <CreationTime>{getTimeDelta(creationDate)}</CreationTime>

        </FlexWrapper>
    );
};


export default CommentItemHeader;