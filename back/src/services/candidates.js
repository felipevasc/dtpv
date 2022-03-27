import axios from 'axios'
import { htmlParser } from './htmlParser.js'

let url = "https://portal3.dataprev.gov.br/situacao-concursados/2016";

async function getPageHtml(profile, page) {
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
async function getList(profile) {
  if (!global.candidates) {
    global.candidates = {}
  }
  if (!global.candidates[profile]) {
    let objs = []
    let i = 0
    let dataHtml = ""
    while (true) {
      dataHtml = await getPageHtml(profile, i)
      if (i > 20 || dataHtml.indexOf("<table") < 0) {
        break;
      }
      objs = objs.concat(htmlParser(dataHtml))
      i++
    }
    global.candidates[profile] = objs
  }
  return global.candidates[profile]
}

export { getList }