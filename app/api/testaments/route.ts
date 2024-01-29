import { stringToSlug } from "@/routeutils";
import { testamentTitles } from "../../../testaments";

const testamentSlugMap = testamentTitles.reduce((map, testamentTitle) => {
  return { ...map, [testamentTitle]: stringToSlug(testamentTitle) };
}, {} as Record<string, string>);

export async function GET() {
  return Response.json(
    {
      testaments: testamentTitles,
      testamentSlugMap,
    },
    {},
  );
}
