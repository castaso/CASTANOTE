import Image from 'next/image'

import { cn } from '@/lib/utils'

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <>
      <Image
        src="/brand/wordmark-light.svg"
        width={739}
        height={108}
        alt="CASTANOTE"
        data-testid="castanote-wordmark"
        className={cn('dark:hidden', className)}
      />
      <Image
        src="/brand/wordmark-dark.svg"
        width={709}
        height={108}
        alt=""
        aria-hidden="true"
        className={cn('hidden dark:block', className)}
      />
    </>
  )
}

export function BrandLogo({ className }: { className?: string }) {
  return (
    <>
      <Image
        src="/brand/logo-light.svg"
        width={90}
        height={111}
        alt="CASTANOTE"
        data-testid="castanote-logo"
        className={cn('dark:hidden', className)}
      />
      <Image
        src="/brand/logo-dark.svg"
        width={90}
        height={111}
        alt=""
        aria-hidden="true"
        className={cn('hidden dark:block', className)}
      />
    </>
  )
}
