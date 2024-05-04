const projects = [
    {
        name: 'Glamate',
        url: 'https://glamate.in',
        key: 'Glamate',
        image: 'images/gallery/7.png',
        banner: 'images/gallery/7.png',
        description: `At Glamate, we take pride in developing an exceptional e-commerce platform dedicated to providing a wide array of top-quality cosmetic products. As a premier destination for beauty enthusiasts, we offer a seamless shopping experience with our meticulously crafted frontend built using ReactJS, ensuring a user-friendly interface for effortless browsing and exploring our diverse collection. Additionally, our website is equipped with efficient API integration, streamlining product information and updates to keep you in the know about the latest trends and offerings. To enhance the visual appeal and create a captivating aesthetic, we've implemented SCSS/SASS to design stunning layouts that reflect the essence of beauty and style. Moreover, to offer a secure and convenient payment experience, we've integrated Stripe, enabling smooth and reliable transactions for all your cosmetic purchases. At Glamate, we're dedicated to making your beauty shopping journey delightful and satisfying, so explore our website and indulge in the world of glamour today.`,
        services: ['Web Development', 'API Integration'],
        clientName: 'Marco',
        type: 'Web Development',
        challenges:[
            "Complex product variation handling.",
            "Performance optimization for fast loading times.",
            "Integrating secure payment and data security.",
        ]
    },
    {
        name: 'AGOD Ecosystem',
        url: 'https://agodecosystem.com',
        key: 'AGOD Ecosystem',
        image: 'images/gallery/8.png',
        banner: 'images/gallery/8.png',
        description: `Welcome to Agod Ecosystem, a revolutionary platform for cryptocurrency enthusiasts! Our website provides a seamless gateway for anyone to invest in our native cryptocurrency, AGOD. With a user-friendly interface built on ReactJS, investing in AGOD has never been easier. Our backend, powered by NodeJS, ensures a smooth and responsive experience for all users. To enhance the visual appeal and user experience, we've implemented SCSS/SASS to create captivating designs. Rest assured, your investments are securely stored and managed using MongoDB, a robust and reliable database. Making transactions is a breeze with Stripe Payment integration, guaranteeing secure and hassle-free payments. We leverage the power of Web3.0 Integration to bring the benefits of blockchain technology to our users, providing transparency and security. Plus, you can choose your preferred crypto wallet, as we support Multiple Crypto Wallets, offering flexibility and convenience.`,
        services: ['Web Development', 'API Integeration', 'Stripe Payment', 'Web3.0 Integeration', ''],
        clientName: 'Marco',
        type: 'Web Development',
        challenges:[
            "Ensuring secure and seamless Web3.0 integration for cryptocurrency transactions.",
            "Handling complex interactions with multiple crypto wallets for user convenience.",
            "Implementing robust data management and security with MongoDB for cryptocurrency information.",
        ]
    },
    // {
    //     name: 'GGI Laboratory',
    //     url: 'https://ggi.com',
    //     key: 'GGI Laboratory',
    //     image: 'assets/images/project/Mockup-03.png',
    //     banner: 'assets/images/project/projectDetail5.png',
    //     description: `Welcome to the Galaxy Gemological Institute, your trusted gem and jewelry testing laboratory! We take pride in providing accurate and reliable gem verification certificates to ensure the authenticity and quality of your precious stones. Our website, built with ReactJS, offers a user-friendly interface for easy navigation and access to our services. Behind the scenes, our robust backend powered by Django ensures smooth operations and efficient processing of gem tests. To store and manage data securely, we utilize MYSQL, a reliable database system. Additionally, our website is adorned with captivating designs and styles, thanks to the implementation of SCSS/SASS, making your experience with us a delightful one. Trust in Galaxy Gemological Institute for all your gem testing needs`,
    //     services: ['Web Development', 'API Integeration', 'DJango'],
    //     clientName: 'Marco',
    //     type: 'Web Development',
    //     challenges:[
    //         "Implementing complex gem testing algorithms in the Django backend.",
    //         "Ensuring seamless and responsive user experience with ReactJS frontend for gem verification.",
    //         "Designing visually appealing layouts with SCSS/SASS to complement gem testing certificates.",
    //     ]
    // },
    {
        name: 'Abloc Exchange',
        url: 'https://ablocwebsite.netlify.app',
        key: 'Abloc Exchange',
        image: 'images/gallery/9.png',
        banner: 'images/gallery/9.png',
        description: `Welcome to Abloc, your go-to crypto exchange and trading platform, where seamless trading is just a few clicks away. Our user-friendly website, built with React Native, offers an intuitive interface for effortless trading experiences. Behind the scenes, our powerful backend, powered by NodeJS, ensures smooth operations and real-time updates on market data. With SCSS/SASS, we've crafted visually appealing designs, enhancing your overall trading journey. Rest assured, your data and transactions are securely stored and managed with MongoDB, a reliable database system. For in-depth analysis, we've integrated Trading View, providing valuable insights and tools to make informed trading decisions. To make your trading journey even more convenient, we've integrated Stripe Payment for secure transactions. Additionally, we leverage the power of Coinbase, Messari, and CoinGecko APIs, ensuring access to a wide range of cryptocurrencies and accurate market data. Begin your crypto trading journey with ease at Abloc and seize exciting opportunities in the ever-evolving crypto market.`,
        services: ['Web Development', 'API Integeration', 'DJango'],
        clientName: 'Muhammad Ali',
        type: 'Web Development',
        challenges:[
            "Integrating multiple cryptocurrency APIs for real-time data in the backend.",
            "Ensuring smooth and secure transactions with Stripe Payment integration.",
            "Optimizing performance and user interface with React Native and SCSS/SASS for seamless trading experiences.",
        ]
    },
    {
        name: 'Goalmogul',
        url: 'https://www.goalmogul.com',
        key: 'Goalmogul',
        image: 'images/gallery/10.png',
        banner: 'images/gallery/10.png',
        description: `Welcome to GoalMogul, the ultimate goal-sharing platform where individuals from all corners of the world come together to help each other achieve their dreams and provide mutual motivation. At GoalMogul, we offer a powerful and user-friendly website built with ReactJS, providing an intuitive interface for seamless goal-sharing experiences. Through API integration, we ensure efficient communication and data exchange, enabling smooth interactions between users. To enhance user communication, we've implemented Spam Emails and Email Templates, streamlining the process of sharing updates, milestones, and encouraging messages. Additionally, we've incorporated SCSS/SASS to design visually appealing layouts, creating an engaging environment to inspire and support each other on the journey to success.`,
        services: ['Web Development', 'API Integeration', "Email Template"],
        clientName: 'Micheal Cheng',
        type: 'Web Development',
        challenges:[
            "Implementing robust API integration for seamless communication between users.",
           "Addressing spam email concerns and developing effective email templates for goal sharing updates.",
            "Creating visually appealing layouts with SCSS/SASS for an engaging user experience."
        ]
    },
    {
        name: 'Save A Plate',
        url: 'https://play.google.com/store/apps/details?id=com.save_a_plate',
        key: 'Save A Plate',
        image: 'images/gallery/11.png',
        banner: 'images/gallery/11.png',
        description: `Welcome to Save A Plate, the ultimate food delivery application that lets you explore a variety of delectable food items in your city and have them delivered right to your doorstep. With our user-friendly React Native frontend, discovering new culinary delights has never been easier. Through seamless API integrations, we ensure a smooth experience from browsing to placing orders. For secure and convenient payments, we've integrated Stripe Payment, making transactions a breeze. To enhance your experience, we've incorporated React-native-maps to provide accurate location services. Stay updated on the latest offers and order status with Firebase Notifications. Plus, our Buy to Seller Chat integration allows you to communicate directly with sellers, ensuring a personalized and efficient ordering process. With captivating designs achieved through SCSS/SASS, Save A Plate guarantees a delightful food discovery and delivery journey. Experience the convenience of food exploration and delivery like never before with Save A Plate.`,
        services: ['Application Development', 'React Native', "Stripe Payment", 'React-native–maps', 'Firebase Notifications'],
        clientName: '',
        type: 'Application Development',
        challenges:[
            
            "Integrating and synchronizing various APIs for smooth restaurant and menu information retrieval.",
            "Ensuring seamless communication and real-time updates between buyers and sellers through the Buy to Seller Chat integration.",
            "Implementing and optimizing React Native maps for accurate location tracking and efficient food delivery services.",
        ]
    },
    {
        name: 'PickGo',
        url: false,
        key: 'PickGo',
        image: 'images/gallery/12.png',
        banner: 'images/gallery/12.png',
        description: `Welcome to PickGo, the ultimate food discovery application designed for food lovers like you. With PickGo, you can easily search for new and exciting food items offered by restaurants in your area and simply pick up your food at your convenience. Our user-friendly React Native frontend provides a seamless experience for browsing and exploring various culinary delights. Through seamless API integrations, we ensure up-to-date restaurant and menu information, making your food discovery journey a delightful one. To enhance the pickup process, we've implemented a QR Code Scanner, allowing you to scan codes for quick and efficient order collection. Your security and privacy are of utmost importance to us, which is why we've integrated Firebase Authentication and Two Factor Authentication for a secure and reliable login experience. With captivating designs achieved through SCSS/SASS, PickGo guarantees an enjoyable and hassle-free food discovery experience. Satisfy your cravings and explore new food items with PickGo today!`,
        services: ['Application Development', 'React Native', "QR Code Scanner", 'Firebase Authentication', ' Two Factor Authenticaion'],
        clientName: '',
        type: 'Application Development',
        challenges:[
            "Implementing efficient API integrations for up-to-date restaurant and menu information.",
            "Developing a reliable and quick QR Code Scanner for easy order collection.",
            "Ensuring secure authentication with Firebase and Two-Factor Authentication for user safety.",
        ]
    }
]


let params = new URL(window.location).searchParams.get('project')
console.log(params)

let activeProject = projects.filter((obj)=> obj.name === params)[0]

console.log(activeProject,"owais")

document.getElementById('projectName').innerHTML = activeProject.name
document.getElementById('para').innerHTML = activeProject.description
let visit = document.getElementById('visitWebsite') 
let bannerImage = document.getElementById('bannerImage').src = activeProject.banner


visit.addEventListener('click', () => {
    console.log("hello");
    window.open(activeProject.url, '_blank');
});


for (let i = 0 ; i < activeProject.challenges.length; i++){
    // document.getElementById('projectChallenges').innerHTML += `
    // <li>
    //     <div class="icon">
    //         <span class="fa fa-check"></span>
    //     </div>
    //     <div class="text">
    //         <p>${activeProject.challenges[i]}</p>
    //     </div>
    // </li>
    // `
}

for(let i =0; i< activeProject.services.length; i++) {
document.getElementById('services').innerHTML += `

                                       
                                        <p>${activeProject.services[i]}</p>
                                    
                                  

`
}