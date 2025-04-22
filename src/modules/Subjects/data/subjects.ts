// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";
import Subject from "../components/Subject/Subject";

import { v4 as uuidv4 } from "uuid";

const shortId = uuidv4().slice(0, 6);

export const subjectsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubjects: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("subjects")
          .select("*")
          .order("id", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "subjects", id: "LIST" }],
    }),
    getChaptersBySubjectId: builder.query({
      queryFn: async ({ subjectId }) => {
        const { data, error } = await supabase
          .from("chapters")
          .select("*, subjects(*),teachers(*)")
          .eq("subject_id", subjectId)
          .order("id", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "chapters", id: "LIST" }],
    }),
    getRecordedSessionsBySubjectId: builder.query({
      queryFn: async ({ subjectId }) => {
        const { data, error } = await supabase
          .from("live_sessions")
          .select("*,subjects(*),teachers(*)")
          .eq("subject_id", subjectId)
          .eq("bought", true)
          .eq("with_records", true)
          .lt("end_at", new Date().toISOString())
          .order("id", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "live_sessions", id: "LIST" }],
    }),
    getLevel: builder.query({
      queryFn: async ({ levelId }) => {
        const { data, error } = await supabase
          .from("levels")
          .select("level")
          .eq("id", levelId);
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "levels", id: "LIST" }],
    }),
    getExpirationDate: builder.query({
      queryFn: async ({ groupeId }) => {
        const { data, error } = await supabase
          .from("live_session_groups")
          .select("expiration_date")
          .eq("id", groupeId);

        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "expiration_date", id: "LIST" }],
    }),
    updateFavoriteChapter: builder.mutation({
      queryFn: async ({ favorite, chapterId }) => {
        const { data, error } = await supabase
          .from("chapters")
          .update({ favorite: !favorite })
          .eq("id", chapterId);

        if (error) return { error };
        return { data };
      },
      invalidatesTags: [{ type: "chapters", id: "LIST" }],
    }),
    updateFavoriteRecordedSession: builder.mutation({
      queryFn: async ({ favorite, sessionId }) => {
        const { data, error } = await supabase
          .from("live_sessions")
          .update({ favorite: !favorite })
          .eq("id", sessionId);
        if (error) return { error };
        return { data };
      },
      invalidatesTags: [{ type: "live_sessions", id: "LIST" }],
    }),
    updateFavoriteSubject: builder.mutation({
      queryFn: async ({ favorite, subjectId }) => {
        const { data, error } = await supabase
          .from("subjects")
          .update({ favorite: !favorite })
          .eq("id", subjectId);
        if (error) return { error };
        return { data };
      },
      invalidatesTags: [{ type: "subjects", id: "LIST" }],
    }),
    getSubjectById: builder.query({
      queryFn: async ({ subjectId }) => {
        const { data, error } = await supabase
          .from("subjects")
          .select("favorite,bought,subject_name,expiration_date")
          .eq("id", subjectId);

        if (error) return { error };
        return { data };
      },
      invalidatesTags: [{ type: "subject", id: "LIST" }],
    }),
    buySubject: builder.mutation({
      queryFn: async ({ subjectId, updatedPoints }) => {
        const { data: boughtSubject, error: boughtSubjectError } =
          await supabase
            .from("subjects")
            .update({
              bought: true,
              expiration_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            })
            .eq("id", subjectId);
        if (boughtSubjectError) return { boughtSubjectError };
        const { data: updatedWallet, error: updatedWalletError } =
          await supabase
            .from("wallet")
            .update({ points: updatedPoints })
            .eq("id", 1);
        if (updatedWalletError) return { updatedWalletError };
        const { data: updatedChapters, error: updatedChaptersError } =
          await supabase
            .from("chapters")
            .update({
              bought_indiv: true,
              expiration_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            })
            .eq("subject_id", subjectId);
        if (updatedChaptersError) return { updatedChaptersError };
        const {
          data: updatedSubscriptionHistory,
          isLoading: isLoadingSubscriptionHistory,
        } = await supabase.from("subscription_history").insert([
          {
            code: `#${shortId}`,
            amount_in_dinar: 5,
            refund: 0,
            date: new Date().toISOString(),
          },
        ]);
        return { data: { boughtSubject, updatedWallet, updatedChapters } };
      },
      invalidatesTags: [
        { type: "subjects", id: "LIST" },
        { type: "points", id: "LIST" },
        { type: "chapters", id: "LIST" },
        { type: "subscription", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetAllSubjectsQuery,
  useGetChaptersBySubjectIdQuery,
  useGetRecordedSessionsBySubjectIdQuery,
  useGetLevelQuery,
  useGetExpirationDateQuery,
  useUpdateFavoriteChapterMutation,
  useUpdateFavoriteRecordedSessionMutation,
  useUpdateFavoriteSubjectMutation,
  useGetSubjectByIdQuery,
  useBuySubjectMutation,
} = subjectsApi;
