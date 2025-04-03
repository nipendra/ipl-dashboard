import * as React from "react"

import { cn } from "../../lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-white text-gray-950 shadow-sm dark:bg-gray-950 dark:text-gray-50", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6", className)} {...props} />,
)
CardContent.displayName = "CardContent"

export { Card, CardContent }

