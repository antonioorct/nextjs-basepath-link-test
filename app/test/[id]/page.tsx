export const revalidate = 0;

type Props = {
  params: { id: string };
};

export default async function Page({ params: { id } }: Props) {
  return <>{id}</>;
}
