import { FormControl,
  FormLabel, Input, Stack, Heading, Divider
} from '@chakra-ui/react'

const MessageEditor = ({
  values,
  onChange
}) => {

  return (
    <Stack direction='column'>
      <Heading size='md'>Message Editor</Heading>
      <Divider pt={2}/>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Input defaultValue={'Playable number of people: 3 or more'} size='sm' placeholder='Enter title' />
      </FormControl>
    </Stack>
  )
}

export default MessageEditor