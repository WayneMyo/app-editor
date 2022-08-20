export const initialState = {
  'onInit': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'OnInit' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
      { id: 'provider-3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
      { id: 'provider-4', data: { label: 'Node 4' }, position: { x: 400, y: 200 } },
    ],
    edges: [
      {
        id: 'provider-e1-2',
        source: 'provider-1',
        target: 'provider-2',
        animated: true,
      },
      { id: 'provider-e1-3', source: 'provider-1', target: 'provider-3' },
    ]
  },
  'onJoinPlayer': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onJoinPlayer' },
        position: { x: 250, y: 5 },
      },
    ],
    edges: []
  },
  'onStart': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onStart' },
        position: { x: 250, y: 5 },
      },
    ],
    edges: []
  },
  'onUpdate': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onUpdate' },
        position: { x: 250, y: 5 },
      },
    ],
    edges: []
  },
  'onLeavePlayer': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onLeavePlayer' },
        position: { x: 250, y: 5 },
      },
    ],
    edges: []
  },
  'onDestroy': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onDestroy' },
        position: { x: 250, y: 5 },
      },
    ],
    edges: []
  }
}