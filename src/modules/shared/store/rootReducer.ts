import { combineReducers } from "@reduxjs/toolkit";
import { sharedsPersistedReducer } from "./persist/sharedPersist";
import { api } from "./services/api";
import authReducer from "../../auth/data/authSlice";
//import todosReducer from "../../todos/data/todoSlice";

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

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [sessionsApi.reducerPath]: sessionsApi.reducer,
  [sessionsGroupeApi.reducerPath]: sessionsGroupeApi.reducer,
  [subjectsApi.reducerPath]: subjectsApi.reducer,
  [chaptersApi.reducerPath]: chaptersApi.reducer,
  [subjectApi.reducerPath]: subjectApi.reducer,
  [recordedSessionsApi.reducerPath]: recordedSessionsApi.reducer,
  [teacherApi.reducerPath]: teacherApi.reducer,
  [levelApi.reducerPath]: levelApi.reducer,
  [purchasedSubjectsApi.reducerPath]: purchasedSubjectsApi.reducer,
  [purchasedChaptersApi.reducerPath]: purchasedChaptersApi.reducer,
  [purchasedSessionsApi.reducerPath]: purchasedSessionsApi.reducer,
  shared: sharedsPersistedReducer,
  auth: authReducer,
  //todos: todosReducer,
});

export default rootReducer;
