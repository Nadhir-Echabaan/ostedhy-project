import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import supabase from '../../shared/supabase/supabase'

const sessionsGroupeApi = createApi({
  reducerPath: 'sessionsGroupeApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['sessionsGroupe'],
  endpoints: (builder) => ({
    getSessionsGroupe: builder.query({
      async queryFn({groupeSessionId}) {
        const { data, error } = await supabase.from('live_sessions_grp').select('*,subjects(*),teachers(*)').eq("id",groupeSessionId).single();
        if (error) console.error(error)
        return { data }
      },
    }),
  }),
})

export const { useGetSessionsGroupeQuery } = sessionsGroupeApi
export default sessionsGroupeApi