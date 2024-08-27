type Props = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button
      className="font-bold rounded-xl m-2 p-3 w-full bg-[--color-bg] text-[--color-primary] hover:bg-[--color-primary] hover:text-[--color-bg]"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
