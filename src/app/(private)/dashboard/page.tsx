import { Field } from '@/components/custom/field';
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Avatar, Card, Flex, Grid, Section, Box , Text, TextField, Select, Button, Separator } from "@radix-ui/themes"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Command } from "@/components/ui/command"


export default function Test() {

  

  return(
    //Elemento pai
    <Flex position={'absolute'} justify={'start'} direction={'column'} align={'start'} height={'100vh'}>

      {/*Barra Menu*/}
      <Card>

        <Flex height={'35px'} width={'1575px'} justify={'center'} align={'center'}>

          <Box width={'600px'} position={'absolute'} >
            <Field icon={<MagnifyingGlassIcon />}></Field>
          </Box>

          <Box width={'1400px'}>
            <Text size={'4'}>Dashboard</Text>
          </Box>

          <Box >
            <Avatar fallback="M" />
          </Box>

        </Flex>

      </Card>

      {/*Coluna de Opições*/}
      <Box style={{background: 'var(--green-9)' }} height={'100vh'} width={'350px'}>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger style={{width:'600px'}} >Alguma coisa</AccordionTrigger>
          <Separator size={'4'} color='crimson' />
          <AccordionContent>
            <Button className='w-full' variant="ghost"> Não sei o que </Button>
          </AccordionContent>
          <Separator size={'4'} color='crimson' />
          <AccordionContent>
            <Button className='w-full' variant="ghost"> Blá blá blá blá </Button>
          </AccordionContent>
          <Separator size={'4'} color='crimson' />
          <AccordionContent>
            <Button className='w-full' variant="ghost"> Chamaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      </Box>

    </Flex>
  )
}