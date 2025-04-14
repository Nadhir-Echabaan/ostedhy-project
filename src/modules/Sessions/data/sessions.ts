// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck

import toast from "react-hot-toast";
import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";

export const sessionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllLiveSessions: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("live_sessions")
          .select("*, subjects(*),teachers(*)");

        if (error) return { error };

        return { data };
      },
      providesTags: [{ type: "live_sessions", id: "LIST" }],
    }),
    getLiveSessionsGroupe: builder.query({
      queryFn: async (groupeSessionsId) => {
        const { data, error } = await supabase
          .from("live_session_groups")
          .select("*,subjects(subject_name), teachers(*)")
          .eq("id", groupeSessionsId.groupeSessionsId);

        if (error) return { error };

        return { data };
      },
      providesTags: [{ type: "live_sessions_groupe", id: "LIST" }],
    }),
    getRelatedLiveSessions: builder.query({
      queryFn: async (groupeSessionsId) => {
        const { data, error } = await supabase
          .from("live_sessions")
          .select("*")
          .eq("groupe_id", groupeSessionsId.groupeSessionsId);

        if (error) return { error };

        return { data };
      },
      providesTags: [{ type: "relatedLiveSessions", id: "LIST" }],
    }),
    getUserPoints: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("wallet")
          .select("points")
          .single();

        if (error) return { error };

        return { data };
      },
      providesTags: [{ type: "userPoints", id: "LIST" }],
    }),
    buyLiveSessionsGroupe: builder.mutation({
      queryFn: async ({ updatedPoints }) => {
        const { data: walletData, error: walletError } = await supabase
          .from("wallet")
          .update({ points: updatedPoints })
          .eq("id", 1);
        if (walletError) {
          return { walletError };
        }
        const { data: groupsData, error: groupsError } = await supabase
          .from("live_session_groups")
          .update({
            bought: true,
            expiration_date: new Date(),
            with_records: true,
          })
          .eq("id", 1);

        if (groupsError) {
          return { groupsError };
        }
        return { data: { walletData, groupsData } };
      },
      invalidatesTags: [{ type: "userPoints", id: "LIST" }],
    }),
  }),
});
export const {
  useGetAllLiveSessionsQuery,
  useGetLiveSessionsGroupeQuery,
  useGetRelatedLiveSessionsQuery,
  useGetUserPointsQuery,
  useBuyLiveSessionsGroupeMutation,
} = sessionsApi;
