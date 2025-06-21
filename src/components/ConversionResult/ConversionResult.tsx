interface Props {
  result: number | null;
}

const ConversionResult = ({ result }: Props) => {
  return <div>{result || 0}</div>;
};

export default ConversionResult;
