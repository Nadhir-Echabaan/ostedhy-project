import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/supabase/supabase";

const levelApi = createApi({
  reducerPath: "levelApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["level"],
  endpoints: (builder) => ({
    getLevel: builder.query({
      async queryFn({ levelIdProperty }) {
        const { data, error } = await supabase
          .from("level")
          .select("level")
          .eq("id", levelIdProperty);
        if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const { useGetLevelQuery } = levelApi;
export default levelApi;
