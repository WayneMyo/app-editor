import React, { useState } from 'react';
import ProviderFlow from './components/ProviderFlow';
import SidePanel from './components/SidePanel';
import { Heading, Box, Divider, Stack, Flex } from '@chakra-ui/react'

const App = () => {

  /** selected side panel option */
  const [ selectedOption, setSelectedOption ] = useState('onInit')
  
  const handleOptionClick = (option, event) => {
    setSelectedOption(option)
  }

  return (
    <Stack direction='column' flex={1} spacing={0} className="App" overflow={'hidden'}>
      <Box as='nav' h={62} minH={62} display={'flex'} px={4} alignItems={'center'}>
        <Heading color={'gray.600'} size='md'>Zep-script Editor</Heading>
      </Box>
      <Divider borderBottomWidth={2} />
      <Stack direction='row' spacing='12px' height={'100%'}>
        <Flex w='320px' h='100%' direction={'row'}>
          <SidePanel selected={selectedOption} onClick={handleOptionClick} />
          <Divider orientation='vertical' borderLeftWidth={2} />
        </Flex>
        <Box display='flex' flex={1} position='relative'>
          <ProviderFlow selected={selectedOption} />
        </Box>
      </Stack>
      {/* <iframe height='500' style={{minHeight: 500 }} src="https://zep.us/play/8Z3Rej"></iframe> */}
    </Stack>
  );
}

export default App;