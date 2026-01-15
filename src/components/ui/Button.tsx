import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-widest uppercase font-sans",
    {
        variants: {
            variant: {
                default: "bg-deep-black text-ivory hover:bg-charcoal hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-transparent",
                outline: "border border-deep-black bg-transparent hover:bg-deep-black hover:text-ivory text-deep-black",
                gold: "bg-champagne text-deep-black hover:bg-champagne-light hover:shadow-lg",
                ghost: "hover:bg-black/5 text-deep-black",
                link: "text-deep-black underline-offset-4 hover:underline",
                "luxury-underline": "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full bg-transparent text-deep-black p-0 h-auto"
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-10 px-6",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
                link: "h-auto p-0"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
