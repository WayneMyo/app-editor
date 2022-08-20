import { Stack, Box } from '@chakra-ui/react'
import PlayerEditor from './PlayerEditor'

const NodeEditor = ({
  node,
  nodes,
  setNodes
}) => {

  console.warn('node: ', node)

  const handleChange = (event, id) => {

  }

  return (
    <Box width={320} mt={4} mr={4}>
      <Stack
        bg={'#f7f7f7'}
        p={4}
        direction={'column'}
        borderRadius={4}
        borderColor={'gray.400'}
        borderWidth={1}
        borderStyle='solid'
        >
        <PlayerEditor values={'asdf'} onChange={handleChange} />
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