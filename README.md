

# Download the latest nodejs, and lets configure the settings


1. Open vs code & go to Extension, and download following

	- prettier formatter from prettier.io
	- Eslint from Microsoft.com 
	- Material icon theme
	- All Autocomplete 
	- Auto rename Tag
	- Color highlight
	- Monokai theme or any theme you prefer
   		Cmf + Shift + P  and type theme and you will get the theme option, 
   		if you wish you can go with Dark Modern which the VS code default one

2.  Go to setting
    - type Auto save
        > Files: Auto Save
            Change the dropdown to onFocusChange
    - Type Format
       > Editor: Default formatter
          Select Prettier code formatter
      > Format: Format on save
          Check the format on save checkbox
3. Settings icon at the bottom -> snippet
       And click new snippet from the top drop down
       And type a new and and then enter
       One the page open in vs code

       And use this sample snippet and past it there

   "Print to console": {
    "scope": "javascript, typescript,javascriptreact",
    "prefix": "cl",
    "body": ["console.log();"],
    "description": "Log output to console"
  }, 

"Print const": {
    "scope": "javascript,typescript,javascriptreact",
    "prefix": "c",
    "body": ["const ${1} ="],
    "description": "print const"
  },

"importCSSModule": {
    "prefix": "csm",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["import styles from './${TM_FILENAME_BASE}.module.css'"],
    "description": "Import CSS Module as styles"
  },

"Print function": {
    "scope": "javascript,typescript,javascriptreact",
    "prefix": "f",
    "body": ["function ${1}(){}"],
    "description": "Print function"
  },

  "reactComponent": {
    "prefix": "rfc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    "description": "React component"
  },
  "reactStyledComponent": {
    "prefix": "rsc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "import styled from 'styled-components'",
      "",
      "const Styled${TM_FILENAME_BASE} = styled.$0``",
      "",
      "function ${TM_FILENAME_BASE}() {",
      "\treturn (",
      "\t\t<Styled${TM_FILENAME_BASE}>",
      "\t\t\t${TM_FILENAME_BASE}",
      "\t\t</Styled${TM_FILENAME_BASE}>",
      "\t)",
      "}",
      "",
      "export default ${TM_FILENAME_BASE}",
      ""
    ],
    "description": "React styled component"
  } 


  To edit snipped
  Click settings icon at the bottom and click Sinipped, and in the dropdown select your snipped name 


4. Create a vite-env.d.ts file under src and put content as 
    /// <reference types="vite/client" />

5. Update path reference. 

 tsconfig.app.json
 Add 
"baseUrl": ".",
    "paths": {
      "@/": ["src/"]
    }

vite.config.ts
 Add
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 

6. Create a git branch, and checkout on your local.

7. Create the ignore file and make the first commit with follwing content

 
/node_modules

 
/dist
/build 

npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
*.log

 
.env
.env.local
.env.development.local
.env.test.local
.env.production

 
.DS_Store
Thumbs.db

 
.vscode/
.idea/
*.swp
*.swo

 
/coverage

 
*.tmp
*.temp

 
*.tsbuildinfo

 
.pnpm-store 

 
