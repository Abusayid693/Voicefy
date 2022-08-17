import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EatherUser = {
  __typename?: 'EatherUser';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ItotalServicesUsed = {
  __typename?: 'ItotalServicesUsed';
  count: Scalars['String'];
  key: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPosts: Post;
  deletePost: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  updatePost?: Maybe<Post>;
};

export type MutationCreatePostsArgs = {
  gender: Scalars['String'];
  language: Scalars['String'];
  service: Scalars['String'];
  url: Scalars['String'];
  voiceId: Scalars['String'];
};

export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};

export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};

export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  voiceId?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['String'];
  creatorId: Scalars['Float'];
  gender: Scalars['String'];
  id: Scalars['Float'];
  language: Scalars['String'];
  service: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
  voiceId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Me?: Maybe<EatherUser>;
  analyticsTotalGenderUsed?: Maybe<Array<ItotalServicesUsed>>;
  analyticsTotalLanguagesUsed?: Maybe<Array<ItotalServicesUsed>>;
  analyticsTotalSavedVoices?: Maybe<Scalars['String']>;
  analyticsTotalServicesUsed?: Maybe<Array<ItotalServicesUsed>>;
  analyticsTotalVoicesUsed?: Maybe<Array<ItotalServicesUsed>>;
  hello: Scalars['String'];
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
};

export type QueryHelloArgs = {
  options: Scalars['String'];
};

export type QueryPostArgs = {
  id: Scalars['Float'];
};

export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<EatherUser>;
};

export type UsernamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreatePostMutationVariables = Exact<{
  language: Scalars['String'];
  service: Scalars['String'];
  gender: Scalars['String'];
  voiceId: Scalars['String'];
  url: Scalars['String'];
}>;

export type CreatePostMutation = {
  __typename?: 'Mutation';
  createPosts: {
    __typename?: 'Post';
    language: string;
    service: string;
    gender: string;
    url: string;
    createdAt: string;
    voiceId: string;
  };
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'UserResponse';
    token?: string | null | undefined;
    errors?:
      | Array<{__typename?: 'FieldError'; field: string; message: string}>
      | null
      | undefined;
    user?: {__typename?: 'EatherUser'; username: string} | null | undefined;
  };
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register: {
    __typename?: 'UserResponse';
    token?: string | null | undefined;
    errors?:
      | Array<{__typename?: 'FieldError'; field: string; message: string}>
      | null
      | undefined;
    user?: {__typename?: 'EatherUser'; username: string} | null | undefined;
  };
};

export type AnalyticsTotalGenderUsedQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AnalyticsTotalGenderUsedQuery = {
  __typename?: 'Query';
  analyticsTotalGenderUsed?:
    | Array<{__typename?: 'ItotalServicesUsed'; key: string; count: string}>
    | null
    | undefined;
};

export type AnalyticsTotalLanguagesUsedQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AnalyticsTotalLanguagesUsedQuery = {
  __typename?: 'Query';
  analyticsTotalLanguagesUsed?:
    | Array<{__typename?: 'ItotalServicesUsed'; key: string; count: string}>
    | null
    | undefined;
};

export type AnalyticsTotalSavedVoicesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AnalyticsTotalSavedVoicesQuery = {
  __typename?: 'Query';
  analyticsTotalSavedVoices?: string | null | undefined;
};

export type AnalyticsTotalServicesUsedQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AnalyticsTotalServicesUsedQuery = {
  __typename?: 'Query';
  analyticsTotalServicesUsed?:
    | Array<{__typename?: 'ItotalServicesUsed'; key: string; count: string}>
    | null
    | undefined;
};

export type AnalyticsTotalVoicesUsedQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AnalyticsTotalVoicesUsedQuery = {
  __typename?: 'Query';
  analyticsTotalVoicesUsed?:
    | Array<{__typename?: 'ItotalServicesUsed'; key: string; count: string}>
    | null
    | undefined;
};

export type AuthTestingQueryVariables = Exact<{[key: string]: never}>;

export type AuthTestingQuery = {__typename?: 'Query'; hello: string};

export type PostsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;

export type PostsQuery = {
  __typename?: 'Query';
  posts?:
    | Array<{
        __typename?: 'Post';
        language: string;
        service: string;
        gender: string;
        url: string;
        createdAt: string;
        voiceId: string;
      }>
    | null
    | undefined;
};

export type SessionCheckQueryVariables = Exact<{[key: string]: never}>;

export type SessionCheckQuery = {
  __typename?: 'Query';
  Me?:
    | {__typename?: 'EatherUser'; id: number; username: string; email: string}
    | null
    | undefined;
};

export const CreatePostDocument = gql`
  mutation createPost(
    $language: String!
    $service: String!
    $gender: String!
    $voiceId: String!
    $url: String!
  ) {
    createPosts(
      language: $language
      service: $service
      gender: $gender
      url: $url
      voiceId: $voiceId
    ) {
      language
      service
      gender
      url
      createdAt
      voiceId
    }
  }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      language: // value for 'language'
 *      service: // value for 'service'
 *      gender: // value for 'gender'
 *      voiceId: // value for 'voiceId'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(options: {password: $password, username: $username}) {
      errors {
        field
        message
      }
      user {
        username
      }
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($username: String!, $password: String!) {
    register(options: {password: $password, username: $username}) {
      errors {
        field
        message
      }
      user {
        username
      }
      token
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const AnalyticsTotalGenderUsedDocument = gql`
  query analyticsTotalGenderUsed {
    analyticsTotalGenderUsed {
      key
      count
    }
  }
`;

/**
 * __useAnalyticsTotalGenderUsedQuery__
 *
 * To run a query within a React component, call `useAnalyticsTotalGenderUsedQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnalyticsTotalGenderUsedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnalyticsTotalGenderUsedQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnalyticsTotalGenderUsedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AnalyticsTotalGenderUsedQuery,
    AnalyticsTotalGenderUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    AnalyticsTotalGenderUsedQuery,
    AnalyticsTotalGenderUsedQueryVariables
  >(AnalyticsTotalGenderUsedDocument, options);
}
export function useAnalyticsTotalGenderUsedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AnalyticsTotalGenderUsedQuery,
    AnalyticsTotalGenderUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    AnalyticsTotalGenderUsedQuery,
    AnalyticsTotalGenderUsedQueryVariables
  >(AnalyticsTotalGenderUsedDocument, options);
}
export type AnalyticsTotalGenderUsedQueryHookResult = ReturnType<
  typeof useAnalyticsTotalGenderUsedQuery
>;
export type AnalyticsTotalGenderUsedLazyQueryHookResult = ReturnType<
  typeof useAnalyticsTotalGenderUsedLazyQuery
>;
export type AnalyticsTotalGenderUsedQueryResult = Apollo.QueryResult<
  AnalyticsTotalGenderUsedQuery,
  AnalyticsTotalGenderUsedQueryVariables
>;
export const AnalyticsTotalLanguagesUsedDocument = gql`
  query analyticsTotalLanguagesUsed {
    analyticsTotalLanguagesUsed {
      key
      count
    }
  }
`;

/**
 * __useAnalyticsTotalLanguagesUsedQuery__
 *
 * To run a query within a React component, call `useAnalyticsTotalLanguagesUsedQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnalyticsTotalLanguagesUsedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnalyticsTotalLanguagesUsedQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnalyticsTotalLanguagesUsedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AnalyticsTotalLanguagesUsedQuery,
    AnalyticsTotalLanguagesUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    AnalyticsTotalLanguagesUsedQuery,
    AnalyticsTotalLanguagesUsedQueryVariables
  >(AnalyticsTotalLanguagesUsedDocument, options);
}
export function useAnalyticsTotalLanguagesUsedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AnalyticsTotalLanguagesUsedQuery,
    AnalyticsTotalLanguagesUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    AnalyticsTotalLanguagesUsedQuery,
    AnalyticsTotalLanguagesUsedQueryVariables
  >(AnalyticsTotalLanguagesUsedDocument, options);
}
export type AnalyticsTotalLanguagesUsedQueryHookResult = ReturnType<
  typeof useAnalyticsTotalLanguagesUsedQuery
>;
export type AnalyticsTotalLanguagesUsedLazyQueryHookResult = ReturnType<
  typeof useAnalyticsTotalLanguagesUsedLazyQuery
>;
export type AnalyticsTotalLanguagesUsedQueryResult = Apollo.QueryResult<
  AnalyticsTotalLanguagesUsedQuery,
  AnalyticsTotalLanguagesUsedQueryVariables
>;
export const AnalyticsTotalSavedVoicesDocument = gql`
  query analyticsTotalSavedVoices {
    analyticsTotalSavedVoices
  }
`;

/**
 * __useAnalyticsTotalSavedVoicesQuery__
 *
 * To run a query within a React component, call `useAnalyticsTotalSavedVoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnalyticsTotalSavedVoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnalyticsTotalSavedVoicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnalyticsTotalSavedVoicesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AnalyticsTotalSavedVoicesQuery,
    AnalyticsTotalSavedVoicesQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    AnalyticsTotalSavedVoicesQuery,
    AnalyticsTotalSavedVoicesQueryVariables
  >(AnalyticsTotalSavedVoicesDocument, options);
}
export function useAnalyticsTotalSavedVoicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AnalyticsTotalSavedVoicesQuery,
    AnalyticsTotalSavedVoicesQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    AnalyticsTotalSavedVoicesQuery,
    AnalyticsTotalSavedVoicesQueryVariables
  >(AnalyticsTotalSavedVoicesDocument, options);
}
export type AnalyticsTotalSavedVoicesQueryHookResult = ReturnType<
  typeof useAnalyticsTotalSavedVoicesQuery
>;
export type AnalyticsTotalSavedVoicesLazyQueryHookResult = ReturnType<
  typeof useAnalyticsTotalSavedVoicesLazyQuery
>;
export type AnalyticsTotalSavedVoicesQueryResult = Apollo.QueryResult<
  AnalyticsTotalSavedVoicesQuery,
  AnalyticsTotalSavedVoicesQueryVariables
>;
export const AnalyticsTotalServicesUsedDocument = gql`
  query analyticsTotalServicesUsed {
    analyticsTotalServicesUsed {
      key
      count
    }
  }
`;

/**
 * __useAnalyticsTotalServicesUsedQuery__
 *
 * To run a query within a React component, call `useAnalyticsTotalServicesUsedQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnalyticsTotalServicesUsedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnalyticsTotalServicesUsedQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnalyticsTotalServicesUsedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AnalyticsTotalServicesUsedQuery,
    AnalyticsTotalServicesUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    AnalyticsTotalServicesUsedQuery,
    AnalyticsTotalServicesUsedQueryVariables
  >(AnalyticsTotalServicesUsedDocument, options);
}
export function useAnalyticsTotalServicesUsedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AnalyticsTotalServicesUsedQuery,
    AnalyticsTotalServicesUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    AnalyticsTotalServicesUsedQuery,
    AnalyticsTotalServicesUsedQueryVariables
  >(AnalyticsTotalServicesUsedDocument, options);
}
export type AnalyticsTotalServicesUsedQueryHookResult = ReturnType<
  typeof useAnalyticsTotalServicesUsedQuery
>;
export type AnalyticsTotalServicesUsedLazyQueryHookResult = ReturnType<
  typeof useAnalyticsTotalServicesUsedLazyQuery
>;
export type AnalyticsTotalServicesUsedQueryResult = Apollo.QueryResult<
  AnalyticsTotalServicesUsedQuery,
  AnalyticsTotalServicesUsedQueryVariables
>;
export const AnalyticsTotalVoicesUsedDocument = gql`
  query analyticsTotalVoicesUsed {
    analyticsTotalVoicesUsed {
      key
      count
    }
  }
`;

/**
 * __useAnalyticsTotalVoicesUsedQuery__
 *
 * To run a query within a React component, call `useAnalyticsTotalVoicesUsedQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnalyticsTotalVoicesUsedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnalyticsTotalVoicesUsedQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnalyticsTotalVoicesUsedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AnalyticsTotalVoicesUsedQuery,
    AnalyticsTotalVoicesUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    AnalyticsTotalVoicesUsedQuery,
    AnalyticsTotalVoicesUsedQueryVariables
  >(AnalyticsTotalVoicesUsedDocument, options);
}
export function useAnalyticsTotalVoicesUsedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AnalyticsTotalVoicesUsedQuery,
    AnalyticsTotalVoicesUsedQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    AnalyticsTotalVoicesUsedQuery,
    AnalyticsTotalVoicesUsedQueryVariables
  >(AnalyticsTotalVoicesUsedDocument, options);
}
export type AnalyticsTotalVoicesUsedQueryHookResult = ReturnType<
  typeof useAnalyticsTotalVoicesUsedQuery
>;
export type AnalyticsTotalVoicesUsedLazyQueryHookResult = ReturnType<
  typeof useAnalyticsTotalVoicesUsedLazyQuery
>;
export type AnalyticsTotalVoicesUsedQueryResult = Apollo.QueryResult<
  AnalyticsTotalVoicesUsedQuery,
  AnalyticsTotalVoicesUsedQueryVariables
>;
export const AuthTestingDocument = gql`
  query AuthTesting {
    hello(options: "testing")
  }
`;

/**
 * __useAuthTestingQuery__
 *
 * To run a query within a React component, call `useAuthTestingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthTestingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthTestingQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthTestingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AuthTestingQuery,
    AuthTestingQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<AuthTestingQuery, AuthTestingQueryVariables>(
    AuthTestingDocument,
    options
  );
}
export function useAuthTestingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthTestingQuery,
    AuthTestingQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<AuthTestingQuery, AuthTestingQueryVariables>(
    AuthTestingDocument,
    options
  );
}
export type AuthTestingQueryHookResult = ReturnType<typeof useAuthTestingQuery>;
export type AuthTestingLazyQueryHookResult = ReturnType<
  typeof useAuthTestingLazyQuery
>;
export type AuthTestingQueryResult = Apollo.QueryResult<
  AuthTestingQuery,
  AuthTestingQueryVariables
>;
export const PostsDocument = gql`
  query Posts($limit: Int!) {
    posts(limit: $limit) {
      language
      service
      gender
      url
      createdAt
      voiceId
    }
  }
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
export const SessionCheckDocument = gql`
  query SessionCheck {
    Me {
      id
      username
      email
    }
  }
`;

/**
 * __useSessionCheckQuery__
 *
 * To run a query within a React component, call `useSessionCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionCheckQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionCheckQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SessionCheckQuery,
    SessionCheckQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<SessionCheckQuery, SessionCheckQueryVariables>(
    SessionCheckDocument,
    options
  );
}
export function useSessionCheckLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SessionCheckQuery,
    SessionCheckQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<SessionCheckQuery, SessionCheckQueryVariables>(
    SessionCheckDocument,
    options
  );
}
export type SessionCheckQueryHookResult = ReturnType<
  typeof useSessionCheckQuery
>;
export type SessionCheckLazyQueryHookResult = ReturnType<
  typeof useSessionCheckLazyQuery
>;
export type SessionCheckQueryResult = Apollo.QueryResult<
  SessionCheckQuery,
  SessionCheckQueryVariables
>;
