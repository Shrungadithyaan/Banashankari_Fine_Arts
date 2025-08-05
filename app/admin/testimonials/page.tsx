'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

interface Testimonial {
  _id: string;
  customerName: string;
  review: string;
  rating: number;
  image?: string;
  featured: boolean;
  createdAt: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      
      // Handle the API response structure
      if (data.testimonials && Array.isArray(data.testimonials)) {
        setTestimonials(data.testimonials);
      } else if (Array.isArray(data)) {
        // Fallback for direct array response
        setTestimonials(data);
      } else {
        console.error('Unexpected API response format:', data);
        setTestimonials([]);
        toast.error('Failed to fetch testimonials - invalid response format');
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast.error('Failed to fetch testimonials');
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (testimonialId: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const response = await fetch(`/api/testimonials/${testimonialId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTestimonials(testimonials.filter(t => t._id !== testimonialId));
        toast.success('Testimonial deleted successfully');
      } else {
        toast.error('Failed to delete testimonial');
      }
    } catch (error) {
      toast.error('Failed to delete testimonial');
    }
  };

  const filteredTestimonials = testimonials.filter(testimonial =>
    testimonial.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.review.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-wood-800">Testimonials Management</h1>
          <p className="text-wood-600 mt-2">Manage customer reviews and testimonials</p>
        </div>
        <Link href="/admin/testimonials/new">
          <Button className="rustic">
            <Plus className="w-4 h-4 mr-2" />
            Add New Testimonial
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Search Testimonials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search by customer name or review..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </CardContent>
      </Card>

      {/* Testimonials Grid */}
      <div className="grid gap-6">
        {filteredTestimonials.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-wood-600">No testimonials found</p>
            </CardContent>
          </Card>
        ) : (
          filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-wood-800">
                              {testimonial.customerName}
                            </h3>
                            {testimonial.featured && (
                              <Badge className="bg-wood-100 text-wood-800">Featured</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            {renderStars(testimonial.rating)}
                            <span className="text-sm text-wood-500">({testimonial.rating}/5)</span>
                          </div>
                          <p className="text-wood-600 line-clamp-3">{testimonial.review}</p>
                        </div>
                        {testimonial.image && (
                          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.customerName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <span className="text-sm text-wood-500">
                          Added: {new Date(testimonial.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/admin/testimonials/${testimonial._id}`}>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/testimonials/${testimonial._id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(testimonial._id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
} 