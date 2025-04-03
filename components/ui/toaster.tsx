"use client"

import { useToast } from "../../hooks/use-toast"
import { Toast, ToastContainer } from "./toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          onClose={() => dismiss(toast.id)}
        />
      ))}
    </ToastContainer>
  )
}

