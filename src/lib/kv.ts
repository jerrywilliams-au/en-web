export interface SiteConfig {
  maintenanceMode: boolean;
  announcementText: string;
}

const DEFAULT_CONFIG: SiteConfig = {
  maintenanceMode: false,
  announcementText: '',
};

const CONFIG_KEY = 'site-config';

async function getKV() {
  try {
    const { kv } = await import('@vercel/kv');
    return kv;
  } catch {
    return null;
  }
}

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const kv = await getKV();
    if (!kv) return DEFAULT_CONFIG;
    const config = await kv.get<SiteConfig>(CONFIG_KEY);
    return config || DEFAULT_CONFIG;
  } catch (error) {
    console.error('Failed to fetch site config from KV:', error);
    return DEFAULT_CONFIG;
  }
}

export async function updateSiteConfig(newConfig: Partial<SiteConfig>): Promise<SiteConfig> {
  try {
    const kv = await getKV();
    if (!kv) throw new Error('KV not available');
    const current = await getSiteConfig();
    const updated = { ...current, ...newConfig };
    await kv.set(CONFIG_KEY, updated);
    return updated;
  } catch (error) {
    console.error('Failed to update site config in KV:', error);
    throw new Error('Failed to update site configuration');
  }
}
