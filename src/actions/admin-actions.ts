'use server';

import { revalidatePath } from 'next/cache';
import { getSiteConfig, updateSiteConfig, type SiteConfig } from '@/lib/kv';

export async function getConfigAction() {
  return await getSiteConfig();
}

export async function updateConfigAction(formData: FormData) {
  const maintenanceMode = formData.get('maintenanceMode') === 'on';
  const announcementText = formData.get('announcementText') as string;

  await updateSiteConfig({
    maintenanceMode,
    announcementText,
  });

  revalidatePath('/');
  revalidatePath('/jw-admin');
  
  return { success: true };
}
