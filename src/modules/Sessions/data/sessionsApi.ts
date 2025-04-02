import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import supabase from '../../shared/supabase/supabase'

const sessionsApi = createApi({
  reducerPath: 'sessionsApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['sessions'],
  endpoints: (builder) => ({
    getLiveSessions: builder.query({
      async queryFn() {
        const { data, error } = await supabase.from('live_sessions_grp').select('live_sessions,id, subjects(subject_name), teachers(fullName)')
        if (error) console.error(error)
        return { data }
      },
    }),
  }),
})

export const { useGetLiveSessionsQuery } = sessionsApi
export default sessionsApi