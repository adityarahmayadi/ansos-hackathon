import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  useToast
} from "@chakra-ui/react"
import Dropzone from 'react-dropzone-uploader'
import { BASE_URL } from '../../utils/constants'

interface FileUploaderProps {
  isOpen: boolean,
  onClose(): void,
}

const FileUploader = ({
  isOpen,
  onClose
}: FileUploaderProps) => {
  const toast = useToast()
  const getUploadParams = ({ file }: any) => {
    const body = new FormData();
    body.append('image', file);
    return { url: `${BASE_URL}/upload`, body }
  }

  const handleChangeStatus = ({ meta, remove }: any, status: any) => {
    if (status === 'headers_received') {
      toast({
        title: `${meta.name} uploaded`,
        description: "We've receive your SPR",
        position: 'top',
        status: "success",
        isClosable: true,
      })
      remove()
    } else if (status === 'aborted') {
      toast({
        title: `${meta.name} failed to upload`,
        description: "Sorry we couldn't receive the file",
        position: 'top',
        status: "error",
        isClosable: true,
      })
    }
  }

  
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload SPR</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex w='100%' direction='column' pb='32px' alignItems='center'>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              maxFiles={1}
              multiple={false}
              canCancel={false}
              inputContent="Upload SPR"
              styles={{
                dropzone: { width: 400, height: 200 },
                dropzoneActive: { borderColor: 'green' },
              }}
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default FileUploader