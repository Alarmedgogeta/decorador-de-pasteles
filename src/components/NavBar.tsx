"use client";

import { useState } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-rose-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            <span className="font-playfair text-xl font-bold text-rose-700">
              Alan Diaz
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-stone-600 hover:text-rose-600 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white hover:bg-rose-700 transition-colors"
            >
              Cotizar Ahora
            </a>
          </div>

          <button
            className="md:hidden p-2 text-stone-700 hover:text-rose-600 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-rose-50 px-4 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-stone-700 hover:text-rose-600 transition-colors py-1"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-rose-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Cotizar Ahora
          </a>
        </div>
      )}
    </nav>
  );
}
