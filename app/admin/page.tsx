import { redirect } from "next/navigation";
import { isAdminRequest, adminConfigured } from "@/lib/admin-auth";
import Dashboard from "@/components/admin/Dashboard";

export default async function AdminPage() {
  if (!adminConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg px-4 text-ink antialiased">
        <div className="w-full max-w-[480px] rounded-xl border border-line bg-surface p-8">
          <h1 className="text-lg font-bold tracking-tight">Admin is not configured</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            This deployment is missing its admin secrets. Set{" "}
            <code className="font-mono text-[0.85em]">ADMIN_PASSWORD</code>,{" "}
            <code className="font-mono text-[0.85em]">ADMIN_SESSION_SECRET</code>{" "}
            and{" "}
            <code className="font-mono text-[0.85em]">ADMIN_GITHUB_TOKEN</code> in
            the Vercel project environment variables, then redeploy.
          </p>
        </div>
      </div>
    );
  }
  if (!(await isAdminRequest())) redirect("/admin/login");
  return <Dashboard />;
}
