import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react';
import Footer from '../../footer';
import Navbar from '../../navbar';
import DetailDrawer from '../../drawer';
import { AddIcon } from '@chakra-ui/icons';
import FileUploader from '../../fileupload';
import { useEffect, useState } from 'react';

const DashboardPage = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure()
  const [detail, setDetail] = useState('')

  const onClickDetail = (item: any) => () => {
    setDetail(item)
  }

  const closeDrawer = () => {
    onCloseDrawer();
    setDetail('')
  }

  useEffect(() => {
    if(detail){
      onOpenDrawer()
    }
  }, [detail])

  return (
    <Flex 
      width='100vw'
      alignItems='flex-start'
      justifyContent='flex-start'
      direction='column'
      height='100vh'
    >
      <Navbar />
      <FileUploader isOpen={isOpen} onClose={onClose}/>
      <Flex 
        width='100%'
        mt='120px'
        padding='0px 240px'
        direction='column'
      >
        <Text fontSize='24px' fontWeight='500' mb='32px'>Daftar Transaksi Pembelian Properti</Text>
        <Flex w='100%' alignItems='center' justifyContent='flex-end' mb={4}>
          <Button colorScheme="teal" onClick={onOpen}>
            <AddIcon mr='12px'/>
            Tambah Transaksi
          </Button>
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
                data.map((item: any) => (
                  <Tr key={item.id}>
                    <Td>{item.developer.nomor_surat}</Td>
                    <Td>{item.identitas.nama}</Td>
                    <Td>{item.identitas.telpon}</Td>
                    <Td>{item.unit.tipe}</Td>
                    <Td>{item.price.cara_pembayaran}</Td>
                    <Td>{item.developer.nama_developer}</Td>
                    <Td><Button colorScheme="teal" onClick={onClickDetail(item)}>Lihat Detail</Button></Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </Flex>
      </Flex>
      <DetailDrawer onClose={closeDrawer} isOpen={isDrawerOpen} spr={detail}/>
      <Footer />
    </Flex>
  )
}
export default DashboardPage