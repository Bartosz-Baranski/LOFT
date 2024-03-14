import { combineReducers } from "redux";
import { createPersistConfig } from "./persistConfig";
import { themeReducer } from "./theme/themeSlice";
import { persistReducer } from "redux-persist";

const persistConfig = createPersistConfig();

const rootReducer = combineReducers({
  theme: persistReducer(persistConfig, themeReducer),
});

export default rootReducer;
