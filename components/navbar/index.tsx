import { 
  Flex,
  Avatar,
  Text
} from '@chakra-ui/react'

const Navbar = () => (
  <Flex 
    width='100vw'
    background='teal'
    position='fixed'
  >
    <Flex 
      direction='row'
      width='100vw'
      justifyContent='space-between'
      alignItems='center'
      padding="16px 240px"
    >
      <Flex>
        <Text fontSize='18px' fontWeight='semibold' color='white' textTransform='uppercase'>Ansos OCR</Text>
      </Flex>
      <Flex direction='row' alignItems='center'>
        <Text mr={4} fontSize='14px' fontWeight='semibold' color='white'>Admin property</Text>
        <Avatar 
          name="Dan Abrahmov" 
          src="https://2.bp.blogspot.com/-TaCkCEzCfP0/Wj812nC68bI/AAAAAAAAMgk/DFaoQhydN84hgYsgT1qaWve5LuhkcYsbwCLcBGAs/s1600/gege5.jpg" 
          size='sm' 
        />
      </Flex>
    </Flex>
  </Flex>
)

export default Navbar