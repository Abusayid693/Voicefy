![](https://socialify.git.ci/Abusayid693/Voicefy/image?description=1&issues=1&language=1&name=1&owner=1&pulls=1&theme=Light)
# Voicefy 
Voicefy is a web-application that allows users to generate best audio experiences with cloud services and store them in cloud. The application uses Modern frontend and backed development tools. The application handles user authentication and uses Relational database to store data.

### Note : Navigate to client-ui folder for react app

## ⚙️ Features
- User Authentication
- Analytics
- Cloud storage
- Text to speech
- Audio player

## 📸 Screenshots

|||
|:----------------------------------------:|:-----------------------------------------:|
| ![Imgur](https://i.imgur.com/XlI0bFO.png) | ![Imgur](https://i.imgur.com/8Fx13uy.png) |
| ![Imgur](https://i.imgur.com/DZU0GK5.png) | ![Imgur](https://i.imgur.com/zZFIr12.png) |
| ![Imgur](https://i.imgur.com/HowG3i8.png) | ![Imgur](https://i.imgur.com/HHpVUar.png) |
| ![Imgur](https://i.imgur.com/7qskagQ.png) | ![](https://i.imgur.com/NZViRzL.png)

## Built With 🛠
- [NodeJS](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environmen
- [Postgres SQL](https://www.postgresql.org) - A relational database management system emphasizing extensibility and SQL
- [AWS](https://aws.amazon.com)
  - [AWS Polly](https://aws.amazon.com/polly/) - Amazon Polly is a cloud service by Amazon Web Services, a subsidiary of Amazon.com, that converts text into spoken audio.
  - [AWS S3](https://aws.amazon.com/s3/) - Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services
  - [AWS RDS](https://aws.amazon.com/rds/) - Amazon Relational Database Service is a distributed relational database service by Amazon Web Services. 
  - [AWS EC2](https://aws.amazon.com/ec2/) - Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) Cloud.
- [IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech) - cloud service that enables you to convert written text into natural-sounding audio in a variety of languages and voices
- [GrapgQL](https://graphql.org) - GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data
- [Next js](https://nextjs.org) - Next.js is an open-source web development framework created by Vercel enabling React-based web applications

## Prerequisites

- [NodeJS](https://nodejs.org/en/) version 14+
- [PostgresSQL](https://www.postgresql.org)
- [AWS](https://aws.amazon.com)

## Getting Started

- Install and run

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

3. Analytics

```graphql
query total {
  analyticsTotalSavedVoices
}

query totalTotalVoicesUsed {
  analyticsTotalVoicesUsed {
    key
    count
  }
}

query totalLanguagesUsed {
  analyticsTotalLanguagesUsed {
    key
    count
  }
}

query totalGenderUsed {
  analyticsTotalGenderUsed {
    key
    count
  }
}

query totalServicesUsed {
  analyticsTotalServicesUsed {
    key
    count
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

