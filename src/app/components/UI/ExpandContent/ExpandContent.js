import React from 'react'
import { Modal, ModalBody, Button } from 'reactstrap'

import './ExpandContent.scss'

const ExpandContent = (props) => {
  let { toggle, modal, children } = props

  return (
    <Modal isOpen={modal} toggle={toggle} className="ExpandContent">
      <Button outline color="light" className="btn-circle" onClick={toggle}>
        <span className="ar-icons ar-cancel-1"></span>
      </Button>
      <ModalBody>
        {children}
      </ModalBody>
    </Modal>
  )
}

export default ExpandContent
