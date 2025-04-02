import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/supabase/supabase";

const purchasedSubjectsApi = createApi({
  reducerPath: "purchasedSubjectsApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["purchasedSubjectsApi"],
  endpoints: (builder) => ({
    getPurchasedSubjects: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("subjects")
          .select("*")
          .eq("is_purchased", true);
        if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const { useGetPurchasedSubjectsQuery } = purchasedSubjectsApi;
export default purchasedSubjectsApi;
