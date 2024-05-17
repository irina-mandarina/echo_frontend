<template>
    <button class="absolute inset-[16%] flex flex-col w-2/3 block bg-echo-white rounded-xl shadow-lg">
        <i
            class="absolute top-2 right-3 fas fa-times my-auto hover:text-orange-600 duration-100 cursor-pointer"
            @click="$emit('close')"
        ></i>
        <!-- sector titles -->
        <div class="w-full h-min justify-evenly flex border-b border-b-1 border-b-echo-gray font-lato-bold">
            <span
                v-for="i in resultPages"
                :class="`cursor-pointer border-b border-b-2 py-2 px-4 ${resultPage == i ? 'border-b-echo-orange' : 'border-b-echo-gray'}`"
                @click="resultPage = i"
            >
                {{ i }}
            </span>
        </div>
        <div class="p-3">
         <EpisodeSearchResult v-if="resultPage === resultPages[0]" v-for="episode in episodeResults" :episode="episode" />
         <PodcastSearchResult v-if="resultPage === resultPages[1]" v-for="podcast in podcastResults" :podcast="podcast" />
         <UserSearchResult v-if="resultPage === resultPages[2]" v-for="user in userResults" :user="user" />
        </div>
    </button>
</template>

<script setup lang="ts">
    import { GraphQLError } from 'graphql';
    import type { ComputedGetter } from 'vue';
    import type { Episode, EpisodeSearchResult } from '~/models/Episode';
    import type { Show, ShowSearchResult } from '~/models/Show';
    import type { User } from '~/models/User';
    import { getEpisodes, getShows } from '~/requests/spotifyRequests';
    import { getUsers } from '~/requests/userRequests';

    const props = defineProps<{ query: string }>()
    
    const resultPages = ['Podcasts', 'Episodes', 'Profiles']
    const resultPage = ref(resultPages[0])

    const podcastResults = ref<ShowSearchResult[]>([])
    const episodeResults = ref<EpisodeSearchResult[]>([])
    const userResults = ref<User[]>([])

    watch(() => props.query, async () => {
        await updateResults()
    })

    watch(() => resultPage.value, async () => {
        await updateResults()
    })

    async function updateResults() {
        if (!props.query) return
        if (resultPage.value === resultPages[0]) {
            try {
                podcastResults.value = await getShows(props.query, 10, 1)
            } catch (error: any) {
                console.error(error)
                if (error.response.status) {
                    navigateTo('/login')
                }
            }
        } 
        else if (resultPage.value === resultPages[1]) {
            try {
                episodeResults.value = await getEpisodes(props.query, 10, 1)
            } catch (error: any) {
                console.error(error)
                if (error.response.status) {
                    navigateTo('/login')
                }
            }
        } 
        else if (resultPage.value === resultPages[2]) {
            try {
                userResults.value = await getUsers(props.query)
                console.log('userResults', userResults.value)
            } catch (error: any) {
                console.error(error)
                if (error.response.status) {
                    navigateTo('/login')
                }
            } 
        }
    }
</script>

<style scoped>

</style>