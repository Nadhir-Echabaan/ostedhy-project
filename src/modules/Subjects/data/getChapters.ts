import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/store/services/supabase";

const chaptersApi = createApi({
  reducerPath: "chaptersApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["Chapters"], // Define cache tags
  endpoints: (builder) => ({
    getChapters: builder.query({
      async queryFn({ subjectId }) {
        const { data, error } = await supabase
          .from("chapters")
          .select("*, subjects(*), teachers(*)")
          .eq("subject_id", subjectId);
        if (error) console.error(error);
        return { data };
      },
      providesTags: ["Chapters"],
    }),
    updateChapter: builder.mutation({
      async queryFn({ chapterId, favorite }) {
        const { error } = await supabase
          .from("chapters")
          .update({ favorite: !favorite })
          .eq("id", chapterId);

        if (error) return { error };
        return { data: null };
      },
      invalidatesTags: ["Chapters"],
    }),
    getFavoriteChapters: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("chapters")
          .select("*,subjects(*), teachers(*)")
          .eq("favorite", true);
        if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const {
  useGetChaptersQuery,
  useUpdateChapterMutation,
  useGetFavoriteChaptersQuery,
} = chaptersApi;
export default chaptersApi;
