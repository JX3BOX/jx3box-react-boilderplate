import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import demo from "./demo";

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
 * 请在本文件 import 并添加到下面的 reducer 中
 */
export const store = configureStore({
  reducer: {
    demo,
  },
  middleware: middlewares,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {demo: DemoState}
export type AppDispatch = typeof store.dispatch;

/**
 * 返回经过类型定义的 useDispatch
 *
 * @returns useAppDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * 返回经过类型定义的 useSelector
 *
 * @returns useAppSelector
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
