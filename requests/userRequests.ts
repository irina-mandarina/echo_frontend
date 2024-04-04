import { request, gql } from 'graphql-request'
import { getJWT } from '~/lib/localStorageUtil'
    
const graphqlEndpoint = "http://localhost:8080/graphql"

function generateUserQuery(fields: string[] | undefined = undefined) {
  let userFields = `
    id
    username
    email
    bio
    dateOfRegistration
    streamingData {
      episode {
        id
        title
        description
        audioPreviewUrl
        uri
        images {
          url
          width
          height
        }
        show {
          id
          uri
          name
          publisher
          description
          totalEpisodes
          images {
            url
            width
            height
          }
        }
      }
      timestamp
    }
  `

  if (fields && fields.length > 0) {
    userFields = fields.join('\n')
  }

  return gql`
    query GetUser($username: String) {
      getUser(username: $username) {
        ${userFields}
      }
    }
  `
}

export async function getUser(username: string | undefined = undefined, fields: string[] | undefined = undefined): Promise<any> {
  const userQuery = generateUserQuery(fields)
  
  const requestHeaders = {
    'Authorization': `Bearer ${getJWT()}`
  }

  const variables = { username }
  const { getUser }  = await request(graphqlEndpoint!, userQuery, variables, requestHeaders) as { getUser: any }
  console.log(getUser)
  return getUser
}

export async function logIn(username: string, password: string): Promise<any> {
  const loginMutation = gql`
    mutation LogIn($username: String!, $password: String!) {
      logIn(username: $username, password: $password) {
        jwt
        user {
          username
          email
          bio
          dateOfRegistration
          streamingData {
            episode {
              id
              title
              description
              audioPreviewUrl
              uri
              images {
                url
                width
                height
              }
              show {
                id
                uri
                name
                publisher
                description
                totalEpisodes
                images {
                  url
                  width
                  height
                }
              }
            }
            timestamp
        }
      }

    }
  }
  `
  const requestHeaders = {
    'Authorization': `Bearer ${getJWT()}`
  }
  const variables = { username, password }
  const { logIn } = await request(graphqlEndpoint, loginMutation, variables) as { logIn: any }
  console.log(logIn)
  return logIn
}

export async function signUp(username: string, email: string, password: string): Promise<any> {
  const signUpMutation = gql`
    mutation SignUp($username: String!, $email: String!, $password: String!) {
      signUp(username: $username, email: $email, password: $password) {
        jwt
        user {
          username
          email
          bio
          dateOfRegistration
          streamingData {
            episode {
              id
              title
              description
              audioPreviewUrl
              uri
              images {
                url
                width
                height
              }
              show {
                id
                uri
                name
                publisher
                description
                totalEpisodes
                images {
                  url
                  width
                  height
                }
              }
            }
            timestamp
          }
        }
      }
    }
  `
  const requestHeaders = {
    'Authorization': `Bearer ${getJWT()}`
  }
  const variables = { username, email, password }
  const { signUp } = await request(graphqlEndpoint, signUpMutation, variables) as { signUp: any }
  console.log(signUp)
  return signUp
}

