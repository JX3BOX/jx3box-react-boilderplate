import React, { Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

/**
 * 如果你希望使用懒加载路由
 * 请遵循demo演示的用法
 *
 * 参考链接
 * @refer https://reactjs.org/docs/code-splitting.html
 * @method React.lazy
 */
const Home = React.lazy(() => import("../pages/home"));

/**
 * 返回创建的路由
 * 如果你不想使用 lazy load 可以选择直接渲染路由组件
 *
 * router without lazy load eg:
 *
 * ```javascript
 * <Routes>
 *  <Route path='/'>
 *    <Home />
 *  </Route>
 * </Routes>
 * ```
 *
 * @returns AppRouter
 */
const Jx3AppRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default Jx3AppRouter;
