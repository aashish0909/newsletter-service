# Newsletter - Service API

A newsletter service API which lets you add users, categories and post content through REST API calls.

---



## Requirements

For development, you will only need Node.js.

### Node.js

- #### Node.js installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node.js installation on Ubuntu

You can install node.js and npm easily with apt install, just run the following commands.

    $ sudo apt install nodejs
    
    $ sudo apt install npm

- #### Other Operating Systems

You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

   

     $ node --version
     v16.15.0
    
     $ npm --version
     8.5.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g



---

## Install

    $ git clone https://github.com/aashish0909/newspaper-service
    
    $ cd newspaper-service
    
    $ npm install



## Configure app

- Create a `.env` file in the head directory of the project.
- Open the file and add the following fields.

>     DB_URI = " "
>     SMTP_API_KEY = " "
>     SMTP_SENDER_EMAIL = " "
>     DB_URI - This is the URL of the mongoDB Database you would like to use.
- The project is using [Sendinblue](https://www.sendinblue.com/) as its SMTP service.
- You can get the API key and the sender email address from [Sendinblue](https://www.sendinblue.com/).
>SMTP_API_KEY - Sendinblue API key
>SMTP_SENDER_EMAIL - Sendinblue registered sender email address



## Running the project 

    $ npm start



## API Calls

- Main URL - `http://localhost:5000/api`

- Category

    |            Name            | Type  |            URL            | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Body                                  |                  Result                   |
    | :------------------------: | :---: | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------: |
    | Get the list of categories |  GET  | `/category/getCategories` |                                                                                                                                 | JSON object of list of all the categories |
    |     Add a new category     | POST  |  `/category/addCategory`  | `{`<br/>   `"title" : "sports",`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>    `"id" : "1"`&nbsp;&nbsp;&nbsp;<br/>`}` |   Adds the new category to the database   |

    > title - Name of the category
    >
    > id - Custom ID of the category for easy access

    

- User

  |         Name          | Type  |       URL        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Body |                Result                |
  | :-------------------: | :---: | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------: |
  | Get the list of users |  GET  | `/user/getUsers` |                                                                                                                                                | JSON object of list of all the users |
  |    Add a new user     | POST  | `/user/addUser`  | `{`<br/>    `"name" : "Nick",`<br/>    `"email" : "example@mail.com",`<br/>    `"topics" : ["1","2","3"]`&nbsp;&nbsp;<br/>}                    |  Adds the new user to the database   |

  > name - Name of the user
  >
  > email - Email ID of the user
  >
  > topics - Category IDs of the topics to which user has subscribed

  

- Content

  |          Name           | Type  |          URL          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Body                                                                      |                                                         Result                                                          |
  | :---------------------: | :---: | :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------: |
  | Get the list of content |  GET  | `/content/getContent` |                                                                                                                                                                                                                                                                           |                                             JSON object of list of content                                              |
  |     Add new content     | POST  | `/content/addContent` | `{`<br/>    `"title" : "Doctor Strange is releasing tomorrow!!",`<br/>   ` "content" : "Doctor Strange is releasing on May 6, 2022. Fans are super excited around the world",`<br/> `"category" : ["3"],`<br/>    `"date" : `<br/>`"2022-05-05T01:02:00+05:30"` <br />`}` | Adds the new content to the database and schedules the email to be sent to the subscribed users of that specific topic. |

  > title - Title of the content
  >
  > content - Main content
  >
  > category - Topic/Category ID of the category that the content belongs to
  >
  > date - Schedule date and time in **ISO-8601** format
  
  

## Features

- Add new categories with custom IDs. With custom IDs, the API calls become easy as you wouldn't have to enter the long ObjectID string of mongoDB.
- Get list of all the categories.
- Add new users.
- Get list of all the users along with their subscribed topics.
- Each user can subscribe to multiple topics.
- Add new content.
- While adding the content, you can specify the date and time at which the content should be mailed. If you don't specify the date and time, the content is mailed to the subscribed users immediately.
- In the user and content API Calls, we just give the category IDs and it magically replaces the IDs with respective category's mongoDB ID in the backend.
- Same email address can't be added multiple times.



## Improvements

- A frontend GUI would make the tasks much easier.
- Images can be made to be supported in the content. Currently, the content section only supports single paragraph.
- Confirmation email for the users after subscribing to the newsletter.
- Design of the newsletter sent in the email.
- An option to unsubscribe to the newsletter.



## Pitfalls

- The content section only supports single paragraph as of now.
- Same content can be posted multiple times.
- Same categories can be added multiple times.
- No authentication as of now. Therefore, anyone with the database link can do all the operations.