import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Testimonial from '@/lib/models/Testimonial'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')

    // Build query
    const query: any = {}

    if (featured === 'true') {
      query.featured = true
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit

    // Get testimonials with pagination
    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    // Get total count for pagination
    const total = await Testimonial.countDocuments(query)

    return NextResponse.json({
      testimonials,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: limit
      }
    })
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    const { customerName, review, rating, image } = body

    // Validate required fields
    if (!customerName || !review || !rating) {
      return NextResponse.json(
        { error: 'Customer name, review, and rating are required' },
        { status: 400 }
      )
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    // Create new testimonial
    const testimonial = new Testimonial({
      customerName,
      review,
      rating,
      image: image || undefined
    })

    await testimonial.save()

    return NextResponse.json(
      { message: 'Testimonial created successfully', testimonial },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    )
  }
} 