import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/supabase/supabase";

const purchasedChaptersApi = createApi({
  reducerPath: "purchasedChaptersApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["purchasedChaptersApi"],
  endpoints: (builder) => ({
    getPurchasedChapters: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("chapters")
          .select("*, subjects(*), teachers(*)"); 
          if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const { useGetPurchasedChaptersQuery } = purchasedChaptersApi;
export default purchasedChaptersApi;
