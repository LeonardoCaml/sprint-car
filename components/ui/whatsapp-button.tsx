"use client";

import type React from "react";
import { Button } from "./button";
import { cn } from "../../lib/utils";

interface WhatsAppButtonProps {
  variant?: "default" | "outline" | "yellow";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  variant = "default",
  size = "default",
  className,
  children = "WhatsApp",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/554831974041?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações",
      "_blank"
    );
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return "border-green-500 text-green-600 hover:bg-green-50 bg-transparent";
      case "yellow":
        return "bg-white border-yellow-600 text-yellow-700 hover:bg-yellow-50";
      default:
        return "bg-green-500 hover:bg-green-600 text-white";
    }
  };

  return (
    <div className="relative inline-block">
      {/* Botão principal */}
      <Button
        onClick={handleWhatsAppClick}
        variant={
          variant === "outline" || variant === "yellow" ? "outline" : "default"
        }
        size={size}
        className={cn(
          "relative z-10 rounded-full  animate-bounce",
          getVariantStyles(),
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
