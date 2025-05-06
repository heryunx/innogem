export default function DashboardUserPage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2 bg-white">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard! Here you can manage your account and view
          your transactions.
        </p>
      </div>
    </div>
  );
}
