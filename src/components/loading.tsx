import { Skeleton } from "@/components/ui/skeleton"

export const Loading = () => (
  <div className="w-full h-screen flex items-center justify-center bg-background">
    <div className="space-y-4">
      <Skeleton className="h-12 w-64 bg-primary/20" />
      <Skeleton className="h-4 w-48 bg-primary/20" />
      <Skeleton className="h-4 w-40 bg-primary/20" />
    </div>
  </div>
)

