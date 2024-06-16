'use client';

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  console.log('error', error);

  return <div>Unexpected Error!</div>;
}
