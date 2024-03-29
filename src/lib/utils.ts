import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(num: number) {
  return Intl.NumberFormat('ru-Ru', { style: 'currency', currency: 'rub', maximumFractionDigits: 0 }).format(num)
}
