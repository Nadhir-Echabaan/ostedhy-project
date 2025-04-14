import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/store/services/supabase";

const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["teacher"],
  endpoints: (builder) => ({
    getTeacher: builder.query({
      async queryFn({ teacherIdProperty }) {
        const { data, error } = await supabase
          .from("teachers")
          .select("*")
          .eq("id", teacherIdProperty);
        if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const { useGetTeacherQuery } = teacherApi;
export default teacherApi;
