import { FormControl,
  NumberInput, NumberInputField, NumberInputStepper,
  NumberIncrementStepper, NumberDecrementStepper,
  FormLabel, Input, Stack, Heading, Icon, InputGroup, 
  InputLeftElement, Image, Divider, Text
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { useRef, useState, Fragment } from 'react'


const PlayerEditor = ({
  values,
  onChange
}) => {

  const uploadRef = useRef(null)
  const [ file, setFile ] = useState(null)

  const handleFileUpload = (event) => {
    setFile(event.target.value)
  }

  return (
    <Stack direction='column'>
      <Heading size='md'>Player Editor</Heading>
      <Divider pt={2}/>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input defaultValue={'Zombie'} size='sm' placeholder='Enter title' />
      </FormControl>
      <FormControl>
        <FormLabel>Move speed</FormLabel>
        <NumberInput defaultValue={1} size='sm'>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="writeUpFile">Upload sprite file</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={LinkIcon} />}
          />
          <input 
            type='file' 
            ref={uploadRef} 
            style={{ display: 'none' }} 
            onChange={handleFileUpload}></input>
          <Input
            placeholder={"Sprite file ..."}
            onClick={() => uploadRef.current.click()}
            value={file ?? ''}
          />
        </InputGroup>
      </FormControl>
      {
        file &&
        <Fragment>
          <Stack direction={'row'} alignItems='center'>
            <Text minW={45}>Down</Text>
            <Image pt={2} src={`${process.env.PUBLIC_URL}/images/jpg/monster_down.jpeg`} minW={0} objectFit='cover'/>
          </Stack>
          <Stack direction={'row'} alignItems='center'>
            <Text minW={45}>Left</Text>
            <Image pt={2} src={`${process.env.PUBLIC_URL}/images/jpg/monster_left.jpeg`} minW={0} objectFit='cover'/>
          </Stack>
          <Stack direction={'row'} alignItems='center'>
            <Text minW={45}>Up</Text>
            <Image pt={2} src={`${process.env.PUBLIC_URL}/images/jpg/monster_up.jpeg`} minW={0} objectFit='cover' />
          </Stack>
          <Stack direction={'row'} alignItems='center'>
            <Text minW={45}>Right</Text>
            <Image pt={2} src={`${process.env.PUBLIC_URL}/images/jpg/monster_right.jpeg`} minW={0} objectFit='cover' />
          </Stack>
        </Fragment>
      }
    </Stack>
  )
}

export default PlayerEditor