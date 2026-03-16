import React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

// Note: @radix-ui/react-progress is not in package.json, so I will implement a simple Tailwind version
// to avoid dependency issues, as I cannot add new packages easily without risk.
// Actually, I can add it to package.json, but a simple div implementation is safer and lighter for this task.

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-gray-100",
      className
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-[#3b82f6] transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
))
Progress.displayName = "Progress"

export { Progress }