import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "react-bootstrap";

function Toastify({ type }) {
  function notify(type) {
    switch (type) {
      case "success":
        return toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });

      case "warning":
        return toast.warn("Warning Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      case "danger":
        return toast.error("Error Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      case "info":
        return toast.info("Info Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      default:
        return toast("Default Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
    }
  }

  return (
    <Button
      variant={type}
      style={{ width: "10rem" }}
      onClick={() => notify(type)}
    >
      {type === "danger"
        ? "Error"
        : type.charAt(0).toUpperCase() + type.slice(1)}
    </Button>
  );
}

export default Toastify;
