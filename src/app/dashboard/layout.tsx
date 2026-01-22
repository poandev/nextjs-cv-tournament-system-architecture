export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#E0F4F4]">
      {/* 右側內容區 */}
      <main className="flex-1">
        {/* <header className="bg-[#B2E7E7] p-2 px-6 flex justify-between items-center text-sm font-bold text-[#006666]">
          <span>可用點數: $990,579</span>
        </header> */}
        <div className="">{children}</div>
      </main>
    </div>
  );
}
