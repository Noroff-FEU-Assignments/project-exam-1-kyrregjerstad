<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/kyrregjerstad/noroff-exam-blog-year-1">
    <img src="static/assets/images/screenshot-2.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Noroff Exam, Year 1 - Blog</h3>

  <p align="center">
  My first exam in year 1 at Noroff. The task was to create a blog with a CMS. I chose to use Strapi as my CMS and SvelteKit as my frontend framework. I also used OpenAI to moderate comments.
    <br />
    <br />
    <a href="https://blog.kyrre.dev">View Deployed Page</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://blog.kyrre.dev/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![SvelteKit][kit.svelte.dev]][SvelteKit-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Use the package manager you want, I prefer [pnpm](https://pnpm.io/).

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/kyrregjerstad/noroff-exam-blog-year-1.git
   ```

2. Navigate to the root folder of the project
   ```sh
   cd noroff-exam-blog-year-1
   ```
3. Install NPM packages
   ```sh
   pnpm install
   ```
4. Copy the content of .env.example into a new file called .env.local

   ```sh
   cp .env.example .env.local
   ```

5. Depending on your CMS setup, you might need to change the following variables in .env.local

   ```sh
   PUBLIC_API_GET_POSTS

   SECRET_API_SEND_MESSAGE
   SECRET_API_ADD_COMMENT_KEY
   PUBLIC_API_BASE_URL
   PUBLIC_API_POST_MESSAGE_URL
   ```

6. If you want to use the moderation feature, set `SECRET_ENABLE_COMMENT_MODERATION=true`

7. If you are using the moderation feature, get your OpenAI API key from [https://beta.openai.com/](https://beta.openai.com/) and set it as `SECRET_OPENAI_API_KEY=YOUR_API_KEY`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Kyrre Gjerstad - [@kyrregjerstad](https://twitter.com/kyrregjerstad) - hi@kyrre.dev - [kyrre.dev](https://www.kyrre.dev)

Project Link: [https://github.com/kyrregjerstad/noroff-exam-blog-year-1](https://github.com/kyrregjerstad/noroff-exam-blog-year-1)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-url]: https://linkedin.com/in/kyrre-gjerstad
[product-screenshot]: static/assets/images/screenshot-1.png
[kit.svelte.dev]: https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white
[SvelteKit-url]: https://kit.svelte.dev/
