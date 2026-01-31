import { testamentSlugMap, testamentTitles } from "../../../testaments";

export async function GET() {
  return Response.json(
    {
      testaments: testamentTitles,
      testamentSlugMap,
    },
    {}
  );
}
