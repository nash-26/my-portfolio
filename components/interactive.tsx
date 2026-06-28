"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button 
      className={`${props.className || ''}`} 
      {...props}
    >
      {children}
    </button>
  );
}

