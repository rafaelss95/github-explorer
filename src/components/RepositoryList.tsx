import { useEffect, useState } from "react";
import "../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";

type Repository = {
  readonly description: string;
  readonly html_url: string;
  readonly name: string;
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState<readonly Repository[]>([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://api.github.com/orgs/rocketseat/repos"
      );
      setRepositories(await response.json());
    })();
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
