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
        name: "AWS",
        value: 90,
    },
    {
        name: "Unity",
        value: 80,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "Oracle",
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
        img: "images/docker-kube-winpscli-cfn.png",
        title: "Kubernetes quickstarts",
        description: "Numerous approaches to deploying dockerized apps on Kubernetes clusters",
        details:<p>This repository features a few solutions - each dedicated to setting up a different kinds of Kubernetes clusters, and deploying our application. Within each project, there is a sample flask application, which can easliy be replaced with minimal config changes. This app is automatically dockerized, and deployed to a Kubernetes cluster, using Docker Hub as the image repository. By using batch scripts to interact with control planes and AWS API's, I have designed these templates to work on any Windows machine, particularly in a delivery pipeline. This makes setting up future Kubernetes clusters and deployments far more streamlined.<br/>To acheive this, I have referred to the relevant documentation (i.e. minikube, EKS, etc.), to build a .bat list of commands which automate each operation. In addition, I created powershell scripts for installing dependancies where required - this is triggered at the start of the automated batch script. Beyond this, Cloudformation was also used to setup any AWS infrastructure required, ensuring the wokflow is portable and will not require any prior setup within your AWS account.<br/><br/>As well as single-image deployments, multi-container configurations have also been included. Instead of publicly exposing our application, these solutions use nginx to serve content, which is routed to it by our private application (as specified in local config files). This approach is more secure, because the data application is hidden away, with no direct public endpoint.<br/></p>,
        link: "https://github.com/ThugPigeon653/kubernetes-clusters",
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
    },
    {
        img: "images/gplay-unity-aws.png",
        title: "Quick Quotes Calculator",
        description: "Android application for calculating quotes, and emailing them as a PDF.",
        details:<p>This application was my first experience using AWS. It's purpose is to streamline the quoting process for small businesses - particularly those who tally up their quotes on-site. The original application was comissioned by a third-party, who wanted it made for internal use. After developing the application, I designed some branding, and used it to gain further end-to-end experience with Google Play, as I had not uploaded an app to this platform in many years. The application is currently available on Google Play, but due to the cost of some services (primarily DNS), backend features are currently inactive - I am happy to activate this upon request.<br/>I used serverless technologies such as Lambda, DynamoDB and API gateway to provide a serverless backend for the application. The app uses the AWS SDK (.NET) to make calls to some AWS services such as S3, Cognito, and STS, while all other requests (mostly to a Lambda) are routed through API Gateway. This allows safe, easy authentication and access control to be applied to everything behind the API. Coupling the API and Lambda through stage variables and Lambda Aliases also allowed for easy deployment of new Lambda versions, and makes way for future CICD to be added. From here, the various Lambda functions use the boto3 python module to interact directly with S3, dynamoDB, and SES. By leveraging IAM roles and the boto library, our Lambda can effortlessly retrieve the customer logo from S3, insert and query the dynamo table for changes, and email out a PDF copy of the quote to the customer.<br/>Because the PDF generator performs some lengthy operations (i.e. fetching & editing photos, creating PDF, etc.) there was a consideration as to whether to use Lambda, ECS or EKS (Kubernetes) for the main business logic of the application. The longest running function is configured to run asynchronously, and runs for around 10 minutes. Because the user is completely unaware this process is happening behind the scenes, and the elapsed time per invokation is under the (15 minute) miximum threshold for a Lambda function, there is no need to switch to containerized tasks. Lambda also has the ability to handle 1000 concurrent executions, which is way above the traffic I ever anticipate to receive. The final consideration for the viability of a Lambda backend was performance scaling. While the application runs fine at the moment, it is critical that new features will not greatly increase the time it takes to fulfill requests. While containerization offers fine-grained control over every aspect of performance, Lambda is incredibly easy to scale - just increase the allocated memory, and there will be a proportional increase in CPU allocation.<br/><br/>The frontend of the application was developed in Unity. Many would consider this overkill, but I am personally very comfortable using the Unity Engine, and know the language inside-out, meaning development and debugging times are very fast. The drawback to taking this approach is that Unity is a game engine, so is not really designed or commonly used for designing UI-heavy applications. This means that there are few pre-designed reusable components, and almost everything has to be made completely from scratch - right down to the buttons. The Scroll Window component provided as a builtin Unity feature was extremely slow, so a large amount of time was spent just creating scrollable list, that implemented instance pooling to reuse list items. This was a cumbersome process, but once it was complete, the rest of the application came together very quickly. The Unity editor has a runtime built in, which allows the application to be run in the editor directly. This is a very agile approch to adding new features, as no deployment need be explicitly performed, in order to see/test any changes.<br/><br/>The actual process of uploading an application to the Play Store was fairly streamlined, as Unity builds .aab files, which meet all of Google's requirements - including producing debugging symbols. The main thing that I noted from the process was that each step took a really long time, and was not agile. This is important, because it means really thorough testing should be done before deploying an application (even in beta!).<br/><br/>The final significant component of this project was designing and developing the graphic materials for the store listing. I was sure to follow all of Googles guidelines and recommendations, to produce a high quality listing. This included images made in GIMP, and a promotional video. The video was actually also made in Unity, so that it could easily be tweaked on a component level. Certain objects are choreographed to alter their transform or shader colours, based on a config file I provided for the given video. The video projected to the shader which overlays the screen of the phone object is an actual video I screen recorded of the app, on a real mobile device. By changing the choregraphy file, and the video, this advertising material can be re-used for another product. </p>,
        link: "https://play.google.com/store/apps/details?id=com.LNeilsenStudio.QQC&pcampaignid=web_share",
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
    github: "https://github.com/ThugPigeon653"
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