'use client';

import { motion } from 'framer-motion';
import { Users, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminUsersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-wood-800">User Management</h1>
          <p className="text-wood-600 mt-2">Manage admin users and permissions</p>
        </div>
        <Button className="rustic">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New User
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
              <Users className="w-5 h-5" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-wood-600">
              User management functionality will be implemented in the next update. 
              This will include user roles, permissions, and admin access control.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 