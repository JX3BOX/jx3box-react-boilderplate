/**
 * @todo 从redux取值
 *
 * 在项目体量不大的情况下建议把所有
 * selector 函数全部定义在该文件中方便管理
 */

import { RootState } from "./index";

/**
 * demo selector
 * @param state
 * @returns number
 */
export const selectCount = (state: RootState) => state.demo.count || 0;
