import { useRef } from 'react'
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'


export default function EmailSend({ urls }: { urls: string[] }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values: any) {
        console.log(values)
        // Add URLs list to the email
        values.urls = urls;

        return fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })



    }

    return (
        <>
            <Button onClick={onOpen}>Recieve on Email</Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Send Email</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl>
                                <FormLabel htmlFor='name'>Your Name</FormLabel>
                                <Input
                                    id='name'
                                    placeholder='name'
                                    {...register('name', {
                                        required: 'This is required',
                                        minLength: { value: 4, message: 'Minimum length should be 4' },
                                    })}
                                />


                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input
                                    id='email'
                                    placeholder='email'
                                    {...register('email', {
                                        required: 'This is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Entered value does not match email format',
                                        },
                                    })}
                                />

                            </FormControl>
                            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                                Submit
                            </Button>
                        </form>


                    </ModalBody>

                    <ModalFooter>

                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}