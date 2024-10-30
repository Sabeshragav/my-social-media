import { useBattery, useWindowSize } from "react-use";

//battery status and window size demo

const BatteryDemo = () => {
  const batteryState = useBattery();
  const { width, height } = useWindowSize();

  if (!batteryState.isSupported) {
    return (
      <div className="text-white">
        <strong>Battery sensor</strong>: <span>not supported</span>
      </div>
    );
  }

  if (!batteryState.fetched) {
    return (
      <div className="text-white">
        <strong>Battery sensor</strong>: <span>supported</span> <br />
        <strong>Battery state</strong>: <span>fetching</span>
      </div>
    );
  }

  return (
    <div className="text-white">
      <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
      <strong>Battery state</strong>: <span>fetched</span> <br />
      <strong>Charge level</strong>:&nbsp;&nbsp;{" "}
      <span>{(batteryState.level * 100).toFixed(0)}%</span> <br />
      <strong>Charging</strong>:&nbsp;&nbsp;{" "}
      <span>{batteryState.charging ? "yes" : "no"}</span> <br />
      <strong>Charging time</strong>:&nbsp;&nbsp;
      <span>
        {batteryState.chargingTime ? batteryState.chargingTime : "finished"}
      </span>{" "}
      <br />
      <strong>Discharging time</strong>:&nbsp;&nbsp;{" "}
      <span>{batteryState.dischargingTime}</span> <br />
      <br />
      <div>
        <div>width: {width}</div>
        <div>height: {height}</div>
      </div>
    </div>
  );
};

export default BatteryDemo;
