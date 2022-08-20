import { Stack, Heading, List, ListItem } from '@chakra-ui/react'

const lifeCycles = [
  'onInit',
  'onJoinPlayer',
  'onAttack',
 // 'onUpdate',
  'onLeavePlayer',
  'onDestroy'
]

const events = [
  'onSay',
  'onPlayerTouched',
  'onObjectTouched',
  'onUnitAttacked',
  'onObjectAttacked',
  'onSidebarTouched'
] 

const AppPanel = ({ 
  selected = 'onInit',
  onClick = () => {}
}) => {

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
      <Stack>
        <Heading as='h2' size='md' pb={1}>Event Listeners</Heading>
        <List spacing={3}>
          {
            events.map((value) => (
              <ListItem
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

export default AppPanel