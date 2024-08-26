type Props = {
  startNewRound: () => void;
};

export default function RoundOver({ startNewRound }: Props) {
  return (
    <div>
      <p>Round is over</p>
      <button type="button" onClick={startNewRound}>
        Start New Round
      </button>
    </div>
  );
}
