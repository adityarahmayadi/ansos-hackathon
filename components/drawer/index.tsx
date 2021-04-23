import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Flex,
  Text
} from '@chakra-ui/react'

interface DetailDrawerProps {
  isOpen: boolean,
  onClose(): void,
}

const DetailDrawer = ({ isOpen, onClose }: DetailDrawerProps) => {
  return(
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size='xl'
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Detail Transaksi</DrawerHeader>
          <DrawerBody>
            <Stack spacing={8}>
              <Flex direction='column'>
                <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Identitas Pembeli</Text>
                <Text fontSize='14px' mb='8px'>
                  Nama: Hasya
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Email: ansos@lala.com
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Alamat: Hasya
                </Text>
                <Text fontSize='14px' mb='8px'>
                  No KTP: Hasya
                </Text>
              </Flex>

              <Flex direction='column'>
                <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Developer</Text>
                <Text fontSize='14px' mb='8px'>
                  Developer: PT. KELUARGA SEJAHTERA PROPERTINDO
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Agent: Ansos
                </Text>
                <Text fontSize='14px' mb='8px'>
                  No Surat: SPR/05718/GRIN/8307
                </Text>
              </Flex>

              <Flex direction='column'>
                <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Unit</Text>
                <Text fontSize='14px' mb='8px'>
                  Tipe: Type F0
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Blok: No.2 Nb.F
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Luas Tanah: 30 m2
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Perumahan: Griva Indaa
                </Text>
              </Flex>

              <Flex direction='column'>
                <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Rincian Harga</Text>
                <Text fontSize='14px' mb='8px'>
                  Harga Kredit: Rp 900.000.000
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Cara Pembayaran: Tunai / Kredit
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Harga Jual: Rp 550.000.000
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Diskon: Rp %0.000.000
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Harga Bersih: 
                </Text>
                <Text fontSize='14px' mb='8px'>
                  KPR Max: 00-000 000
                </Text>
                <Text fontSize='14px' mb='8px'>
                  Uang Muka: Rp 100.000.000
                </Text>
              </Flex>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default DetailDrawer