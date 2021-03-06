import React, {useState} from "react";
import CommentInputForm from "../CommentInputForm";
import CommentItemHeader from "./CommentItemHeader";
import styled from "styled-components";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";


const VisibilitySwitcher = styled.div`
  display: ${props => props.visible ? "block" : "none"};
`;


const Pointer = styled.p`
  color: #757575;

  :hover {
    cursor: pointer;
  }
`;


const InputFormVisibilitySwitcher = styled.p`
  color: #548d27;
  margin: 5px 0;

  :hover {
    cursor: pointer;
    opacity: 80%;
  }
`;


const CommentWrapper = styled.div`
  border-left: 1px solid #dddddd;
  overflow: hidden;
  padding: 5px 0 5px 25px;
`;


const CommentText = styled.p`
  font-size: 16px;
  word-wrap: break-word;
`;


const CommentItem = React.memo(({text, userName, userAvatar, rating, creationDate, answers}) => {
    const [comments, setComments] = useState(answers);

    const [isCommentVisible, setIsCommentVisible] = useState(true);
    const [isBranchShow, setIsBranchShow] = useState(false);
    const [isInputFormVisible, setIsInputFormVisible] = useState(false);

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
        setIsInputFormVisible(false);
    };

    return (
        <CommentWrapper>

            <VisibilitySwitcher visible={isCommentVisible}>

                <CommentItemHeader {...{userName, userAvatar, rating, creationDate, setIsCommentVisible}}/>

                <CommentText>{text}</CommentText>

                <InputFormVisibilitySwitcher onClick={toggleInputFormVisibility}>
                    {isInputFormVisible ? "????????????" : "????????????????"}
                </InputFormVisibilitySwitcher>

                {
                    isInputFormVisible && <CommentInputForm addComment={addComment}
                                                            isOutlined={true}/>
                }

                {
                    !!comments.length && <Pointer onClick={toggleBranchVisibility}>
                        {isBranchShow ? "???????????????? ??????????" : `???????????????? ?????????? (${comments.length})`}
                    </Pointer>

                }

                <VisibilitySwitcher visible={isBranchShow}>
                    {comments.map(answer => <CommentItem key={answer.id} {...answer} />)}
                </VisibilitySwitcher>

            </VisibilitySwitcher>

            <VisibilitySwitcher visible={!isCommentVisible} onClick={showComment}>
                <Pointer>?????????????? ??????????????????????</Pointer>
            </VisibilitySwitcher>

        </CommentWrapper>
    );
});


export default CommentItem;