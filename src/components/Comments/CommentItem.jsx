import React from "react";


const CommentItem = ({text, userName, userAvatar, rating, creationDate, answers}) => {
    return (
        <div>
            + {rating} - {userAvatar} {userName} {creationDate.toString().slice(0, 10)}
            <div>
                <span>{text}</span>
                <div>
                    {
                        answers.map(answer =>
                            <CommentItem key={answer.id} {...answer} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CommentItem;