import request, { gql } from "graphql-request"
import { getJWT } from "~/lib/localStorageUtil"
import type { User } from "~/models/User"
import type { EpisodeSearchResult } from "~/models/Episode"
import type { ShowSearchResult } from "~/models/Show"

const graphqlEndpoint = "http://localhost:8080/graphql"

// Define the GraphQL query for getting episodes
const GET_EPISODES_QUERY = gql`
    query GetEpisodes($query: String, $limit: Int, $offset: Int) {
        getEpisodes(query: $query, limit: $limit, offset: $offset) {
            name
            episode {
                show {
                    name
                }
                release_date
                images {
                    url
                }
                uri
                id
                description
            }
        }
    }
`;

// Define your function to fetch episodes
export async function getEpisodes(query: string, limit: number, offset: number): Promise<EpisodeSearchResult[]> {
    const requestHeaders = {
        'Authorization': `Bearer ${getJWT()}`
    };

    const variables = { query, limit, offset };

    try {
        const response: any = await request(graphqlEndpoint!, GET_EPISODES_QUERY, variables, requestHeaders);
        
        // Transform the received data to match EpisodeSearchResult
        const episodes: EpisodeSearchResult[] = response?.getEpisodes?.map((episode: any) => ({
            name: episode.name,
            show: episode.episode.show.name,
            release_date: new Date(episode.episode.release_date),
            images: episode.episode.images,
            uri: episode.episode.uri,
            id: episode.episode.id,
            description: episode.episode.description,
        }));
        return episodes;
    } catch (error) {
        console.error('Error fetching episodes:', error);
        return [];
    }
}

const GET_SHOWS_QUERY = gql`
    query GetShows($query: String, $limit: Int, $offset: Int) {
        getShows(query: $query, limit: $limit, offset: $offset) {
            name
            publisher
            images {
                url
            }
            uri
            id
            description
        }
    }
`;

// Define your function to fetch shows
export async function getShows(query: string, limit: number, offset: number): Promise<ShowSearchResult[]> {
    const requestHeaders = {
        'Authorization': `Bearer ${getJWT()}`
    };

    const variables = { query, limit, offset };

    try {
        const { getShows } : any = await request(graphqlEndpoint!, GET_SHOWS_QUERY, variables, requestHeaders);
        // Transform the received data to match ShowSearchResult
        const shows: ShowSearchResult[] = getShows.map((show: any) => ({
            name: show.name,
            publisher: show.publisher,
            images: show.images,
            uri: show.uri,
            id: show.id,
            description: show.description,
        }));
        return shows;
    } catch (error) {
        console.error('Error fetching shows:', error);
        return [];
    }
}