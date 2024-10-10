import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/AlertContext";
  import React, { useRef } from "react";
  import "./Alert.css"
  export default function Alert() {
    const { isOpen, message, type, onClose } = useAlertContext();
    const isSuccess = type === "success";
    const cancelRef = useRef();
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            py={2}
            px={0}
            backgroundColor={isSuccess ? "blueviolet" : "#FF8A65"}
            color="white"
          >
            <AlertDialogHeader className="headerA">
              {isSuccess ? "Your email has been sent successfully" : "Oops"}
            </AlertDialogHeader>
            <AlertDialogBody className="headerB">
              {message}
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }