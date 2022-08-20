import React from "react";
import { Handle } from "react-flow-renderer";

const RectangleNode = ({ data }) => {
  return (
    <div style={{ background: "#9ca8b3", padding: "14px" }}>
      <Handle
        type="target"
        position="left"
        id={`${data.id}.left`}
        style={{ borderRadius: 0 }}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type="source"
        position="right"
        id={`${data.id}.right1`}
        style={{ top: "30%", borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="right"
        id={`${data.id}.right2`}
        style={{ top: "70%", borderRadius: 0 }}
      />
    </div>
  );
};

const DiamondNode = ({ data }) => {
  return (
    <div style={{ background: "#9ca8b3", padding: "14px", width:"125px", height:"125px", transform: "rotate(45deg)" }}>
      <Handle
        type="target"
        position="left"
        id={'left1'}
        style={{ top: "0%", borderRadius: 0 }}
      />
      <div id={data.id} style={{ transform: "rotate(-45deg)", paddingTop:"20px" }}>{data.label}</div>
      <Handle
        type="source"
        position="right"
        id={'right'}
        style={{ top: "0%", borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="left"
        id={'left2'}
        style={{ top: "100%", borderRadius: 0 }}
      />
    </div>
  );
};

const CircleNode = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "#9ca8b3",
        padding: "14px",
        borderRadius: "50px"
      }}
    >
      <Handle
        type="target"
        position="top"
        id={`${data.id}.top`}
        style={{ borderRadius: "0" }}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type="source"
        position="bottom"
        id={`${data.id}.bottom`}
        style={{ top: "90%", borderRadius: 0 }}
      />
    </div>
  );
};

const TriangleNode = function (data) {
  return (
    <div className="triangle-node">
      <Handle
        type="target"
        position="top"
        id={`${data.id}.top`}
        style={{ borderRadius: 0 }}
      />
      <div id={data.id} className="triangle-node-text">
        {data.label}
      </div>
      <Handle
        type="source"
        position="bottom"
        id={`${data.id}.bottom1`}
        style={{ left: "30%", borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="bottom"
        id={`${data.id}.bottom2`}
        style={{ left: "70%", borderRadius: 0 }}
      />
    </div>
  );
};

export const TextNode = ({ data }) => {
  return (
    <div style={{ background: "transparent", padding: "14px" }}>
      <div id={data.id}>{data.label}</div>
    </div>
  );
};

export const nodeTypes = {
  circle: CircleNode,
  rectangle: RectangleNode,
  diamond: DiamondNode,
  triangle: TriangleNode,
  text: TextNode
};
