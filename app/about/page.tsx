export default function About() {
  return (
    <main data-bedrock-stack="gutter:size7">
      <header>
        <h1>About this Project</h1>
      </header>
      <p>
        This is a project to create a digital version of the scriptures of the
        Church of Jesus Christ of Latter-day Saints in Esperanto. The project is
        a work in progress and is not officially affiliated with the Church. The
        Book of Mormon text is taken from{" "}
        <a
          href="https://www.churchofjesuschrist.org/study/scriptures/bofm"
          target="_blank"
          rel="noopener noreferrer"
        >
          the official Church website
        </a>{" "}
        and is translated by volunteers. The{" "}
        <a
          href="http://poresperantamormonaro.weebly.com/la-libro-de-mormon.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          selected chapters translation
        </a>{" "}
        is the primary source of the text, and then supplemented from{" "}
        <a
          href="https://drive.google.com/file/d/1LxogqR4tChiwA1TcKEgEqRmZGmTGzX9a/view?pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          the translation created by Jeremiah Stoddard.
        </a>
      </p>
      <p>
        The Bible text is taken from the github repository of{" "}
        <a
          href="https://github.com/thiagobodruk/bible/blob/master/json/eo_esperanto.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          thiagobodruk
        </a>
        . I have made some modifications to the text to convert it from the
        x-system to the proper Esperanto alphabet. I cannot guarantee the
        accuracy of the text, but I have done my best to make it as accurate as
        possible.
      </p>
      <p>
        The project is built using Next.js and is hosted on Vercel. The
        scriptures are stored in JSON files and are converted to HTML using
        Next.js. I am also working on an API to allow other developers to access
        the data. The API is currently in development and is not considered
        stable, but you play around with it at the <a href="/api">API page</a>.
      </p>

      <section data-bedrock-stack="gutter:size5">
        <h2>Future Goals</h2>
        <p>
          Here are some of the future goals for the project in no particular
          order:
        </p>
        <ul>
          <li>
            Add internationalization to the Non-scripture pages (namely this
            page and the api page)
          </li>
          <li>Improve the API to make it more stable and user-friendly</li>
          <li>Improve the design and layout of the site</li>
          <li>Add the remaining translations</li>
          <li>Improve the translations</li>
          <li>Add more known hymn translations</li>
        </ul>
        <p>
          The project is open source and the code can be found on{" "}
          <a
            href="https://github.com/Jarvis1010/sanktaj-libroj"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . If you would like to contribute to the project, please feel free to
          do so. I am also open to any suggestions or feedback you may have.
        </p>
      </section>
    </main>
  );
}
