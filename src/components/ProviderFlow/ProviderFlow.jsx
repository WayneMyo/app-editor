import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from 'react-flow-renderer';
import { nodeTypes } from "../Nodes";
import NodeEditor from './../NodeEditor';
import './ProviderFlow.css';
import { initialState } from './templates';
import { Button } from '@chakra-ui/react'

const ProviderFlow = ({ selected }) => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialState[selected].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialState[selected].edges);
  const [node, setNode] = useState(null)

  const handleNodeClick = (event, node) => setNode(node)

  const generateZep = (nodes, edges) => {
    console.log('nodes', nodes);
    console.log('edges', edges)
  };

  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  useEffect(() => {
    setNodes(initialState[selected].nodes)
    setEdges(initialState[selected].edges)
  }, [selected])

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
      <a style={{ display: "inline-block", textAlign: "right", paddingRight:"20px" }} href={`${process.env.PUBLIC_URL}/resource/app.zip`}>
        <Button colorScheme={'purple'} onClick={() => generateZep(nodes, edges)}>Export</Button>
      </a>
    </div>
  );
};

export default ProviderFlow;