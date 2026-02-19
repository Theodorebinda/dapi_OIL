import { Mail } from "lucide-react";
import Link from "next/link";

export default function BlockedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center flex-col gap-8">
      <h1 className="text-2xl font-semibold">
        {"Accès suspendu - Veuillez contacter l’administrateur"}
      </h1>
      <div className="flex items-center justify-center gap-4">
        <Mail className="w-6 h-6 text-blue-500 hover:text-blue-600 font-semibold hover:scale-110 transition-all duration-300" />
        <Link href="mailto:theodorebinda@gmail.com" className="text-blue-500 hover:text-blue-600 font-semibold " target="_blank" >{"Contactez l'administrateur"}</Link>
        </div>
    </main>
  );
}
