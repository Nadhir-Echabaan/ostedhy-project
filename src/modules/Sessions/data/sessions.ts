// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck

import { v4 as uuidv4 } from "uuid";

import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";

const shortId = uuidv4().slice(0, 6);

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
          .eq("groupe_id", groupeSessionsId.groupeSessionsId)
          .order("id", { ascending: true });

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
      providesTags: [{ type: "points", id: "LIST" }],
    }),
    buyLiveSessionsGroupe: builder.mutation({
      queryFn: async ({ groupeSessionsId, with_records }) => {
        const { data, error } = await supabase
          .from("live_session_groups")
          .update({
            bought: true,
            expiration_date: new Date(
              Date.now() + 30 * 24 * 60 * 60 * 1000
            ).toISOString(),
            with_records: with_records,
          })
          .eq("id", groupeSessionsId);

        if (error) {
          return { error };
        }
        return { data };
      },
      invalidatesTags: [{ type: "live_sessions_groupe", id: "LIST" }],
    }),
    updateBoughtLiveSessions: builder.mutation({
      queryFn: async ({ groupeSessionsId, with_records }) => {
        const { data: liveSessionsData, error: liveSessionsError } =
          await supabase
            .from("live_sessions")
            .update({
              bought: true,
              with_records: with_records,
              expiration_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            })
            .eq("groupe_id", groupeSessionsId);

        if (liveSessionsError) {
          return { liveSessionsError };
        }
        return { data: liveSessionsData };
      },
      invalidatesTags: [{ type: "live_sessions", id: "LIST" }],
    }),
    updateWalletPoints: builder.mutation({
      queryFn: async ({ updatedPoints }) => {
        const { data, error } = await supabase
          .from("wallet")
          .update({ points: updatedPoints })
          .eq("id", 1);
        if (error) {
          return { error };
        }
        return { data };
      },
      invalidatesTags: [{ type: "points", id: "LIST" }],
    }),
    liveSessionsSubscription: builder.mutation({
      queryFn: async ({}) => {
        const { data, error } = await supabase
          .from("subscription_history")
          .insert([
            {
              code: `#${shortId}`,
              amount_in_dinar: 1500,
              refund: 0,
              date: new Date().toISOString(),
            },
          ]);
        if (error) {
          return { error };
        }
        return { data };
      },
      invalidatesTags: [{ type: "subscription", id: "LIST" }],
    }),
  }),
});
export const {
  useGetAllLiveSessionsQuery,
  useGetLiveSessionsGroupeQuery,
  useGetRelatedLiveSessionsQuery,
  useGetUserPointsQuery,

  useBuyLiveSessionsGroupeMutation,
  useUpdateWalletPointsMutation,
  useUpdateBoughtLiveSessionsMutation,
  useLiveSessionsSubscriptionMutation,
} = sessionsApi;
