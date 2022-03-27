import React from "react"
import Card from './Card'
import { connect } from "react-redux";
const PrimaryCard = ({ store }) => {
  if (store.primaryCard.id == '')
    return ""
  return (<Card card={store.primaryCard} />)
}
export default connect(store => ({ store: store }))(PrimaryCard)