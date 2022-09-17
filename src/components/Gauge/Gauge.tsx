import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import "./index.scss";

export interface GaugeProps {
  percentage: number;
  invert?: boolean;
}

const Gauge: React.FC<GaugeProps> = ({ percentage, invert }) => {
  const gauge = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = gauge;
    if (current !== null) current.style.rotate = percentage * 1.8 + "deg";

    return () => {
      gauge;
    };
  }, [gauge]);

  return (
    <div className="box gauge--1">
      <div className="mask">
        <div
          className={classNames(
            "semi-circle",
            invert && "semi-circle-inverted"
          )}
        ></div>
        <div className="semi-circle--mask" ref={gauge}></div>
      </div>
    </div>
  );
};

export default Gauge;
