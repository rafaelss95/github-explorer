type RepositoryItemProps = {
  readonly repository: {
    readonly description: string;
    readonly html_url: string;
    readonly name: string;
  };
};

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>Acessar repositório</a>
    </li>
  );
}
