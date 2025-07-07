/**
 * Number formatting utilities for AnimatedNumber component
 */

import { NumberFormat } from "../index";

interface FormatOptions {
  format: NumberFormat;
  precision: number;
  separator: string;
  currencySymbol: string;
}

/**
 * Format a number according to specified options
 */
export function formatNumber(value: number, options: FormatOptions): string {
  const { format, precision, separator, currencySymbol } = options;

  // First round to specified precision
  const roundedValue = roundToPrecision(value, precision);

  switch (format) {
    case "currency":
      return formatCurrency(roundedValue, precision, separator, currencySymbol);
    case "percentage":
      return formatPercentage(roundedValue, precision);
    case "compact":
      return formatCompact(roundedValue, precision);
    case "plain":
    default:
      return formatPlain(roundedValue, precision, separator);
  }
}

/**
 * Round a number to specified precision
 */
function roundToPrecision(value: number, precision: number): number {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}

/**
 * Format a number with thousand separators
 */
function formatPlain(
  value: number,
  precision: number,
  separator: string
): string {
  // Convert to string with fixed precision
  const valueStr = value.toFixed(precision);

  // Split into integer and decimal parts
  const [integerPart, decimalPart] = valueStr.split(".");

  // Add thousand separators to integer part
  const formattedInteger = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    separator
  );

  // Combine parts
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

/**
 * Format a number as currency
 */
function formatCurrency(
  value: number,
  precision: number,
  separator: string,
  symbol: string
): string {
  return `${symbol}${formatPlain(value, precision, separator)}`;
}

/**
 * Format a number as percentage
 */
function formatPercentage(value: number, precision: number): string {
  return `${(value * 100).toFixed(precision)}%`;
}

/**
 * Format a number in compact notation (K, M, B, etc.)
 */
function formatCompact(value: number, precision: number): string {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1e9) {
    return `${sign}${(value / 1e9).toFixed(precision)}B`;
  } else if (absValue >= 1e6) {
    return `${sign}${(value / 1e6).toFixed(precision)}M`;
  } else if (absValue >= 1e3) {
    return `${sign}${(value / 1e3).toFixed(precision)}K`;
  } else {
    return value.toFixed(precision);
  }
}
