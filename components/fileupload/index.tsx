import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react"
import Dropzone from 'react-dropzone-uploader'

interface FileUploaderProps {
  isOpen: boolean,
  onClose(): void,
}

const FileUploader = ({
  isOpen,
  onClose
}: FileUploaderProps) => {

  const getUploadParams = ({ file }: any) => {
    const body = new FormData();
    // file.name = file.name.split(' ').join('_').toLowerCase()
    body.append('image', file);
    return { url: 'https://200f66adafe8.ngrok.io/upload', body }
  }

  const handleChangeStatus = ({ meta, remove }: any, status: any) => {
    if (status === 'headers_received') {
      alert(`${meta.name} uploaded!`)
      remove()
    } else if (status === 'aborted') {
      alert(`${meta.name}, upload failed...`)
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