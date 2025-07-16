# 💻 Web Developer Portfolio [![Build and Deploy](https://github.com/mimaishel/webdev_portfolio/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/mimaishel/webdev_portfolio/actions/workflows/deploy.yml) [![License](https://img.shields.io/github/license/mimaishel/webdev_portfolio?color=blueviolet)](https://github.com/mimaishel/webdev_portfolio/blob/main/LICENSE)

## A modern, clean, & simple to navigate portfolio template for web developers (or any developer)!

### Includes Pertinent Sections for any Web Developer Portfolio:
✔️ Name & Introduction\
✔️ About\
✔️ Experience\
✔️ Projects / Work\
✔️ Contact

To add your own info into the template just alter the [src/portfolio.js](src/portfolio.js) file variables. More customization options will come & be incorporated in the future 🔮.

If you have any suggestions on what else you want to be customized through the [portfolio.js](src/portfolio.js) file or added / changed in general please feel free to reach out through the hosted page [contact form](https://forms.gle/vhWrKD32i1d2MSZGA) or leave an issue.

If you would like to contribute to the project take a look at the [Issues](https://github.com/mimaishel/webdev_portfolio/issues).

Want to add a personal touch to the portfolio? Feel free to open a [pull request](https://github.com/mimaishel/webdev_portfolio/pulls).

🙏 I would greatly appreciate proper credit if you do decided to use this portfolio for any of your purposes. Just leaving the footer as is at the bottom of the template **Designed & Created by Maxim Shelepov** would be enough. Thanks.

⭐️ Also leave a star if you would like to see the project further develop and be improved.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customizing Content](#customizing-content)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Images and Icons](#images-and-icons)
- [Future](#future)
- [License](#license)

Check out the [live demo](https://mimaishel.github.io/webdev_portfolio/) of the project.

## Getting Started

These instructions will help you get the project up and running on your local machine for your development, testing, & eventual deployment.

### Fork the repository (that's it really)
To keep your changes and version of the portfolio under your github and actions [fork this repository](https://github.com/mimaishel/webdev_portfolio/fork). More on forking repositories [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

After creating your fork, you can make all content ([src/portfolio.js](src/portfolio.js)) updates and commits in github without cloning on your machine for local development. To run the deployment of your portfolio site make your first change to and commit (that will trigger the workflow and pages site deployment).

>
> ℹ️ The following steps in this section describe the setup for local development which is recommended if you want to see your styling (css) and content (js and html) changes instantly without rebuilding the Github Actions site each time.
>

### For local development
You will need to install [Git](https://github.com/git-guides/install-git), [Node.js](https://nodejs.org/en/download), & [npm](https://www.npmjs.com/package/npm).

Using [brew](https://brew.sh) package manager is recommended for mac users.

#### Clone your forked repository
After installing the global packages from the previous step and copying your forked repo clone url.
```sh
# Copy the forked remote repository to your local directory (folder)
git clone https://github.com/your-github-username/webdev_portfolio.git # the name of the clone repo should match the forked repo name

# Navigate into the project folder within your current directory
cd webdev_portfolio
```

#### Install necessary project required packages
```sh
npm install
```

## How to Use
Once all is set up, you can start developing by running the vite server and viewing the site from your browser.
### Compile and Hot-Reload for Development
```sh
npm run dev
```
A `localhost:####/webdev_portfolio` link should appear. Paste into your browser and view.

### Making commits, pushing them to your forked remote repository, & syncing changes
To push your local changes to your forked github repository:
```sh
git add . # add all the changes to the stage
git status # shows all the staged changes

git commit -m "Updating portfolio.js content."
git push # automatically points to the origin url / target specified in `git remote -v`
```
Syncing changes between your forked repository and this repository:
```sh
git remote add upstream https://github.com/mimaishel/webdev_portfolio.git # set a remote url to point to original repository (this one)
git remote -v # shows the set remotes

# When you want to sync new changes/updates from the original repository
git fetch upstream # fetches changes from this repository
git merge upstream/main # merges changes with your code; conflicts may occur
```
🎉 Now watch and enjoy as the latest commit appears in your remote repo and the automatic deployment begins. For deployment, check out the [Deployment](#deployment) section.

## Customizing Content

To personalize the template site to your content you can:
1. Populate your own information, appearance settings, & site behavioral setting in [src/portfolio.js](src/portfolio.js).
2. Change the [index.html](index.html) `<title></title>` tag to whatever text you want others to see in the browser tab (ex: name, title, etc.).
3. Add your own `favicon.ico` and `favicon.png` in the [public/](public) folder or **feel free to use the current emoji favicon** (the icon that will appear in the browser tab next to the title).
4. Optional: Use different global font for the site. You can choose one from [google fonts](https://fonts.google.com) and then replace the import link in the [main.css](src/assets/main.css) file.

```javascript

const greeting = {
    intro: "...",
    message: "...",
    basedLocation: "...",
    resumeLink: "...",
    logoAbsoluteLink: "...",
    portraitAbsoluteLink: "..."
}

const about = { ... }

const experiences = { ... }

const works = { ... }

// ...

```

## Deployment

### Deploying on Github Pages
In the *Settings -> Actions -> General -> Workflow Permissions* set the github actions permission to **read & write**.

The github workflow [deploy.yml](.github/workflows/deploy.yml) file should automatically start the build process for deployment to your github pages url: `https://<GITHUB_USERNAME>.github.io/webdev_portfolio/` after you push to the main branch of your remote repository. Enjoy & Good Luck!

## Technologies Used
- [Vue.js](https://vuejs.org)
- [Vite.js](https://vitejs.dev)
- [Tailwind.css](https://tailwindcss.com)

## Images and Icons
The images in the [src/assets/images/](https://github.com/mimaishel/webdev_portfolio/tree/main/src/assets/images) project folder are meant to serve as placeholders for your own images. Please intend to replace them with your own image assets.

The project comes pre-equipped with:
- [heroicons](https://heroicons.com) - Offer nice general-purpose icons. 2 icons used in the menu dropdown and 3 icons for project links.
    ```html
    <template>
        <Bars2Icon class="h-5 w-5 text-blue-500"/> <!-- insert into html like so as a tag -->
    </template>
    <script setup>
    import { Bars2Icon } from '@heroicons/vue/24/solid'
    <script>
    ```
- [fontawesome-icons](https://fontawesome.com) - Using the [font-awesome-brand-icons](https://fontawesome.com/search?o=r&m=free&f=brands). 4 used for social media links.
    ```html
    <template>
        <font-awesome-icon icon="fa-brands fa-icon_name_here"></font-awesome-icon>
    </template>
    ```
    More instructions on adding these icons to your templates can be found here in the [icons.js](./src/icons.js) file.

🔭 Take look at [heroicons basic usage](https://github.com/tailwindlabs/heroicons) & [adding icons with fontawesome tutorial](https://fontawesome.com/docs/web/use-with/vue/add-icons) for more details.

>
> ℹ️ All brand icons are trademarks of their respective owners. Do not use brand logos for any purpose except
> to represent the company, product, or service to which they refer.
>

## Future
Hope to continue improving the site, as well as adding more components and layout options in the [src/components](src/components) folder.

**Planned Future Improvements:**
- [ ] Add more layout components to `src/components`.
- [ ] More color scheme styling options in `src/portfolio.js`.

💡 Leave your own ideas in the [issues](https://github.com/mimaishel/webdev_portfolio/issues) section or complete my [contact form](https://forms.gle/vhWrKD32i1d2MSZGA).

🛠️ Again if you would like to contribute feel free to open a [pull request](https://github.com/mimaishel/webdev_portfolio/pulls).

🏎️ The project was initially designed in Figma. Check out the [Figma Design here](https://www.figma.com/file/GV3bfT7q5lxLnQFBj8VWra/Web-Dev-Portfolio-2.0).

## License
The project is licensed under the MIT license. Check out the [LICENSE.md](https://github.com/mimaishel/webdev_portfolio/blob/main/LICENSE) file for more details.

📖 In short, it's open sourced and free to use for your own purposes. However there are some quirks, so please check out the [Images and Icons](#images-and-icons) section.