import { DEMO_INCRESED, DEMO_REDUCED } from "../constants";

interface DemoState {
  count: number;
}

/**
 * @todo redux demo
 *
 * 计算器 reducer
 */
const initState: DemoState = {
  count: 0,
};

const demo = (state = initState, action: any): DemoState => {
  switch (action.type) {
    case DEMO_INCRESED: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DEMO_REDUCED: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default demo;
