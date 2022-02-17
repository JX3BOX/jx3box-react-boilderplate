import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "@/store/selector";
import {
  increaseCount,
  reduceCount,
  increaseCountByPayload,
} from "@/store/demo";
import { useCallback, useState } from "react";

const DemoCalculator = () => {
  const dispatch = useDispatch();
  /**
   * select value from redux-store
   * @method useSelector
   */
  const count = useSelector(selectCount);

  const [increaseValue, setIncreasedValue] = useState(1);
  const onChangeValue = useCallback(
    (event) => setIncreasedValue(event.target.value),
    []
  );
  /**
   * dispatch increase action stuff
   * @method increaseHandle
   *
   * dispatch reduce action stuff
   * @method reduceHandle
   */
  const increaseHandle = () => {
    dispatch(increaseCount());
  };
  const reduceHandle = () => {
    dispatch(reduceCount());
  };

  /**
   * dispatch with payload demo
   * @method increasePayloadHandle
   */
  const increasePayloadHandle = useCallback(() => {
    dispatch(increaseCountByPayload(Number(increaseValue)));
  }, [increaseValue]);

  return (
    <div>
      {count}

      <div>
        <span onClick={increaseHandle} style={{ marginRight: "10px" }}>
          increase
        </span>
        <span onClick={reduceHandle}>reduce</span>
      </div>

      <div style={{ marginTop: "10px" }}>
        <input value={increaseValue} onChange={onChangeValue} />
        <div onClick={increasePayloadHandle}>increase by value</div>
      </div>
    </div>
  );
};

export default DemoCalculator;
