# Eather-Server application  [Deployed Link]()


This repository contains a backend code for Eather application built using [Node JS](), [postgresSQL with Amazon RDS](), [Redis]() for session management etc.


## Prerequisites

- [NodeJS]() version 14+
- [PostgresSQL]()
- [Redis]()

## Get Database Ready

Connect With PostgresSQL and run the following initial queries

```sql
create table "post" (
    "id" serial primary key,
    "created_at" timestamptz(0) not null,
    "updated_at" timestamptz(0) not null,
    "title" text not null
);

  create table "user" (
    "id" serial primary key,
    "created_at" timestamptz(0) not null,
    "updated_at" timestamptz(0) not null,
    "username" text not null,
    "password" text not null
);
alter table
    "user"
add
    constraint "user_username_unique" unique ("username");
  
-- ...... MORE QUERIES IN MIGRATION
```

## Guide

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
