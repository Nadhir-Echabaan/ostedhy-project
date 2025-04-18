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
      queryFn: async ({ values }) => {
        const { data, error } = await supabase
          .from("add_points_history")
          .insert([
            {
              amount: values.amount,
              description: values.description,
              code: values.code,
              date: new Date().toISOString(),
            },
          ]);
        if (error) {
          return { error };
        }
        return { data };
      },
      invalidatesTags: [{ type: "add_points_history", id: "LIST" }],
    }),
    transferPoints: builder.mutation({
      queryFn: async ({ values }) => {
        const { data, error } = await supabase
          .from("transfer_points_history")
          .insert([
            {
              amount_in_dinar: values.amount_in_dinar,
              recipient_id: values.recipient_id,
              date: new Date().toISOString(),
            },
          ]);
        if (error) {
          return { error };
        }
        return { data };
      },
      invalidatesTags: [{ type: "transfer_points_history", id: "LIST" }],
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
      providesTags: [{ type: "add_points_history", id: "LIST" }],
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
      providesTags: [{ type: "transfer_points_history", id: "LIST" }],
    }),
  }),
});
export const {
  useAddPointsMutation,
  useGetAddPointsHistoryQuery,
  useGetTransferHistoryQuery,
  useTransferPointsMutation,
} = walletApi;
