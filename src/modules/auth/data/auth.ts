// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import PhoneNumber from "../../MyProfile/components/Inputs/PhoneNumberInput";
import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";
import ForgetPassword from "../features/ForgetPassword/ForgetPassword";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      async queryFn(values) {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            data: {
              firstName: values.firstName,
              lastName: values.lastName,
              phoneNumber: values.phoneNumber,
              division: values.division,
              state: values.state,
              birthDate: "",
              postalCode: 7080,
            },
          },
        });
        if (error) {
          return { error: { message: error.message } };
        }
        return { data };
      },
    }),
    userLogin: builder.mutation({
      async queryFn(values) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });

        if (error) {
          return { error: { message: error.message } };
        }
        return { data };
      },
    }),
    getUser: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error) return { error };
        return { data };
      },
    }),
    updateUser: builder.mutation({
      queryFn: async (values) => {
        const { data, error } = await supabase.auth.updateUser({
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            state: values.state,
            birthDate: values.birthDate,
            postalCode: values.postalCode,
          },
        });
        if (error) {
          return { error: { message: error.message } };
        }
        return { data };
      },
    }),
    updatePassword: builder.mutation({
      async queryFn(values) {
        const { data, error } = await supabase.auth.updateUser({
          password: values.newPassword,
        });
        if (error) {
          return { error: { message: error.message } };
        }
        return { data };
      },
    }),
    verifyCurrentPassword: builder.mutation({
      async queryFn({ email, values }) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: values.oldPassword,
        });
        if (error) {
          return { error: { message: error.message } };
        }
        return { data };
      },
    }),
    forgetPassword: builder.mutation({
      async queryFn({ email }) {
        const { data, error } = await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo: "http://localhost:3000/forget_password",
          }
        );
        if (error) {
          return { error: { message: error.message } };
        }
        return { data };
      },
    }),
    deleteAvatar: builder.mutation({
      async queryFn({ path }) {
        const { error } = await supabase.storage.from("avatars").remove([path]);

        if (error) return { error: { message: error.message } };
        return { data: { success: true } };
      },
    }),

    getAvatar: builder.query({
      queryFn: async () => {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData.user?.id;

        if (!userId) return { error: { message: "User not authenticated" } };

        const { data, error } = await supabase.storage
          .from("avatars")
          .list(`public/${userId}`);

        if (error) return { error: { message: error.message } };
        return { data };
      },
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserLoginMutation,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useVerifyCurrentPasswordMutation,
  useForgetPasswordMutation,
  useDeleteAvatarMutation,
  useGetAvatarQuery,
  useGetUserQuery,
} = authApi;
