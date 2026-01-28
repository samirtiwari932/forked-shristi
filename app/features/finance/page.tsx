import { Metadata } from "next";
import FinanceComponent from "./layout";

export const metadata: Metadata = {
  title: "Finance Management | Srishti Universe",
  description: "Manage donations, track expenses, and plan finances for families, community events, and heritage programs with transparency using Srishti Universe’s finance system.",
};

export default function FinancePage() {
  return <FinanceComponent />;
}