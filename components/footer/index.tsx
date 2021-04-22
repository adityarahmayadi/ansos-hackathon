import { 
  Flex,
  Text
} from '@chakra-ui/react'

const Footer = () => (
  <Flex 
    width='100%'
    alignItems='center'
    justifyContent='center'
    position='fixed'
    bottom={0}
    left={0}
    p={4}
    boxShadow='sm'
  >
    <Text>Ansos © 2021 - Pinhackathon</Text>
  </Flex>
)

export default Footer