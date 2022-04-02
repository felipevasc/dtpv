import React from 'react'

function formatCpf(cpf) {
  return cpf.replace(/[^\d\?]/g, '').replace(/([0-9\?]{3})([0-9\?]{3})([0-9\?]{3})([0-9\?]{2})/, "$1.$2.$3-$4")
}

function getFormattedCpf(cpf, cpfChunk, cpfCheckingLeft, cpfCheckingRight) {
  let cpfFormatted = ''
  if (cpf === "") {
    cpfFormatted = cpfChunk

    if (cpfCheckingLeft !== "") {
      cpfFormatted = cpfCheckingLeft + "" + cpfFormatted
    }
    else if (cpfCheckingRight !== "") {
      cpfFormatted = cpfFormatted + "" + cpfCheckingRight
    }
    cpfFormatted = formatCpf(cpfFormatted)
    while (cpfFormatted.length < 14) {
      cpfFormatted = formatCpf(cpfFormatted + "?")
    }
  } else {
    cpfFormatted = formatCpf(cpf)
  }
  return cpfFormatted
}

export default function ({ cpf, cpfChunk, cpfCheckingLeft, cpfCheckingRight }) {
  let cpfFormatted = getFormattedCpf(cpf, cpfChunk, cpfCheckingLeft, cpfCheckingRight);
  return (
    <span className='cpf'>
      <span className="p1">{!!cpfCheckingLeft ?
        cpfFormatted.substring(0, 1) :
        cpfFormatted.substring(0, cpfFormatted.indexOf('?') - 1)}
      </span>
      <span className="p2">{!!cpfCheckingLeft ?
        cpfFormatted.substring(1, cpfFormatted.indexOf('?', 2)) :
        cpfFormatted.substring(cpfFormatted.indexOf('?') - 1, cpfFormatted.indexOf('?'))}
      </span>
      <span className="p3">{!!cpfCheckingLeft ?
        cpfFormatted.substring(cpfFormatted.indexOf('?', 2)) :
        cpfFormatted.substring(cpfFormatted.indexOf('?'))}
      </span>
    </span>
  )
}