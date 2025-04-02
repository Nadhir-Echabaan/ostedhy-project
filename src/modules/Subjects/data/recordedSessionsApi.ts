import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/supabase/supabase";

const recordedSessionsApi = createApi({
  reducerPath: "recordedSessionsApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["RecordedSessions"],
  endpoints: (builder) => ({
    getRecordedSessions: builder.query({
      async queryFn({ subjectId }) {
        const { data, error } = await supabase
          .from("recorded_live_sessions")
          .select(
            "*, subjects(*), live_sessions_grp(live_sessions, teacher_id)"
          )
          .eq("subject_id", subjectId);
        if (error) console.error(error);
        return { data };
      },
      providesTags: ["RecordedSessions"],
    }),
    updateRecordedSession: builder.mutation({
      async queryFn({ recordedSessionId, favorite }) {
        const { error } = await supabase
          .from("recorded_live_sessions")
          .update({ favorite: !favorite })
          .eq("id", recordedSessionId);
        if (error) return { error };
        return { data: null };
      },
      invalidatesTags: ["RecordedSessions"],
    }),
    getFavoriteRecordedSessions: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("recorded_live_sessions")
          .select("*,subjects(*),live_sessions_grp(live_sessions, teacher_id)")
          .eq("favorite", true);
        if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const { useGetRecordedSessionsQuery, useUpdateRecordedSessionMutation , useGetFavoriteRecordedSessionsQuery} =
  recordedSessionsApi;
export default recordedSessionsApi;
