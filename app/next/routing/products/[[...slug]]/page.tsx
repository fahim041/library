interface Props {
  params: { slug: string[] };
  searchParams: { sort: string}
}

export default function ProductPage({ params: { slug }, searchParams: {sort} }: Props) {
  return <>
  <div>Product Page: {slug.map(e => <span key={e}>{e}{', '}</span>)}</div>
  <div>Sort order: {sort}</div>
  </> ;
}
