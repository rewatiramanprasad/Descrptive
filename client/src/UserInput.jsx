import React from 'react'
import { Button, Input } from '@mui/joy'
import Modal from '@mui/joy/Modal'
import Divider from '@mui/joy/Divider'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import DialogActions from '@mui/joy/DialogActions'
import ModalDialog from '@mui/joy/ModalDialog'

function UserInput({
  openModal,
  setOpenModal,
  input,
  setInput,
  submitHandler,
}) {
  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalDialog variant="outlined" color="primary" sx={{ width: '800px' }}>
          <DialogTitle>Please check your URL and IP</DialogTitle>
          <Divider />
          <DialogContent>
            <Input
              color="primary"
              value={input}
              fullWidth
              onChange={(e) => {
                setInput(e.target.value)
              }}
              placeholder="Type your URL/IP"
              size="lg"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="solid"
              color="danger"
              onClick={submitHandler}
            >
              Submit
            </Button>
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default UserInput
