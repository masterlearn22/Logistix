import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'solid' | 'glass';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'solid',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-xl overflow-hidden';
  const variants = {
    solid: 'bg-white shadow-md hover:shadow-xl transition-shadow',
    glass: 'glass-dark',
  };

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
