import { Flex } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AppPanel from '../AppPanel'
import WidgetPanel from '../WidgetPanel'
import MapPanel from '../MapPanel'
import PlayerPanel from '../PlayerPanel'



const SidePanel = ({ selected, onClick }) => {

  return (
    <Flex flex={1} pt={4}>
      <Tabs flex={1} isFitted variant={'enclosed'}>
        <TabList>
          <Tab>App</Tab>
          <Tab>Map</Tab>
          <Tab>Player</Tab>
          <Tab>Widget</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AppPanel selected={selected} onClick={onClick} />
          </TabPanel>
          <TabPanel>
            <MapPanel selected={selected} onClick={onClick} />
          </TabPanel>
          <TabPanel>
            <PlayerPanel selected={selected} onClick={onClick} />
          </TabPanel>
          <TabPanel>
            <WidgetPanel selected={selected} onClick={onClick} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default SidePanel
