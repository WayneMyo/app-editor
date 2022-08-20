import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from 'react-flow-renderer';
import { nodeTypes } from "../Nodes";
import Sidebar from './../Sidebar.js';
import './ProviderFlow.css';
import { initialState } from './templates';

const ProviderFlow = ({ selected }) => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialState[selected].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialState[selected].edges);
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  useEffect(() => {
    setNodes(initialState[selected].nodes)
    setEdges(initialState[selected].edges)
  }, [selected]) 

  console.log(nodes)
  return (
    <div className="providerflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar nodes={nodes} setNodes={setNodes} />
      </ReactFlowProvider>
    </div>
  );
};

export default ProviderFlow;