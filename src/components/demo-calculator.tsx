import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Space } from "antd";
import { selectCount } from "@/store/selector";
import {
  increaseCount,
  reduceCount,
  increaseCountByPayload,
} from "@/store/demo";

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
      <Space>
        <div>{count}</div>
        <Button onClick={increaseHandle}>increase</Button>
        <Button onClick={reduceHandle}>reduce</Button>
      </Space>

      <Input.Group compact={true} style={{ marginTop: "10px" }}>
        <Input
          style={{ width: "200px" }}
          value={increaseValue}
          onChange={onChangeValue}
        />
        <Button onClick={increasePayloadHandle}>increase by value</Button>
      </Input.Group>
    </div>
  );
};

export default DemoCalculator;
