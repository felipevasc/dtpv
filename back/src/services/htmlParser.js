function getTds(htmlTr) {
    let objs = []
    let start = -1
    do {
        start = htmlTr.indexOf("<td")
        let end = htmlTr.indexOf("</td>")
        let td = htmlTr.substr(start, end - start)
        td = td.substr(td.indexOf(">") + 1).replace('\n', '').trim()
        objs.push(td)
        htmlTr = htmlTr.substr(end + 5)
    } while (start > -1)
    if (objs.length > 7) {
        let newObj = {
            job: objs[0],
            profile: objs[1],
            city: objs[2],
            classification: objs[5],
            name: objs[6],
            id: objs[7],
            status: objs[8],
            cpf: "",
            cpfCheckingLeft: -1,
            cpfCheckingRight: "",
            cpfChunk: "",
            waiting: false
        }
        return newObj
    }
    return {}
}

function getTrs(htmlTbody) {
    let objs = [];
    let start = 0
    let i = 0
    const maxCandidatesByPage = 30
    do {
        start = htmlTbody.indexOf("<tr");
        let end = htmlTbody.indexOf("</tr>");
        let tr = htmlTbody.substr(start, end - start)
        objs.push(getTds(tr))
        htmlTbody = htmlTbody.substr(end + 5)
        i++
        if (i > maxCandidatesByPage)
            break
    } while (start > -1)
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