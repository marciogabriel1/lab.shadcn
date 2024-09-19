"use client"

import { Field } from '@/components/custom/field';
import { PasswordField } from '@/components/custom/password-field';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {  ArrowRightIcon, EnvelopeClosedIcon, EyeClosedIcon, EyeOpenIcon, LockClosedIcon, ThickArrowRightIcon } from '@radix-ui/react-icons';
import { Flex, Text, Box, TextField, IconButton, Link, Heading} from '@radix-ui/themes';
import React from 'react';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function MyApp() {

  const router = useRouter();

  return (
  //Elemento pai
  <Flex direction="column" justify={'center'} align={'center'} height={'100vh'} gap="2">

  {/*Tela de login*/}
  <Card>
    {/*Definição de tamanho*/}
    <Flex direction={'column'} justify={'center'} align={'center'} p={'10px'}>
      {/*Tamanho definido pelo pai*/}

      <Heading my={'4'}>
        Tela de Login
      </Heading>

      <Flex direction={'column'} align={'stretch'} width={'500px'} p={'50px'} pb={'5'} pt={'20px'} gap={'3'}>

        {/*Parte do Email*/}
        <div>
          <Text size={'3'} >Email:</Text>
          <Field icon={<EnvelopeClosedIcon />} />
        </div>

        {/*Parte da senha*/}
        <div>
          <Text size={'3'}>Senha:</Text>
          <PasswordField />
        </div>

        <Button className='w-full' onClick={() => router.push('/dashboard')}>
          Entrar
        </Button>
      </Flex>

    </Flex >
    
  </Card>
  </Flex>
  );
}
