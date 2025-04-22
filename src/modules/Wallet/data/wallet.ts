// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck

import toast from "react-hot-toast";
import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";
import { invalid } from "moment";
import { addMethod } from "yup";

export const walletApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addPoints: builder.mutation({
      queryFn: async ({ values, addedPoints }) => {
        const { data: addPointsData, error: addPointError } = await supabase
          .from("add_points_history")
          .insert([
            {
              amount: values.amount,
              description: values.description,
              code: values.code,
              date: new Date().toISOString(),
            },
          ]);
        const { data: walletData, error: walletError } = await supabase
          .from("wallet")
          .update({ points: addedPoints })
          .eq("id", 1);
        if (walletError) {
          return { walletError };
        }
        if (addPointError) {
          return { addPointError };
        }
        return { data: { addPointsData, walletData } };
      },
      invalidatesTags: [{ type: "points", id: "LIST" }],
    }),
    transferPoints: builder.mutation({
      queryFn: async ({ values, substractedPoints }) => {
        const { data: transferData, error: transferError } = await supabase
          .from("transfer_points_history")
          .insert([
            {
              amount_in_dinar: values.amount_in_dinar,
              recipient_id: values.recipient_id,
              date: new Date().toISOString(),
            },
          ]);
        if (transferError) {
          return { transferError };
        }
        const { data: walletData, error: walletError } = await supabase
          .from("wallet")
          .update({ points: substractedPoints })
          .eq("id", 1);
        if (walletError) {
          return { walletError };
        }
        return { data: { walletData, transferData } };
      },
      invalidatesTags: [{ type: "points", id: "LIST" }],
    }),
    getAddPointsHistory: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("add_points_history")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) {
          return { error };
        }
        return { data };
      },
      providesTags: [{ type: "points", id: "LIST" }],
    }),
    getTransferHistory: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("transfer_points_history")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) {
          return { error };
        }
        return { data };
      },
      providesTags: [{ type: "points", id: "LIST" }],
    }),
    getSubscriptionHistory: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("subscription_history")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) {
          return { error };
        }
        return { data };
      },
      providesTags: [{ type: "subscription", id: "LIST" }],
    }),
  }),
});
export const {
  useAddPointsMutation,
  useGetAddPointsHistoryQuery,
  useGetTransferHistoryQuery,
  useTransferPointsMutation,
  useGetSubscriptionHistoryQuery,
} = walletApi;
