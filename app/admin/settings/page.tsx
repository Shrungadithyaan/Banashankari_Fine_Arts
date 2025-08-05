'use client';

import { motion } from 'framer-motion';
import { Settings, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminSettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-wood-800">Settings</h1>
          <p className="text-wood-600 mt-2">Configure website settings and preferences</p>
        </div>
        <Button className="rustic">
          <Save className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-wood-600">
              Settings functionality will be implemented in the next update. 
              This will include website configuration, SEO settings, and business information.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 