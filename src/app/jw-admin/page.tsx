import { getConfigAction, updateConfigAction } from '@/actions/admin-actions';
import { Button } from '@/components/ui/button';

export default async function AdminPage() {
  const config = await getConfigAction();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Manage site configuration and persistence.</p>
      </div>

      {/* Main Configuration Card */}
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          System Status
          <span className={`inline-block w-2 h-2 rounded-full ${config.maintenanceMode ? 'bg-amber-500' : 'bg-emerald-500'}`} />
        </h2>
        
        <form action={updateConfigAction} className="space-y-8">
          
          {/* Maintenance Mode Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-950/50 rounded-lg border border-gray-100 dark:border-zinc-800">
            <div className="space-y-1">
              <label htmlFor="maintenanceMode" className="block text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                Maintenance Mode
              </label>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                When active, all public traffic redirects to <code className="text-xs bg-gray-200 dark:bg-zinc-800 px-1 py-0.5 rounded">/coming-soon</code>.
              </p>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="maintenanceMode" 
                name="maintenanceMode"
                defaultChecked={config.maintenanceMode}
                className="w-5 h-5 accent-cyan-600 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Announcement Text */}
          <div className="space-y-3">
             <label htmlFor="announcementText" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
               Global Announcement Bar
             </label>
             <input
               type="text"
               id="announcementText"
               name="announcementText"
               defaultValue={config.announcementText}
               placeholder="e.g. 'New Cohort Applications Closing Soon!'"
               className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 bg-transparent rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all dark:text-white"
             />
             <p className="text-xs text-muted-foreground">Leave empty to hide.</p>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex justify-end">
            <Button type="submit">
               Save Changes
            </Button>
          </div>
        
        </form>
      </div>

    </div>
  );
}
