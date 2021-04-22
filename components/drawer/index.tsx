import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
            
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default DetailDrawer