import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/store/services/supabase";

const subjectsApi = createApi({
  reducerPath: "subjectsApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["Subjects"],
  endpoints: (builder) => ({
    getSubjects: builder.query({
      async queryFn() {
        const { data, error } = await supabase.from("subjects").select("*");
        if (error) console.error(error);
        return { data };
      },
      providesTags: ["Subjects"],
    }),
    updateSubject: builder.mutation({
      async queryFn({ subjectId, favorite }) {
        const { error } = await supabase
          .from("subjects")
          .update({ favorite: !favorite })
          .eq("id", subjectId)
          .select();

        if (error) return { error };
        return;
      },
      invalidatesTags: ["Subjects"],
    }),
    getFavoriteSubjects: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("subjects")
          .select("*")
          .eq("favorite", true);
        if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const {
  useGetSubjectsQuery,
  useUpdateSubjectMutation,
  useGetFavoriteSubjectsQuery,
} = subjectsApi;
export default subjectsApi;
