import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const imagePath = join(process.cwd(), "public", "profile.png");
    const imageBuffer = await readFile(imagePath);

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
}
