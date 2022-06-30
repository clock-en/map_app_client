import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography, Box, Divider } from '@mui/material';
import { MyDatetime } from 'components/elements/MyDatetime';
import { MyLineBreakText } from 'components/elements/MyLineBreakText';

export const CommentList = ({ comments }) => (
  <>
    {comments && comments.length ? (
      comments.map((comment) => (
        <Box key={`comment-${comment.id}`} sx={{ padding: '0.5em 0' }}>
          <Typography component="div" fontSize="small">
            {comment.user.name}さん <MyDatetime datetime={comment.created_at} />
          </Typography>
          <Typography component="div">
            <MyLineBreakText content={comment.comment} />
          </Typography>
          <Divider sx={{ marginTop: '0.5em' }} />
        </Box>
      ))
    ) : (
      <Typography component="div">コメントが有りません</Typography>
    )}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      spot_id: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  ),
};

CommentList.defaultProps = {
  comments: undefined,
};
