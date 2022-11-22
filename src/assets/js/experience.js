AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Natural Language Processing Intern",
    cardImage: "/src/assets/images/experience-page/ivis.png",
    place: "IVIS Labs Private Limited",
    time: "(July, 2022 - October 2022)",
    desp: "<li>The aim of this project was to produce a more intelligent way of question generation given any text by the user.</li> <li>Analyzing the text and gathering insights from any PDF file using various natural language processing techniques. Generating a summary of the extracted PDF or any text given by the user wherein I used the T5 pre-trained model.</li> <li> I Used KeyBERT to find all the keywords in the text and it outputs a relevancy table of the keywords.</li> <li> I then used sense2vec, a model by explosion.ai which finds the same sense words when the user inputs a keyword from the relevancy table. These words generated by sense2vec are then used for Question generation using a T5 transformer. </li>",
  },
  {
    title: "Google Developer Student Club ML-Lead",
    cardImage: "/src/assets/images/experience-page/gdsc.png",
    place: "GDSC VIT Bhopal",
    time: "(August, 2022 - Present)",
    desp: "I'm glad to say that I'm the ML-lead of GDSC, VIT Bhopal. What we do here :<li>Leading the ML technical community.</li><li>Hosted watch events and many community calls. </li><li>Organized and maintained projects in the GitHub organization. </li><li>Conducted online event on Machine learning and Deep Learning giving a detailed overview to everyone interested in the field of AIMLDL impacting over 200 students.</li>",
  },
  {
    title: "Microsoft Azure Fundamentals",
    cardImage: "/src/assets/images/experience-page/AZ.png",
    place: "Remote Externship",
    time: "(May, 2022 - June, 2022)",
    desp: "<li>I Cleared the Microsoft Azure AZ-900 Certification.</li><li>This certification gives the foundational aspects and benefits of Microsoft’s Cloud Services.</li><li>Learned how subscriptions work, what support plans are available, and the difference between Infrastructure as a Service, Platform as a Service, and Software as a Service.</li><li>By giving the exam, I had a good understanding of the services provided by Microsoft Azure. such as Compute, Networking, IoT, Big Data, AI, Monitoring, Databases, etc.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Script Winter Of Code 2021",
    cardImage: "/src/assets/images/experience-page/swoc.jfif",
    description:
      "Participated and thoroughly contributed to the python and API projects of Script Winter Of Code 2021.",
  },
  {
    title: "Hacktoberfest 2022",
    cardImage: "/src/assets/images/experience-page/h22.png",
    description:
      "Responsible for handling open source contributions for the project Scratch-AI.",
  },
  {
    title: "Scratch-AI ",
    cardImage: "/src/assets/images/experience-page/mbai.jpg",
    description:
      "Maintained Scratch-AI, a repository with different algorithms of Machine Learning & Deep Learning implemented from scratch. The main motto behind this repository is to grasp the mathematical aspect and intuition of different AI algorithms. 🤖 AI is being used everywhere nowadays, but people don't know about implementation of complex mathematical functions behind the scene.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
