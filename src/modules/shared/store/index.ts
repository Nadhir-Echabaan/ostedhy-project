import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { VITE_APP_ENABLE_REDUX_DEVTOOLS } from "../../../config";
import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { api } from "./services/api";

import rootReducer from "./rootReducer";

import sessionsApi from "../../Sessions/data/sessionsApi";
import sessionsGroupeApi from "../../Sessions/data/sessionsGroupeApi";
import subjectsApi from "../../Subjects/data/subjectsApi";
import chaptersApi from "../../Subjects/data/getChapters";
import subjectApi from "../../Subjects/data/getSubject";
import recordedSessionsApi from "../../Subjects/data/recordedSessionsApi";
import teacherApi from "../../Subjects/data/getTeacher";
import levelApi from "../../Subjects/data/getLevel";
import purchasedSubjectsApi from "../../Library/data/purchasedSubjectsApi";
import purchasedChaptersApi from "../../Library/data/purchasedChaptersApi";
import purchasedSessionsApi from "../../Library/data/purchasedSessions";

export const store = configureStore({
  reducer: rootReducer,
  devTools: VITE_APP_ENABLE_REDUX_DEVTOOLS,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      api.middleware,
      sessionsApi.middleware,
      sessionsGroupeApi.middleware,
      subjectsApi.middleware,
      chaptersApi.middleware,
      subjectApi.middleware,
      recordedSessionsApi.middleware,
      teacherApi.middleware,
      levelApi.middleware,
      purchasedSubjectsApi.middleware,
      purchasedChaptersApi.middleware,
      purchasedSessionsApi.middleware,
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
