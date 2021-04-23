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
  spr: any,
}

const DetailDrawer = ({ isOpen, onClose, spr }: DetailDrawerProps) => {
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
          {
            spr && (
              <DrawerBody>
                <Stack spacing={8}>
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Identitas Pembeli</Text>
                    <Text fontSize='14px' mb='8px'>
                      Nama: {spr.identitas.nama}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Email: {spr.identitas.email}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Alamat: {spr.identitas.alamat}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      No KTP: {spr.identitas.no_ktp}
                    </Text>
                  </Flex>

                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Developer</Text>
                    <Text fontSize='14px' mb='8px'>
                      Developer: {spr.developer.nama_developer}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Agent: {spr.developer.agent}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      No Surat: {spr.developer.nomor_surat}
                    </Text>
                  </Flex>

                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Unit</Text>
                    <Text fontSize='14px' mb='8px'>
                      Tipe: {spr.unit.tipe}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Blok: {spr.unit.blok}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Luas Tanah: {spr.unit.luas_tanah}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Perumahan: {spr.unit.perumahan}
                    </Text>
                  </Flex>

                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='semibold' textTransform='uppercase' mb='12px'>Rincian Harga</Text>
                    <Text fontSize='14px' mb='8px'>
                      Harga Kredit: {spr.price.harga_kredit}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Cara Pembayaran: {spr.price.cara_pembayaran}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Harga Jual: {spr.price.harga_jual}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Diskon: {spr.price.diskon}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Harga Bersih: {spr.price.harga_bersih}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      KPR Max: {spr.price.kpr_max}
                    </Text>
                    <Text fontSize='14px' mb='8px'>
                      Uang Muka: {spr.price.uang_muka}
                    </Text>
                  </Flex>
                </Stack>
              </DrawerBody>
            )
          }
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default DetailDrawer