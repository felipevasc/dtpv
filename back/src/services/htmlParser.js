function getTds(htmlTr) {
  let objs = []
  let i = -1
  do {
    i = htmlTr.indexOf("<td")
    let f = htmlTr.indexOf("</td>")
    let td = htmlTr.substr(i, f - i)
    td = td.substr(td.indexOf(">") + 1).replace('\n', '').trim()
    objs.push(td)
    htmlTr = htmlTr.substr(f + 5)
  } while (i > -1)
  return objs
}

function getTrs (htmlTbody) {
  let objs = [];
  let i = 0
  do {
    i = htmlTbody.indexOf("<tr");
    let f = htmlTbody.indexOf("</tr>");
    let tr = htmlTbody.substr(i, f - i)
    objs.push(getTds(tr))
    htmlTbody = htmlTbody.substr(f + 5)
  } while (i > -1)
  return objs
}

function htmlParser(htmlData) {
  if (!!htmlData) {
    const conteudo = htmlData.substr(htmlData.indexOf('id="conteudo"'))
    let tbody = conteudo.substr(conteudo.indexOf("<tbody"))
    tbody = tbody.substr(0, tbody.indexOf("</tbody>") + 8)
    return getTrs(tbody)
  }
  
}

export { htmlParser }