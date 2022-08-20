import { Stack, Box } from '@chakra-ui/react'
import PlayerEditor from './PlayerEditor'
import MessageEditor from './MessageEditor'

const NodeEditor = ({
  node,
  nodes,
  setNodes
}) => {

  console.warn('node: ', node)

  const handleChange = (event, id) => {

  }

  let Editor;
  switch(node.id) {
    case 'message': Editor = MessageEditor; break;
    case 'zombie': Editor = PlayerEditor; break;
    default: 
  }

  if(!Editor) {
    return null
  }

  return (
    <Box width={320} mt={4} mr={4} position='absolute' top={0} right={0} zIndex={1500}>
      <Stack
        p={4}
        direction={'column'}
        borderRadius={4}
        borderColor={'gray.400'}
        borderWidth={1}
        borderStyle='solid'
        >
        <Editor values={'asdf'} onChange={handleChange} />
      </Stack>
    </Box>  
  )
}

export default NodeEditor

/**
 * name
 * title
 * moveSpeed
 * sprite
 */