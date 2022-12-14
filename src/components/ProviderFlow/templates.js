export const initialState = {
  'onInit': {
    nodes: [
      {
        id: 'provider-1',
        type: 'initiNode',
        data: { label: 'OnInit' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', type: 'decisionNode', data: { label: 'player_count > 2' }, position: { x: 100, y: 100 } },
      { id: 'provider-3', data: { label: 'App.assign_role' }, position: { x: 400, y: 100 } },
      { id: 'provider-4', data: { label: 'start: true' }, position: { x: 400, y: 200 } },
      { id: 'provider-5', data: { label: 'message display' }, position: { x: -200, y: 100 }, category: 'message' },
      { id: 'provider-6', data: { label: 'end' }, position: { x: -200, y: 200 } }
    ],
    edges: [
      {
        id: 'provider-e1',
        source: 'provider-1',
        target: 'provider-2',
        animated: true,
      },
      { id: 'provider-e2', source: 'provider-2', target: 'provider-3' },
      { id: 'provider-e3', source: 'provider-3', target: 'provider-4' },
      { id: 'provider-e4', source: 'provider-2', target: 'provider-5', sourceHandle: 'left2' },
      { id: 'provider-e5', source: 'provider-5', target: 'provider-6' }
    ]
  },
  'onJoinPlayer': {
    nodes: [
      {
        id: 'provider-1',
        type: 'initiNode',
        data: { label: 'onJoinPlayer' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', type: 'decisionNode', data: { label: 'start?' }, position: { x: 100, y: 100 } },
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
  'onStart': {
    nodes: [
      {
        id: 'provider-1',
        type: 'initiNode',
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
        type: 'initiNode',
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
        type: 'initiNode',
        data: { label: 'onLeavePlayer' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', data: { label: 'Judgement' }, position: { x: 400, y: 100 } },
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
        type: 'initiNode',
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
  },
  'onSay': {
    nodes: [
      
    ],
    edges: [
      
    ]
  },
  'onPlayerTouched': {
    nodes: [
      {
        id: 'provider-1',
        type: 'initiNode',
        data: { label: 'onPlayerTouched' },
        position: { x: 250, y: 5 },
      },
      { id: 'provider-2', data: { label: 'Infect' }, position: { x: 100, y: 100 } },
      { id: 'provider-3', data: { label: 'Judgement' }, position: { x: 400, y: 100 } },
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
  'onObjectTouched': {
    nodes: [
      
    ],
    edges: [
      
    ]
  },
  'onUnitAttacked': {
    nodes: [
      
    ],
    edges: [
      
    ]
  },
  'onObjectAttacked': {
    nodes: [
      
    ],
    edges: [
      
    ]
  },
  'onSidebarTouched': {
    nodes: [
      
    ],
    edges: [
      
    ]
  },
  'Player Types': {
    nodes: [
      {
        id: 'player',
        data: { label: 'Player' },
        position: { x: 50, y: 100 },
      },
      { 
        id: 'zombie', 
        data: { label: 'Zombie' }, 
        position: { x: 250, y: 100 },
        category: 'zombie'
      },
    ]
  }
}