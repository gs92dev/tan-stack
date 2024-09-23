# Blank Project
[![The stack](https://skillicons.dev/icons?i=react,ts,tailwind,nodejs,js)](https://skillicons.dev)
<br/><br/>
The goal of this project is to be a repo that can be forked for creating personal projects.

## Important Notes When Getting Started

- After you have forked the project, I recommend you Ctrl-F 'blank-project' and replace it everywhere with the name you are using in your repo

- Each time you run `npm run dev` to start up the project, you should also run `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`. I recommend splitting your terminal and running one on each side. This second command is to watch your files for new Tailwind classes. Whenever you use a new Tailwind class, it is added to the output.css file. **If this is not running, when you use a new Tailwind class that wasn't already being used in the project, it won't work.**

- If you are ever trying to add something to the css file directly, you should add it to input.css, which will be generated into the output file that is used.

- To create a new route, add a new file under the /routes folder. Whatever you name the file will be the route that you will access in the URL.


## תהנה!


