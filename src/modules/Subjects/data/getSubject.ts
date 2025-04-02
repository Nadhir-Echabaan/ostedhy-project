import { createApi } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/supabase/supabase";

const subjectApi = createApi({
  reducerPath: "subjectApi",
  baseQuery: async () => ({ data: null }), 
  tagTypes: ["Subject"], 
  endpoints: (builder) => ({
    getSubject: builder.query({
      async queryFn({ subjectId }) {
        const { data, error } = await supabase
          .from("subjects")
          .select("*")
          .eq("id", subjectId)
          .single();

        if (error) return { error };
        return { data };
      },
      providesTags: ["Subject"],
    }),
  }),
});

export const { useGetSubjectQuery } = subjectApi;
export default subjectApi;
