"use client";

export default function PrintButton() {
  return <button className="cta worksheetPrintButton" type="button" onClick={() => window.print()}>Print / save as PDF</button>;
}
