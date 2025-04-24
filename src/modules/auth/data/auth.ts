// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { api } from "../../shared/store/services/api";
import supabase from "../../shared/store/services/supabase";
import toast from "react-hot-toast";

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
              avatar:
                "https://nemnkkgusenwmqjxkqeg.supabase.co/storage/v1/object/public/avatars//images.png",
            },
          },
        });
        if (error) {
          toast.error("An error occurred during sign up");
          throw error;
        }
        toast.success("Successfully signed up, check your email");
        return { data };
      },
    }),
    userLogin: builder.mutation({
      async queryFn(values) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
          redirectTo: "https://madebynadhir.netlify.app/login",
        });

        if (error) {
          toast.error("An error occurred during logging in");
          throw error;
        }
        toast.success("Successfully logged in");
        return { data };
      },
    }),
    getUser: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error) return { error };
        return { data };
      },
      providesTags: [{ type: "userData", type: "LIST" }],
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
          toast.error("An error occurred during updating user");
          throw error;
        }
        toast.success("Successfully updated user");
        return { data };
      },
    }),
    updateUserAvatar: builder.mutation({
      queryFn: async (avatar_url) => {
        const { data, error } = await supabase.auth.updateUser({
          data: {
            avatar: avatar_url,
          },
        });
        if (error) {
          toast.error("An error occurred during updating user");
          throw error;
        }
        toast.success("Successfully updated user");
        return { data };
      },
      invalidatesTags: [{ type: "userData", type: "LIST" }],
    }),
    uploadImage: builder.mutation({
      queryFn: async ({ imageName, file }) => {
        const { data, error } = await supabase.storage
          .from("avatars")
          .upload(imageName, file);

        if (error) {
          return { error: { message: error.message } };
        }

        return { data };
      },
      invalidatesTags: [{ type: "userData", id: "LIST" }],
    }),
    updatePassword: builder.mutation({
      async queryFn(values) {
        const { data, error } = await supabase.auth.updateUser({
          password: values.newPassword,
        });
        if (error) {
          toast.error("An error occurred during password update");
          throw error;
        }
        toast.success("Successfully updated password");
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
          toast.error("An error occurred during password verification");
          throw error;
        }
        return { data };
      },
    }),
    forgetPassword: builder.mutation({
      async queryFn({ email }) {
        const { data, error } = await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo: "https://madebynadhir.netlify.app/new_password",
          }
        );
        if (error) {
          toast.error("Wrong email");
        }
        return { data };
      },
    }),
    logout: builder.mutation({
      async queryFn() {
        const { data, error } = await supabase.auth.signOut();
        if (error) {
          toast.error("An error occurred during logging out");
          throw error;
        }
        toast.success("Successfully logged out");
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
  useUploadImageMutation,
  useUpdateUserAvatarMutation,
  useGetUserQuery,
  useLogoutMutation,
} = authApi;
