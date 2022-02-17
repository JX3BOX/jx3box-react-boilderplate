import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import demo from "./demo/reducer";

/**
 * @todo redux 中间件
 * 你可以把你需要的中间件添加到这个数组中
 *
 * @param middlewares
 */
const middlewares = [createLogger(), thunk];

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

export const store = createStore(
  rootReducers,
  compose(applyMiddleware(...middlewares))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
