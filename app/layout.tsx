import './globals.css'
import TopNavigation from "./TopNavigation"
import SideNavigation from "./SideNavigation"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className="flex flex-col  h-screen w-screen">
          <TopNavigation />
          <div className="flex  flex-1">
           <SideNavigation />
            {children}
            </div>
        </div> 
      </body>
    </html>
  )
}