import { Stack, Heading, List, ListItem } from '@chakra-ui/react'

const lifeCycles = [
  'Player Types',
]

const PlayerPanel = ({ selected, onClick }) => {
  return (
    <Stack direction='column' spacing={10}>
      <Stack direction='column'>
        <Heading as='h2' size='md' pb={1}>Lifecycle</Heading>
        <List spacing={1}>
          {
            lifeCycles.map((value) => (
              <ListItem
                borderRadius={4}
                padding={2}
                key={value} 
                cursor={'pointer'} 
                _hover={{ 
                  backgroundColor: 'gray.100'
                }}
                background={selected === value ? 'purple.100' : 'initial'}
                onClick={onClick.bind(null, value)}
              >{value}</ListItem>
            ))
          }
        </List>
      </Stack>
    </Stack>
  )
}

export default PlayerPanel