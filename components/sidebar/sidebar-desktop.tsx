// import { auth } from '@/auth'
// import { ChatHistory } from '@/components/chat-history'
import { SidebarList } from './sidebar-list'
import Link from 'next/link'
// import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
// import { IconPlus } from './ui/icons'
// import { SidebarToggle } from './sidebar-toggle'
import { useTheme } from 'next-themes'
import { Sidebar } from './sidebar'

export async function SidebarDesktop() {
  // const {setTheme, theme} = useTheme();
  // const session = await auth()

  // if (!session?.user?.id) {
  //   return null
  // }

  return (
    <>
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      {/* <ChatHistory userId={session.user.id} /> */}
      {/* <div className="flex flex-col h-full"> */}
      {/* <div className="flex items-center justify-between p-4">
        <h4 className="text-sm font-medium">Chat History</h4>
      </div> */}
      <div className='flex items-center'>
      <img src="../logoblack.png" alt="Tradely Logo" className="w-3/5 h-3/5 object-contain mx-auto ml-0 mt-4 dark:hidden" />
      {/* <img src="../logo.jpg" alt="Tradely Logo" className="w-3/5 h-3/5 object-contain mx-auto ml-0 mt-4 dark:block" /> */}
        <div className = 'mt-5 mr-4'>
          {/* <SidebarToggle /> */}
        </div>
      </div>
      <div className="mb-2 px-2 mt-8 ml-auto mr-auto">
        {/* <Link
          href="/new"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-12 w-64 justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10 sm:rounded-full'
          )}
        > */}
          {/* <IconPlus className="-translate-x-2 stroke-2" /> */}
          Main Page
        {/* </Link> */}
      </div>
      <SidebarList />
      {/* Sidebar Toggle Button */}
    </Sidebar>
    <div className="fixed bottom-3 left-5 z-10">
        {/* <SidebarToggle /> */}
    </div>
    </>
  )
}
