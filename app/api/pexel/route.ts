import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'pexels';

const client = createClient(process.env.PEXEL_API_KEY as string);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const destination = searchParams.get('destination') || 'Japan';

  try {
    const response = await client.photos.search({ query: destination, per_page: 2 });

    // ✅ Narrow the type safely
    if ('error' in response) {
      return NextResponse.json({ error: response.error }, { status: 400 });
    }

    // ✅ Now TypeScript knows `response` is PhotosWithTotalResults
    const imageUrls = response.photos.map(photo => photo.src.original);

    return NextResponse.json({ images: imageUrls }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
