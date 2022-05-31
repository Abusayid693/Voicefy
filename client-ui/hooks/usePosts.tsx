import {createContext, useContext} from 'react';

export const PostsContext = createContext<any>(null);

function usePosts() {
  return useContext(PostsContext);
}

export default usePosts;
