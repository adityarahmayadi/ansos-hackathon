import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Icon,
  useColorModeValue
} from "@chakra-ui/react"
import Dropzone from 'react-dropzone'
import { FiUpload } from "react-icons/fi";

interface FileUploaderProps {
  isOpen: boolean,
  onClose(): void,
}

const FileUploader = ({
  isOpen,
  onClose
}: FileUploaderProps) => {
  const iconBg = useColorModeValue('gray.50', 'gray.700')
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload SPR</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex w='100%' direction='column' pb='32px' alignItems='center'>
            <Flex
              w='100%'
              padding='12px'
              backgroundColor={iconBg}
              alignItems='center'
              justifyContent='center'
              borderRadius='8px'
              mb={4}
            >
              <Icon as={FiUpload} w={32} h={32} />
            </Flex>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <div {...getRootProps()} style={{width: '100%'}}>
                  <input {...getInputProps()} />
                    <Button colorScheme='teal' isFullWidth>Upload SPR</Button>
                </div>
              )}
            </Dropzone>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default FileUploader