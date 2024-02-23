import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

const theme = {
  background: '#fff',
  headerBgColor: '#EBCC49',
  headerFontColor: '#fff',
  headerFontSize: '#20px',
  botBubbleColor: '#EBCC49',
  botFontColor: '#fff',
  userBubbleColor: '#337ab7',
  userFontColor: '#fff',

}

export default class Contenido extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "1",
              message: "Hola, soy un chatbot. ¿Cómo te llamas?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              validator: (value) => {
                if (/^[A-Z,a-z]{2,15}/.test(value)) {
                  return true;
                }
                else {
                  return 'Introduzca un nombre válido, por favor.';
                }
              },
              trigger: "3",
            },
            {
              id: "3",
              message: 'Hola {previousValue} !',
              trigger: "4",
            },
            {
              id: "4",
              message: '¿Puedo ayudarle en algo?',
              trigger: "5",
            },
            {
              id: "5",
              options: [
                { value: "y", label: "Sí", trigger: "6A" },
                { value: "n", label: "No", trigger: "6B" },
              ]
            },
            {
              id: "6A",
              message: 'Selecciona con qué está relacionado tu problema.',
              trigger: "7",
            },
            {
              id: "6B",
              message: 'Siento no poder ayudarte. Que tengas un buen día!',
              end: true,
            },
            {
              id: "7",
              options: [
                {value: "cursos", label: "Dudas sobre cursos", trigger: "7A"},
                {value: "pago", label: "Métodos de pago", trigger: "7B"},
                {value: "cuenta", label: "Mi cuenta", trigger: "7C"},
                {value: "soporte", label: "Soporte técnico", trigger: "7D"},
              ]
            },
            {
              id: "7A",
              message: 'De acuerdo. Nos pondremos en contacto con usted en menos de 24h para resolver sus dudas sobre nuestros cursos',
              end: true,
            },
            {
              id: "7B",
              message: 'De acuerdo. Nos pondremos en contacto con usted en menos de 24h para resolver sus dudas sobre los métodos de pago',
              end: true,
            },
            {
              id: "7C",
              message: 'De acuerdo. Nos pondremos en contacto con usted en menos de 24h para resolver sus dudas sobre su cuenta',
              end: true,
            },
            {
              id: "7D",
              message: 'De acuerdo. Soporte técnico se pondrá en contacto con usted en menos de 24h.',
              end: true,
            }
            
          ]}
        />
      </ThemeProvider>
    )
  }
}