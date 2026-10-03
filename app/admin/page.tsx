import { redirect } from "next/navigation";
import { isAdminRequest, adminConfigured } from "@/lib/admin-auth";
import Dashboard from "@/components/admin/Dashboard";

export default async function AdminPage() {
  if (!adminConfigured()) {
    return (
      <main id="main">
        <div className="mx-auto max-w-shell px-5 py-24">
          <p className="kicker">museaicodes</p>
          <h1 className="font-display mt-3 text-[2rem] font-extrabold tracking-tight">
            Admin is not configured
          </h1>
          <p className="mt-4 max-w-[560px] leading-relaxed text-muted">
            This deployment is missing its admin secrets. Set{" "}
            <code className="font-mono text-[0.9em]">ADMIN_PASSWORD</code>,{" "}
            <code className="font-mono text-[0.9em]">ADMIN_SESSION_SECRET</code>{" "}
            and{" "}
            <code className="font-mono text-[0.9em]">ADMIN_GITHUB_TOKEN</code> in
            the Vercel project environment variables, then redeploy.
          </p>
        </div>
      </main>
    );
  }
  if (!(await isAdminRequest())) redirect("/admin/login");
  return <Dashboard />;
}
