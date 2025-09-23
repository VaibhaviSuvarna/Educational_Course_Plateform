'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { X, Mail, LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function AuthDialog({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl mx-4"
      >
        <button
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-1 text-center">
          <h3 className="text-xl font-semibold">Welcome</h3>
          <p className="text-sm text-gray-600">Sign in or create an account</p>
        </div>

        <div className="mt-6 space-y-3">
          <Button
            className="w-full h-11 bg-blue-600 hover:bg-blue-700"
            onClick={() => signIn('google', { callbackUrl: typeof window !== 'undefined' ? window.location.href : '/' })}
          >
            <LogIn className="mr-2 h-4 w-4" /> Continue with Google
          </Button>

          <div className="text-center text-xs text-gray-500">
            By continuing, you agree to our Terms and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  )
}


