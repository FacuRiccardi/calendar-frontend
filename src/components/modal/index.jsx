import ModalUI from "@mui/material/Modal"
import Box from "@mui/material/Box"

function Modal({ open, children, height = 500 }) {

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height,
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    borderRadius: "4px",
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }

  return (
    <ModalUI open={open}>
      <Box sx={boxStyle}>{children}</Box>
    </ModalUI>
  )
}

export default Modal
