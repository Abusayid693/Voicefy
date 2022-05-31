import React, {useEffect, useState} from 'react';
import {PostsContext} from 'hooks/usePosts';
import {usePostsQuery} from 'generated/graphql';

export const PostsProvider: React.FC<{children: React.ReactNode}> = ({
  children
}) => {
  const [posts, setPosts] = useState([]) as Array<any>;

  const {data, loading} = usePostsQuery({
    variables: {
      limit: 10
    }
  });

  useEffect(() => {
    if (data?.posts) setPosts(data?.posts);
  }, [loading]);

  const value = {
    posts,
    loading
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
