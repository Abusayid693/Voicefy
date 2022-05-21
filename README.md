# Voicefy  [Deployed Link]()


This repository contains a backend code and client code for Voicefy application built using [Node JS](), [postgresSQL with Amazon RDS](), [Next js]() etc.


![Preview](https://i.imgur.com/HowG3i8.png)

## Prerequisites

- [NodeJS]() version 14+
- [PostgresSQL]()
- [Redis]()
- [AWS]

## GraphQL

- Getting Started

```bash
yarn install
# Followed by
npm run watch
# Followed by
npm run dev
```

- For Migration

```bash
npm run create:migration
```

- GraphQL Playground

```http 
http://localhost:4000/graphql
```

## GraphQL Queries

1. Login

```graphql
  mutation {
    login(options:{
      password:"fgdhgfh",
      username:"gdfbfg"
    }){
      errors{
        field
        message
      }
      user{
        username
      }
    }
  }
```

2. Register

```graphql
mutation {
    register(options:{
      password:"jknbjklk",
      username:"hjuhbmn kjbhvbnm,,mknbknjmn m"
    }){
      errors{
        field
        message
      }
      user{
        username
      }
    }
  }
```

## Isolated routes

1. S3 Image Upload
```bash
# File accepted as body
http://localhost:4000/upload
```

2. TTS Voice Routes
```bash
# file accepted as body
http://localhost:4000/tts

# Required body 

{
"provider":"aws", # aws or ibm
 "ssmlText" : "Testing voice",
 "VoiceId" : "Aditi",
 "lan" :"arb"  
}

# Response
{
  "success" : true,
  "url" : "https://............s3.ap-south-1.amazonaws.com/........
}
```