import type { Episode } from "./Episode"

export type User = {
    username: string | null
    email: string | null
    bio: string | null
    dateOfRegistration: string | null
    streamingData: StreamingData[] | null
    spotifyConnected: boolean
}

export type StreamingData = {
    episode: Episode
    timestamp: string
}