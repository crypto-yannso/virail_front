import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, MessageSquare, Share2 } from 'lucide-react';

interface TopPost {
  id: string;
  title: string;
  engagement: number;
  comments: number;
  shares: number;
  platform: string;
}

interface Props {
  data?: TopPost[];
  loading?: boolean;
}

const TopPerformers = ({ data, loading }: Props) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data?.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500 py-8">
            No content data available
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((post) => (
            <div key={post.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium line-clamp-1">{post.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{post.platform}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <TrendingUp size={14} className="text-green-500" />
                    <span>{post.engagement}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare size={14} className="text-gray-400" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 size={14} className="text-gray-400" />
                    <span>{post.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformers;