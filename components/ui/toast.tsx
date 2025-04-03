"use client"

import type * as React from "react"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "destructive"
  onClose?: () => void
}

export const Toast: React.FC<ToastProps> = ({ title, description, variant = "default", onClose }) => {
  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg",
        variant === "destructive"
          ? "border-red-600 bg-red-600 text-white"
          : "border-gray-200 bg-white text-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      )}
    >
      <div className="grid gap-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-md p-1 text-gray-950/50 opacity-70 transition-opacity hover:text-gray-950 hover:opacity-100 dark:text-gray-50/50 dark:hover:text-gray-50"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export const ToastContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {children}
    </div>
  )
}

