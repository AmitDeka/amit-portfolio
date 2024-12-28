import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-foreground/5 dark:bg-foreground/15",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
