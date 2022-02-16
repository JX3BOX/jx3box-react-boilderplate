import { createStore, combineReducers } from "redux";
import demo from "./demo/reducer";

/**
 * @todo 创建 redux store
 *
 * 全局 redux 配置入口
 * 如果新增了 reducer
 * 请在本文件 import 并添加到下面的 rootReducers 中
 */
const rootReducers = combineReducers({
  demo,
});

export const store = createStore(rootReducers);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
