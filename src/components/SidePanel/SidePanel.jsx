import { Flex } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AppPanel from '../AppPanel'
import WidgetPanel from '../WidgetPanel'
import MapPanel from '../MapPanel'
import PlayerPanel from '../PlayerPanel'

const SidePanel = ({ selected, onClick }) => {

  return (
    <Flex as={'aside'} flex={1} pt={4}>
      <Tabs flex={1} isFitted variant={'enclosed'}>
        <TabList>
          <Tab>App</Tab>
          <Tab>Map</Tab>
          <Tab>Player</Tab>
          <Tab>Widget</Tab>
        </TabList>

        <TabPanels position={'relative'} height='100%' mb={5}>
          <TabPanel position={'absolute'} top={0} bottom={0} width='100%' overflow={'auto'}>
            <AppPanel selected={selected} onClick={onClick} />
          </TabPanel>
          <TabPanel position={'absolute'} top={0} bottom={0} width='100%' overflow={'auto'}>
            <MapPanel selected={selected} onClick={onClick} />
          </TabPanel>
          <TabPanel position={'absolute'} top={0} bottom={0} width='100%' overflow={'auto'}>
            <PlayerPanel selected={selected} onClick={onClick} />
          </TabPanel>
          <TabPanel position={'absolute'} top={0} bottom={0} width='100%' overflow={'auto'}>
            <WidgetPanel selected={selected} onClick={onClick} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default SidePanel
