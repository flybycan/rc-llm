import React from "react";
import { Ellipsis } from "@rc-llm/components";

export default function EllipsisExpandableDemo() {
  return (
    <div style={{ width: '200px' }}>
      <Ellipsis expandable rows={2}>
        There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.
      </Ellipsis>
    </div>
  );
}
