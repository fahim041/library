interface Props {
  params: { slug: string[] };
  searchParams: { sort: string}
}

export default function ProductPage({ params: { slug }, searchParams: {sort} }: Props) {
  return <>
  <div>Product Page {slug}</div>
  <div>Sort order: {sort}</div>
  </> ;
}
