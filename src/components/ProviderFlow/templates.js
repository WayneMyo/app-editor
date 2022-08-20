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
      { id: 'provider-2', data: { label: 'start?' }, position: { x: 100, y: 100 } },
      { id: 'provider-3', data: { label: 'new player assign\nplayer zombie' }, position: { x: 400, y: 100 } },
    ],
    edges: [
      {
        id: 'provider-e1-2',
        source: 'provider-1',
        target: 'provider-2',
        animated: true,
      },
      { id: 'provider-e1-3', source: 'provider-2', target: 'provider-3' },
    ]
  },
  'onAttack': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onAttack' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', data: { label: 'Infect' }, position: { x: 100, y: 100 } },
      { id: 'provider-3', data: { label: 'Judegement' }, position: { x: 400, y: 100 } },
    ],
    edges: [
      {
        id: 'provider-e1-2',
        source: 'provider-1',
        target: 'provider-2',
        animated: true,
      },
      { id: 'provider-e1-3', source: 'provider-2', target: 'provider-3' },
    ]
  },
 /* 'onUpdate': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onUpdate' },
        position: { x: 250, y: 5 },
      },
    ],
    edges: []
  },*/
  'onLeavePlayer': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onLeavePlayer' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', data: { label: 'Judegement' }, position: { x: 400, y: 100 } },
    ],
    edges: [
      {
        id: 'provider-e1-2',
        source: 'provider-1',
        target: 'provider-2',
      },
    ]
  },
  'onDestroy': {
    nodes: [
      {
        id: 'provider-1',
        type: 'circle',
        data: { label: 'onDestroy' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', data: { label: 'End' }, position: { x: 100, y: 100 } },
    ],
    edges: [
      {
        id: 'provider-e1-2',
        source: 'provider-1',
        target: 'provider-2',
      }
    ]
  }
}