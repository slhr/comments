import React, {useEffect, useState} from "react";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import {Avatar, Box, Typography} from "@mui/material";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {getTimeDelta} from "../../utils/helpers";
import CommentInputForm from "./CommentInputForm";


const VisibilitySwitcher = styled(Box)`
  display: ${props => props.visible ? "block" : "none"};
`;


const PointerText = styled.p`
  color: #757575;
  font-size: 13px;

  :hover {
    cursor: pointer;
  }
`;


const InputFormVisibilitySwitcher = styled.p`
  margin: 5px 0;
  font-size: 13px;
  color: #548d27;

  :hover {
    cursor: pointer;
    opacity: 80%;
  }
`;


const CommentItem = React.memo(({text, userName, userAvatar, rating, creationDate, answers}) => {
    const [currentRating, setCurrentRating] = useState(rating);
    const [comments, setComments] = useState(answers);
    const [isCommentVisible, setIsCommentVisible] = useState(true);

    const [isBranchShow, setIsBranchShow] = useState(false);
    const [isInputFormVisible, setIsInputFormVisible] = useState(false);

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

    const showComment = () => {
        setIsCommentVisible(true);
    };

    const toggleBranchVisibility = () => {
        setIsBranchShow(prevState => !prevState);
    };

    const toggleInputFormVisibility = () => {
        setIsInputFormVisible(prevState => !prevState);
    };

    const addComment = (comment) => {
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

        setIsBranchShow(true);
    };

    return (
        <Box sx={{borderLeft: "1px solid #dddddd", padding: "5px 0 5px 25px", overflow: "hidden"}}>

            <VisibilitySwitcher visible={isCommentVisible}>

                <Box sx={{display: "flex", alignItems: "center", mb: 1}}>

                    <ArrowDropUpIcon onClick={plusRating}/>

                    <Typography style={{width: 30, textAlign: "center", color: "#757575"}}>
                        {currentRating > 0 ? "+" + currentRating : currentRating}
                    </Typography>

                    <ArrowDropDownIcon onClick={minusRating}/>

                    <Avatar alt="User Avatar" src={userAvatar} sx={{width: 20, height: 20, ml: 1}}/>

                    <Box sx={{ml: 1, color: "#4d4d4d", fontWeight: "bold"}}>
                        {userName}
                    </Box>

                    <Box sx={{ml: 1, color: "#757575"}}>
                        {getTimeDelta(creationDate)}
                    </Box>

                </Box>

                <Typography sx={{wordWrap: "break-word"}}>
                    {text}
                </Typography>

                <InputFormVisibilitySwitcher onClick={toggleInputFormVisibility}>
                    {isInputFormVisible ? "отмена" : "ответить"}
                </InputFormVisibilitySwitcher>

                {
                    isInputFormVisible && <CommentInputForm addComment={addComment}
                                                            setIsInputFormVisible={setIsInputFormVisible}
                                                            isOutlined={true}/>
                }


                {
                    comments.length
                        ? <PointerText onClick={toggleBranchVisibility}>
                            {
                                isBranchShow
                                    ? "свернуть ветку"
                                    : `раскрыть ветку (${comments.length})`
                            }
                        </PointerText>
                        : null
                }

                <VisibilitySwitcher visible={isBranchShow}>
                    {comments.map(answer => <CommentItem key={answer.id} {...answer} />)}
                </VisibilitySwitcher>

            </VisibilitySwitcher>

            <VisibilitySwitcher visible={!isCommentVisible} onClick={showComment}>
                <PointerText>
                    Открыть комментарий
                </PointerText>
            </VisibilitySwitcher>

        </Box>
    );
});

export default CommentItem;