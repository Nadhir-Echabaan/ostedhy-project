// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";

export const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLastUploadedChapters: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("chapters")
          .select("*,teachers(*)")
          .order("created_at", { ascending: false })
          .limit(4);
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "chapters", id: "LIST" }],
    }),
    getExpireSoon: builder.query({
      queryFn: async () => {
        const { data: recordings, error: recordingsError } = await supabase
          .from("live_sessions")
          .select("*")  
          .eq("bought", true)
          .eq("with_records", true)
          .lt("end_at", new Date().toISOString());
        if (recordingsError) return { recordingsError };
        const { data: subjects, error: subjectsError } = await supabase
          .from("subjects")
          .select("*")
          .eq("bought", true)
          .gt("expiration_date", new Date().toISOString());
        if (subjectsError) return { subjectsError };
        return { data: { recordings, subjects } };
      },
      providesTags: [{ type: "subjects", id: "LIST" }],
    }),
    getSessionsBySelectedDate: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("live_sessions")
          .select("*,subjects(subject_name),teachers(fullname)");
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "sesions_selected_by_date", id: "LIST" }],
    }),
  }),
});

export const {
  useGetLastUploadedChaptersQuery,
  useGetExpireSoonQuery,
  useGetSessionsBySelectedDateQuery,
} = dashboardApi;
