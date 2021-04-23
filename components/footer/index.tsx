import { 
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const Footer = () => {
  const backgroundNavbar = useColorModeValue('gray.50', 'gray.700')
  return (
    <Flex 
    width='100%'
    alignItems='center'
    justifyContent='center'
    position='fixed'
    bottom={0}
    left={0}
    p={4}
    boxShadow='sm'
    backgroundColor={backgroundNavbar}
  >
    <Text>Ansos © 2021 - Pinhackathon</Text>
  </Flex>
  )
}

export default Footer