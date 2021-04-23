import { 
  Flex,
  Avatar,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  const toggleIcon = useColorModeValue(<MoonIcon />, <SunIcon />)
  const backgroundNavbar = useColorModeValue('gray.50', 'gray.700')
  return (
    <Flex 
      width='100vw'
      position='fixed'
      boxShadow='sm'
      backgroundColor={backgroundNavbar}
      zIndex='1000'
    >
      <Flex 
        direction='row'
        width='100vw'
        justifyContent='space-between'
        alignItems='center'
        padding="16px 240px"
      >
        <Flex>
          <Text fontSize='18px' fontWeight='semibold' colorScheme='teal' textTransform='uppercase'>Ansos OCR</Text>
        </Flex>
        <Flex direction='row' alignItems='center'>
          <IconButton
            background='transparent'
            aria-label="Change color mode"
            icon={toggleIcon}
            mr={4}
            onClick={toggleColorMode}
          />
          <Text mr={4} fontSize='14px' fontWeight='semibold' colorScheme='teal'>Admin property</Text>
          <Avatar 
            name="Dan Abrahmov" 
            src="https://2.bp.blogspot.com/-TaCkCEzCfP0/Wj812nC68bI/AAAAAAAAMgk/DFaoQhydN84hgYsgT1qaWve5LuhkcYsbwCLcBGAs/s1600/gege5.jpg" 
            size='sm' 
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar