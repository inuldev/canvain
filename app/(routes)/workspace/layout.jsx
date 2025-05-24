import Sidebar from "./_components/Sidebar";
import WorkspaceHeader from "./_components/WorkspaceHeader";

function WorkspaceLayout({ children }) {
  return (
    <div>
      <WorkspaceHeader />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default WorkspaceLayout;
