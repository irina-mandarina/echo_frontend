import { gql } from 'nuxt-graphql-request/utils';
const { $graphql } = useNuxtApp();

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
    `;
  
    if (fields && fields.length > 0) {
      userFields = fields.join('\n');
    }
  
    return gql`
      query GetUser($username: String!) {
        getUser(username: $username) {
          ${userFields}
        }
      }
    `;
  }
  

export async function getUser(username: string | undefined, fields: string[] | undefined = undefined) {
  // @ts-ignore
  const user = await $graphql.default.request(generateUserQuery(fields), { username });
  console.log(user)
  return user;
}