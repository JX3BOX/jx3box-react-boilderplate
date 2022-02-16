import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "@/store/selector";
import { increaseAction, reduceAction } from "@/store/demo/action";

const DemoCalculator = () => {
  const dispatch = useDispatch();
  /**
   * select value from redux-store
   * @method useSelector
   */
  const count = useSelector(selectCount);

  /**
   * dispatch increase action stuff
   * @method increaseHandle
   *
   * dispatch reduce action stuff
   * @method reduceHandle
   */
  const increaseHandle = () => {
    dispatch(increaseAction());
  };
  const reduceHandle = () => {
    dispatch(reduceAction());
  };

  return (
    <div>
      {count}

      <div>
        <span onClick={increaseHandle} style={{ marginRight: "10px" }}>
          increase
        </span>
        <span onClick={reduceHandle}>reduce</span>
      </div>
    </div>
  );
};

export default DemoCalculator;
