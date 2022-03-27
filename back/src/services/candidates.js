import axios from 'axios'
import { htmlParser } from './htmlParser.js'

let url = "https://portal3.dataprev.gov.br/situacao-concursados/2016";

async function getPageList(profile, page) {
  const { data } = await axios.get(url, {
    params: {
      field_candidato_value: "",
      field_cargo_value: "",
      field_perfil_value: "Desenvolvimento",
      field_lotacao_value: "Fortaleza",
      field_cadastro_reserva_value: "",
      field_cpf_value: "",
      "op-concurso": "Pesquisar",
      page
    }
  })
  console.log('Page', page)
  return data
}

async function checkPageCPF(name, profile, cpf) {
  console.log('Checking: ', cpf)
  const { data } = await axios.get(url, {
    params: {
      field_candidato_value: name,
      field_cargo_value: "",
      field_perfil_value: profile,
      field_lotacao_value: "Fortaleza",
      field_cadastro_reserva_value: "",
      field_cpf_value: cpf,
      "op-concurso": "Pesquisar"
    }
  })
  console.log('Result: ', data.indexOf("<table"))
  if (data.indexOf("<table") > -1) {
    return true;
  }
  else {
    return false;
  }
}
async function getList(profile) {
  const maxPages = 1;
  if (!global.candidates) {
    global.candidates = {}
  }
  if (!global.candidates[profile]) {
    let objs = []
    let i = 0
    let dataHtml = ""
    while (true) {
      dataHtml = await getPageList(profile, i)
      if (i > (maxPages - 1) || dataHtml.indexOf("<table") < 0) {
        break;
      }
      objs = objs.concat(htmlParser(dataHtml))
      i++
    }
    global.candidates[profile] = objs
  }
  return global.candidates[profile]
}

async function checkCpf(card) {
  if (!global.card) {
    global.card = {}
  }
  if (!global.card[card.id]) {
    global.card[card.id] = {}
    global.card[card.id].id = card.id
  }
  if (global.card[card.id].waiting) {
    return { ...card, waiting: true };
  }
  global.card[card.id].waiting = true;
  console.log('Start of checkCPF')
  if (card.cpf === '') {
    console.log('CPF is empty')
    if (card.cpfChunk.length < 11) {
      console.log('Chunk is less than 11')
      if (card.cpfCheckingLeft !== '') {
        if (card.cpfCheckingLeft === '?')
          card.cpfCheckingLeft = -1
        console.log(`Checking left CPF ${card.cpfCheckingLeft}`)
        card.cpfCheckingLeft = parseInt(card.cpfCheckingLeft)
        if (card.cpfCheckingLeft < 9) {
          card.cpfCheckingLeft++
          let ok = await checkPageCPF(card.name, card.profile, card.cpfCheckingLeft.toString() + card.cpfChunk)
          if (ok) {
            console.log('Left CPF OK')
            card.cpfChunk = card.cpfCheckingLeft.toString() + card.cpfChunk
            card.cpfCheckingLeft = -1
            global.card[card.id].waiting = false;
            return card
          }
          console.log(`Left CPF false, send next: ${card.cpfCheckingLeft}`)
          global.card[card.id].waiting = false;
          return card
        }
        else {
          console.log(`Left CPF ${card.cpfCheckingLeft} in the end, send to check right cpf`)
          card.cpfCheckingLeft = ''
          card.cpfCheckingRight = -1
          global.card[card.id].waiting = false;
          return card
        }
      }
      else if (card.cpfCheckingRight !== '') {
        console.log('Checking right CPF')
        card.cpfCheckingRight = parseInt(card.cpfCheckingRight)
        if (card.cpfCheckingRight < 9) {
          card.cpfCheckingRight++
          let ok = await checkPageCPF(card.name, card.profile, card.cpfChunk + "" + card.cpfCheckingRight)
          if (ok) {
            console.log('Right CPF OK')
            card.cpfChunk = card.cpfChunk + "" + card.cpfCheckingRight
            card.cpfCheckingRight = -1
            global.card[card.id].waiting = false;
            return card
          }
          console.log('Right CPF false, sending next')
          global.card[card.id].waiting = false;
          return card
        }
      }
      console.log('Error to discovery CPF')
      card.cpfChunk = ''
      card.cpfCheckingLeft = ''
      card.cpfCheckingRight = ''
      card.cpf = 'XXXXXXXXXXX'
      global.card[card.id].waiting = false;
      return card
    }
    else {
      console.log('CPF discovery sucessfully')
      card.cpf = card.cpfChunk
      card.cpfChunk = ''
      card.cpfCheckingLeft = ''
      card.cpfCheckingRight = ''
      global.card[card.id].waiting = false;
      return card
    }
  }
  else {
    console.log('Returing the same card')
    global.card[card.id].waiting = false;
    return card
  }
}

export { getList, checkCpf }