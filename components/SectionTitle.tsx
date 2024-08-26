type Props = {
  text: string;
};

export default function SectionTitle({ text }: Props) {
  return <h2 className="text-4xl">{text}</h2>;
}
