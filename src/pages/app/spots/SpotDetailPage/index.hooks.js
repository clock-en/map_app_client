import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutate, useQuery } from 'hooks/fetch';

export const useView = () => {
  const { id } = useParams();
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  const {
    data: spot,
    loading: spotLaoding,
    error: spotError,
    query: spotQuery,
  } = useQuery(`/spots/${id}`);

  const {
    data: comments,
    loading: commentsLaoding,
    error: commentsError,
    query: commentsQuery,
  } = useQuery('/comments');

  const {
    data: newComment,
    loading: newCommentLoading,
    inputErrors,
    mutate: newCommentMutate,
  } = useMutate('/comments');

  useEffect(() => {
    spotQuery();
    commentsQuery({ spot_id: id });
  }, []);

  useEffect(() => {
    if (comments) {
      setCommentList(comments);
    }
  }, [comments]);

  useEffect(() => {
    if (newComment) {
      setCommentList([...commentList, newComment]);
      setCommentInput('');
    }
  }, [newComment]);

  const handleChangeComment = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newCommentMutate({
      spot_id: id,
      comment: commentInput,
    });
  };

  return {
    commentInput,
    commentList,
    spot,
    spotLaoding,
    spotError,
    commentsLaoding,
    commentsError,
    newCommentLoading,
    inputErrors,
    handleChangeComment,
    handleSubmit,
  };
};
