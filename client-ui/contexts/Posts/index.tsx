import {NetworkStatus} from '@apollo/client';
import {usePostsQuery} from 'generated/graphql';
import {PostsContext} from 'hooks/usePosts';
import React, {useEffect, useState} from 'react';

export const PostsProvider: React.FC<{children: React.ReactNode}> = ({
  children
}) => {
  const [posts, setPosts] = useState([]) as Array<any>;

  const {data, loading, refetch, networkStatus} = usePostsQuery({
    variables: {
      limit: 100
    },
    notifyOnNetworkStatusChange: true
  });

  useEffect(() => {
    if (data?.posts) setPosts(data?.posts);
  }, [loading]);

  const updatePosts = async () => {
    const {data: data2} = await refetch({
      limit: 100
    });
    setPosts(data2?.posts);
  };

  const value = {
    posts,
    loading: loading || networkStatus === NetworkStatus.refetch,
    posts5: [...posts.slice(0, 5), ...posts.slice(6)],
    updatePosts
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
