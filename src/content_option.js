const logotext = "L. Neilsen";
const meta = {
    title: "Lachlan Neilsen",
    description: "I’m Lachlan Neilsen data AWS Certified Full stack devloper, currently working in Australia",
};

const introdata = {
    title: "Lachlan Neilsen",
    animated: {
        first: "AWS Certified Developer",
        second: "Full Stack Developer",
        third: "High-Voltage Specialist",
    },
    description: "My name is Lachlan Neilsen, and I have a passion for full-stack development. With a strong background in technical and corporate workplaces, and a wide array of IT and Cloud-related skills, I am dedicated to creating innovative and efficient solutions that drive business success.",
    your_img_url: "me.png",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "images/react-cf-py-aws.png",
        title: "Repairshop",
        description: "A CMS system, which automates deployment of infrastructure through Cloudformation",
        details:<p>A CMS system for repair-based businesses.<br/> This project deploys code to AWS services - all infrastructure is provisioned and initialized using Cloudformation. The backend consists of an RDS database (postgresql), which has it's DDL applied using Cloudformation. Lambda functions have been created, to handle all DML logic for accessing the database. This way, all backend logic can be neatly hidden behind a Rest API.<br/>The API is built using the AWS API Gateway service, allowing all Lambda functions to become accessible through the API endpoint, using the HTTP/HTTPS protocol. In addition to convenience, using API Gateway in this manner allowed all backend services to be kept inside the VPC in my AWS account. This approach is highly secure, because no data on the VPC side of my API is publicly exposed. Instead, the attack surface shrinks to primarily to just the API gateway itself. By implementing Cognito user pools for Authentication, and restricting access only to authenticated parties, only authorized users with a valid access token are able to make requests to the API. In addition to restricting the API gateway, Cognito user tags are checked - a form of ABAC, to cater for the implementation of a multi-tennant database. While it makes sense to use a multi-tennant solution for RDS (given the price of underlying instances accross multiple AZs), it is critical that users not be allowed to access the information of another user.<br/>Finally, the React application uses AWS Amplify frontent components to authenticate the user, and make requests to the API, which will effectively manipulate and query the database, through the rest of the infrastructure mentioned.<br/>As well as the main infrastructure, this project uses many other AWS services for convenience and security. Some of these include KMS, SSM, S3, Cloudshell, IAM, and more.</p>,
        link: "https://github.com/ThugPigeon653/repairshop",
    },
    {
        img: "images/ghActions-pytest.png",
        title: "CICD for GitHub",
        description: "This repository is configured to automate testing and PR's, using GitHub actions",
        details:<p>A CI pipeline for GitHub, using Actions and Pytest.<br/>I have designed this pipeline to be a flexible, efficient workflow for a solo-dev repository. As you can see more clearly in the workflow file, I have designed the CI to start whenever any change is pushed to any branch which isn't the main branch. This in turn, runs unit tests - if they pass, a PR is opened and automatically merged with the main branch. The working branch which has just been contributed to is automatically deleted, meaning no cleanup is required. This approach greatly reduces errors, and keeps the clutter of failed tests away from the main branch.<br/>It is worth noting that the auto-merge feature (and the cleanup step afterwards) are very agile for solo-dev scenarios, but would not suit a team. To adapt this workflow to a team environment, simply remove the merge and cleanup steps from the workflow. This would mean PR's would still automatically open, but would not be merged with the main branch without a manual approval of the PR.<br/>In regards to test coverage, the current test suite focuses on ensuring the ecosystem.py script is in working order. This script is where the bulk of the logic happens, and was the culprit of many bugs, earlier in the development of this project.<br/>This unit test has proven effective not only in hilighting bugs, but it has also forced better practices to be used - particularly regarding the db connection approach. Previously, the connection was made using a class I had written in its own script. Unit testing highlighted the need for these scripts to be decoupled completely, resulting in cleaner, more reliable code. This finding proved to be a particularly useful insight, due to the configuration of running sqlite connections across multiple threads (more about this in the next portfolio item, where I document the actual code contained in this repo)</p>,
        link: "https://github.com/ThugPigeon653/ecosystem-model/blob/main/.github/workflows/python-tests.yaml",
    },
    {
        img: "images/py-qt5-sqlite.png",
        title: "Ecosystem model",
        description: "A model of Earth's ecosystem",
        details:<p>This project contains four primary parts, which I will quickly explain below. Understanding these parts is critical if you wish to understand how the project works.<br/><br/>Map generator: the map generator uses a fractal algorithm with the Turtle module, to create a realistic shoreline for our island. This starts off in vector format - initially I was converting the vector straight to .png, but was running into instabilies with related dependancies. To overcome this, the image is first saved as a postscript file. This allowed an easy extraction of the outline, which is finally mapped to a png. From here, the image is divided up into biomes, using a Veronoi noise algorithm. The divided chunks are all saved into their own files, which are later used to visually segregate biomes in the UI. Beside this, map generator has a few other helpful functions, which generate other images and graphics for later consumption.<br/><br/>The UI: The UI is generated by main.py, and is the central point, which ties the rest of the application together. It first calls the map generator, then displays the procedural map on a canvas. In the meantime, it starts another thread for the ecosystem.<br/><br/>Ecosystem: The ecosystem is the backbone of the whole project. This is where the actual simulation of the ecosystem is performed. Animals undergo a complex set of actions and interactions on any given day. In order to keep this logic decoupled from the main thread, this script runs on it's own thread, and writes to an sqlite database - making it functionally atomic, and independant of other modules. It is important to note that the database connection has purposely been created here, and left outside of any classes. The only challenge/consideration here was that the database connection had to be handled directly in this script, and could not rely on any other module. Previously a custom module provided the connection to each other module, which created issues, as it was ultimately trying to share a connection between multiple threads. The old approach also caused issues with unit tests, because the module under test was unable to discover the module it was coupled to.<br/><br/>Visualization: In the helpers/ folder, scripts have been provided for graphing the performance of each species in each region, regarding the last complete run of the main program. By running a graphing function, graphical representations of retrospective data are saved to the logs folder. This allows us to see what actually happened throughout the simulation by viewing the new .png files, which are generated and saved using matplotlib. Care must be taken when running any graphic functionality, because it will overwrite any old logs or graphs. </p>,
        link: "https://github.com/ThugPigeon653/ecosystem-model",
    }
];

const contactConfig = {
    YOUR_EMAIL: "lneilsen1996@outlook.com",
    YOUR_FONE: "(555)123-4567",
    description: "Feel free to reach out to me via email, or through the contact page on this website.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};