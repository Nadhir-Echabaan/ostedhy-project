// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";

export const libraryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPurchasedSubjects: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("subjects")
          .select("*")
          .eq("bought", true)
          .order("id", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "subjects", id: "LIST" }],
    }),
    getPurchasedChapters: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("chapters")
          .select("*,subjects(*),teachers(*)")
          .eq("bought_indiv", true)
          .order("id", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "chapters", id: "LIST" }],
    }),
    getRecordings: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("live_sessions")
          .select("*,subjects(*),teachers(*)")
          .eq("bought", true)
          .eq("with_records", true)
          .lt("end_at", new Date().toISOString())
          .order("id", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "live_sessions", id: "LIST" }],
    }),
    getFavoriteChapters: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("chapters")
          .select("*,subjects(*),teachers(*)")
          .eq("favorite", true);
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "chapters", id: "LIST" }],
    }),
    getFavoriteSubjects: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("subjects")
          .select("*")
          .eq("favorite", true);

        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "subjects", id: "LIST" }],
    }),
    getFavoriteRecordings: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("live_sessions")
          .select("*,subjects(*),teachers(*)")
          .eq("bought", true)
          .eq("with_records", true)
          .eq("favorite", true)
          .lt("end_at", new Date().toISOString())
          .order("id", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "live_sessions", id: "LIST" }],
    }),
  }),
});
export const {
  useGetPurchasedSubjectsQuery,
  useGetPurchasedChaptersQuery,
  useGetRecordingsQuery,
  useGetFavoriteChaptersQuery,
  useGetFavoriteSubjectsQuery,
  useGetFavoriteRecordingsQuery,
} = libraryApi;
