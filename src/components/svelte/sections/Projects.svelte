<script>
  import { language } from "@/store/languageStore";

  import { projects as proEng } from "@cv_en";
  import { projects as proEsp } from "@cv";

  let lan = $state(language.get());
  let projects = $state(proEsp);

  language.listen((value) => {
    if (value === "english") {
      lan = value;
      projects = proEng;
    } else {
      lan = value;
      projects = proEsp;
    }
  });

  const GitHub = () => `
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title>
      <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  `;
</script>

<section>
  <h2>
    {#if lan === "english"}
      Projects
    {:else}
      Proyectos
    {/if}
  </h2>
  <ul>
    {#each projects as project}
      <li>
        <article>
          <header>
            <h3>
              {#if project.url}
                <a
                  href={project.url}
                  target="_blank"
                  title={`Ver el proyecto ${project.name}`}
                >
                  {project.name}
                </a>
              {:else}
                {project.name}
              {/if}
              {#if project.isActive}
                <span>•</span>
              {/if}
              {#if project.github}
                <a
                  class="github-code-link"
                  href={project.github}
                  target="_blank"
                  title={`Ver código fuente del proyecto ${project.name}`}
                >
                  {@html GitHub()}
                </a>
              {/if}
            </h3>
            <p>{project.description}</p>
          </header>
          <footer>
            {#each project.highlights as highlight}
              <span>{highlight}</span>
            {/each}
          </footer>
        </article>
      </li>
    {/each}
  </ul>
</section>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-inline: -16px;
  }

  h2 {
    margin-bottom: 8px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  section {
    max-width: 700px;
    margin: 0 auto 48px;
  }

  h2 {
    margin-bottom: 8px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  @media (width <= 700px) {
    section {
      margin-bottom: 38px;
      padding: 10px 10px;
    }
  }

  article {
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    gap: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
  }

  article header {
    flex: 1;
  }

  article h3 {
    margin-bottom: 4px;
  }

  article a {
    color: #111;
  }

  article a:hover {
    text-decoration: underline;
  }

  article p {
    font-size: 0.75rem;
    line-height: 1.2rem;
    margin-bottom: 4px;
  }

  article h3 span {
    color: rgb(0, 188, 47);
    animation-name: flicker;
    animation-duration: 3s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 0.6rem;
  }

  footer span {
    border-radius: 6px;
    background: #eee;
    color: #444;
    font-size: 0.6rem;
    font-weight: 500;
    padding: 0.2rem 0.6rem;
  }

  .github-code-link {
    margin-left: 5px;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }

  @media (width <= 700px) {
    ul {
      margin-inline: 0px;
    }

    article {
      border: none;
      border-bottom: 1px solid #f2f2f2;
      /* box-shadow: 0 1px 1px #f2f2f2; */
      border-radius: 0;
      padding: 0 0 16px 0;
    }
  }

  @media print {
    article h3 span {
      animation-name: none;
    }
  }
</style>
