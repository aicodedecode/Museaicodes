/** Renders a JSON-LD <script> tag. Serialized with a real JSON encoder and
 *  made script-safe (no literal "</" sequences) before embedding. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/<\//g, "<\\/").replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
