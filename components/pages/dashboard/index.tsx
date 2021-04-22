import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import Footer from '../../footer';
import Navbar from '../../navbar';
import Dropzone from 'react-dropzone'

const DashboardPage = () => (
  <Flex 
    width='100vw'
    alignItems='flex-start'
    justifyContent='flex-start'
    direction='column'
    height='100vh'
  >
    <Navbar />
    {/* content */}
    <Flex 
      width='100%'
      mt='120px'
      padding='0px 240px'
      direction='column'
    >
      <Text fontSize='24px' fontWeight='500' mb='32px'>Daftar Transaksi Pembelian Properti</Text>
      <Flex w='100%' alignItems='center' justifyContent='flex-end' mb={4}>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Button colorScheme="teal">Upload SPR</Button>
              </div>
            </section>
          )}
        </Dropzone>
      </Flex>
      <Flex width='100%' border='1px solid #d3d3d3' borderRadius='8px'>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nomor</Th>
              <Th>Nama</Th>
              <Th>Nomor Telepon</Th>
              <Th>Tipe</Th>
              <Th>Cara Pembayaran</Th>
              <Th>Nama Developer</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              [1,2,3,4,5].map(item => (
                <Tr key={item}>
                  <Td>SPR/05718/GRIN/B307</Td>
                  <Td>Hasya Alfina</Td>
                  <Td>081244232311</Td>
                  <Td>70 B3/07</Td>
                  <Td>Kas Bertahap</Td>
                  <Td>Pin Properti</Td>
                  <Td><Button colorScheme="teal">Lihat Detail</Button></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Flex>
    </Flex>
    <Footer />
  </Flex>
)

export default DashboardPage