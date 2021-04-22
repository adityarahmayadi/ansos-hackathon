import { 
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.50', 'gray.700')
  const switchLabel = useColorModeValue('Dark Mode', 'Light Mode')
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex direction="column" background={formBackground} p={12} rounded={4} width={360}>
        <Flex alignItems='center' direction='column' width='100%'>
          <Heading mb={8}>Login</Heading>
        </Flex>
        <Input placeholder="ansos@hackathon.com" variant="filled" mb={4} type="email" />
        <Input placeholder="******" variant="filled" mb={4} type="password" />
        <Button colorScheme="teal" mb={4}>Log In</Button>
        <FormControl display="flex" alignItems="center" justifyContent='center'>
          <FormLabel htmlFor="darkmode-switch" mb="0" colorScheme="gray">
            {switchLabel}
          </FormLabel>
          <Switch 
            id="darkmode-switch"
            onChange={toggleColorMode}
            colorScheme="teal"
          />
        </FormControl>
      </Flex>
    </Flex>  
  )
}

export default IndexPage
