import storage from "redux-persist/lib/storage";

export const createPersistConfig = () => ({
  key: "root",
  storage,
  whitelist: ["theme"],
});
