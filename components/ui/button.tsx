import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { primary: "bg-white text-black hover:bg-accent hover:shadow-[0_0_32px_rgba(110,231,255,.25)]", secondary: "border border-white/15 bg-white/[.04] text-white hover:border-white/30 hover:bg-white/[.08]", ghost: "text-muted hover:text-white" }, size: { default: "h-11 px-5", lg: "h-12 px-6" } }, defaultVariants: { variant: "primary", size: "default" } });

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export function Button({ className, variant, size, asChild, ...props }: ButtonProps) { const Comp = asChild ? Slot : "button"; return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />; }
