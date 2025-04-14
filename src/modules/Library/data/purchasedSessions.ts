import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../shared/store/services/supabase";

const purchasedSessionsApi = createApi({
  reducerPath: "purchasedSessionsApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["purchasedSessionsApi"],
  endpoints: (builder) => ({
    getPurchasedSessions: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("recorded_live_sessions")
          .select("*,subjects(*), live_sessions_grp(live_sessions,teacher_id)");
        if (error) console.error(error);
        return { data };
      },
    }),
  }),
});

export const { useGetPurchasedSessionsQuery } = purchasedSessionsApi;
export default purchasedSessionsApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import supabase from "../../shared/supabase/supabase";

// const recordedSessionsApi = createApi({
//   reducerPath: "recordedSessionsApi",
//   baseQuery: fetchBaseQuery(),
//   tagTypes: ["recordedSessions"],
//   endpoints: (builder) => ({
//     getRecordedSessions: builder.query({
//       async queryFn({ subjectId }) {
//         const { data, error } = await supabase
//           .from("recorded_live_sessions")
//           .select("*, subjects(*), live_sessions_grp(live_sessions, teacher_id)")
//           .eq("subject_id" , subjectId)
//         if (error) console.error(error);
//         return { data };
//       },
//     }),
//   }),
// });

// export const { useGetRecordedSessionsQuery } = recordedSessionsApi;
// export default recordedSessionsApi;
