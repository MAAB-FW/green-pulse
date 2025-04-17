import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PaymentIntentRequest, PaymentIntentResponse } from "@/types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation<PaymentIntentResponse, PaymentIntentRequest>({
      query: ({ price }) => ({
        url: "/checkout/payment-intent",
        method: "POST",
        body: { price },
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = baseApi;