'use client'

import { useMemo } from 'react'
import { FormEvent, ChangeEvent, useState } from 'react'
import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [state, setState] = useState<'initial' | 'submitting' | 'success'>('initial')
    const [error, setError] = useState(false)

    const newsletterTitles = [
        "Stay in the Loop: Join the Innovation Wave!",
        "Unlock Robotics Secrets: Subscribe Now!",
        "Revolutionize with Us: Sign Up for Updates!",
        "Be a Trailblazer: Get Robo-Updates!",
        "Embrace the Future: Subscribe to RoboInsights!",
        "Elevate Your Automation Game: Subscribe Today!",
        "Join the RoboRevolution: Sign Up Here!",
        "Robotics Unleashed: Subscribe for Exclusive Content!",
        "Upgrade Your Inbox: Robo-News Awaits!",
        "Dive into the Future: Subscribe to RoboVibes!"
    ];

    const randomNewsletterTitle = useMemo(() => {
        return newsletterTitles[Math.floor(Math.random() * newsletterTitles.length)]
    }
        , [])

    return (
        <Flex
            align={'center'}
            justify={'center'}
            py={12}
            grow={1}
        >
            <Container
                bg='whiteAlpha.100'
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}>
                <Heading
                    as={'h2'}
                    fontSize={{ base: 'l', sm: 'xl' }}
                    textAlign={'center'}
                    mb={5}>
                    {randomNewsletterTitle}
                </Heading>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    as={'form'}
                    spacing={'12px'}
                    onSubmit={(e: FormEvent) => {
                        e.preventDefault()
                        setError(false)
                        setState('submitting')

                        // remove this code and implement your submit logic right here
                        setTimeout(() => {
                            if (email === 'fail@example.com') {
                                setError(true)
                                setState('initial')
                                return
                            }

                            setState('success')
                        }, 1000)
                    }}>
                    <FormControl>
                        <Input
                            variant={'solid'}
                            borderWidth={1}
                            color={'gray.800'}
                            _placeholder={{
                                color: 'gray.400',
                            }}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            id={'email'}
                            type={'email'}
                            required
                            placeholder={'Your Email'}
                            aria-label={'Your Email'}
                            value={email}
                            disabled={state !== 'initial'}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl w={{ base: '100%', md: '40%' }}>
                        <Button
                            colorScheme={state === 'success' ? 'green' : 'orange'}
                            isLoading={state === 'submitting'}
                            w="100%"
                            type={state === 'success' ? 'button' : 'submit'}>
                            {state === 'success' ? <CheckIcon /> : 'Submit'}
                        </Button>
                    </FormControl>
                </Stack>
                <Text mt={2} textAlign={'center'} color={error ? 'red.500' : 'gray.500'}>
                    {error
                        ? 'Oh no an error occured! 😢 Please try again later.'
                        : "You won't receive any spam! ✌️"}
                </Text>
            </Container>
        </Flex>
    )
}