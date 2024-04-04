export type User = {
    username: string | null
    email: string | null
    bio: string | null
    dateOfRegistration: string | null
    streamingData: StreamingData | null
    spotifyConnected: boolean
}

export type Episode = {
    id: string
    title: string
    description: string
    audioPreviewUrl: string
    uri: string
    images: Image[]
    show: Show
}

export type Show = {
    id: string
    uri: string
    name: string
    publisher: string
    description: string
    totalEpisodes: number
    images: Image[]
}

export type Image = {
    url: string
    width: number
    height: number
}

export type StreamingData = {
    episode: Episode
    timestamp: string
}