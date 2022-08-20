import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from 'react-flow-renderer';
import { nodeTypes } from "../Nodes";
import Sidebar from './../Sidebar.js';
import NodeEditor from './../NodeEditor';
import './ProviderFlow.css';
import { initialState } from './templates';

const ProviderFlow = ({ selected }) => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialState[selected].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialState[selected].edges);
  const [ node, setNode ] = useState(null)

  const handleNodeClick = (event, node) => setNode(node)

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
            onNodeClick={handleNodeClick}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        {
          node &&
          <NodeEditor node={node} nodes={nodes} setNodes={setNodes} />
        }
      </ReactFlowProvider>
    </div>
  );
};

export default ProviderFlow;