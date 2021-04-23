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
import { BASE_URL } from '../../../utils/constants'

const DashboardPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure()
  const [detail, setDetail] = useState('')
  const [list, setList] = useState([])

  const onClickDetail = (item: any) => () => {
    setDetail(item)
  }

  const closeDrawer = () => {
    onCloseDrawer();
    setDetail('')
  }

  const onSuccessUpload = () => {
    setTimeout(() => {
      fetchData()
    }, 500)
  }

  useEffect(() => {
    if(detail){
      onOpenDrawer()
    }
  }, [detail])

  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}/list`)
    const data = await res.json()
    const filteredData = data.filter((item: any) => item.identitas.nama)

    setList(filteredData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Flex 
      width='100vw'
      alignItems='flex-start'
      justifyContent='flex-start'
      direction='column'
      height='100vh'
    >
      <Navbar />
      <FileUploader isOpen={isOpen} onClose={onClose} onSuccessUpload={onSuccessUpload} />
      <Flex 
        width='100%'
        mt='120px'
        padding='0px 240px 72px'
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
                <Th>#</Th>
                <Th>Nomor Surat</Th>
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
                list.length > 0 ? 
                  list.map((item: any, index: number) => (
                    <Tr key={item.id}>
                      <Td>{index + 1}</Td>
                      <Td>{item.developer.nomor_surat}</Td>
                      <Td>{item.identitas.nama}</Td>
                      <Td>{item.identitas.telpon}</Td>
                      <Td>{item.unit.tipe}</Td>
                      <Td>{item.price.cara_pembayaran}</Td>
                      <Td>{item.developer.nama_developer}</Td>
                      <Td><Button colorScheme="teal" onClick={onClickDetail(item)}>Lihat Detail</Button></Td>
                    </Tr>
                  )) : (
                    <Flex width='100%' p={8} alignItems='center' justifyContent='center'>
                      Please Wait
                    </Flex>
                  )
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