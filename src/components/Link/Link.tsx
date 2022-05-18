interface Props {
  children: JSX.Element;
  to: string;
}

const Link = ({ to, children }: Props): JSX.Element => {
  return <a href={to}>{children}</a>;
};

export default Link;
