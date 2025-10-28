/**
 * Dashboard Page component
 */

import { Card, Button } from '@/components/ui'
import { formatDate, formatCurrency } from '@/utils'

export function DashboardPage() {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: formatCurrency(45678), change: '+8%', trend: 'up' },
    { title: 'Active Sessions', value: '89', change: '-3%', trend: 'down' },
    { title: 'Conversion Rate', value: '3.2%', change: '+0.5%', trend: 'up' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-base-content/70">
          Welcome back! Here's what's happening today.
        </p>
        <p className="text-sm text-base-content/50 mt-1">
          Last updated: {formatDate(new Date())}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} bordered>
            <div className="text-sm opacity-70">{stat.title}</div>
            <div className="text-3xl font-bold my-2">{stat.value}</div>
            <div
              className={`text-sm ${
                stat.trend === 'up' ? 'text-success' : 'text-error'
              }`}
            >
              {stat.change} {stat.trend === 'up' ? '↑' : '↓'}
            </div>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card title="Recent Activity" bordered>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span>U{item}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">User {item} completed a task</p>
                  <p className="text-sm opacity-70">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card title="Quick Actions" bordered>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="primary" block>
              New Project
            </Button>
            <Button variant="secondary" block>
              Add User
            </Button>
            <Button variant="accent" block>
              Generate Report
            </Button>
            <Button variant="neutral" block>
              Settings
            </Button>
          </div>
        </Card>
      </div>

      {/* Progress Section */}
      <Card title="Project Progress" className="mt-6" bordered>
        <div className="space-y-4">
          {['Frontend Development', 'Backend API', 'Testing', 'Documentation'].map(
            (project, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{project}</span>
                  <span className="text-sm opacity-70">
                    {[75, 60, 40, 90][index]}%
                  </span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value={[75, 60, 40, 90][index]}
                  max="100"
                ></progress>
              </div>
            )
          )}
        </div>
      </Card>
    </div>
  )
}

