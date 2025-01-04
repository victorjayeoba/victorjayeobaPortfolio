const submitBtn = document.getElementById("submitBtn")
const works_wrapper = document.getElementById("works_wrapper");
const filters = document.getElementsByClassName("filter")
const nav = document.getElementById("nav")
const header = document.getElementById('home')

var windowProgress = 0;
var headerHeight = header.offsetHeight
submitBtn.addEventListener("click",(e)=>{
   alert("Service is unavailable but don't worry, you can reach out to me on this number: +2347026702294")
})

window.addEventListener("scroll", (e) => {
   /*     console.log(windowProgress) */
   if (windowProgress > e.currentTarget.scrollY && windowProgress > headerHeight - 50) {


      nav.style.transform = "translateY(0%)"
      nav.classList.add("active_Nav")

   } else if (e.currentTarget.scrollY == "0") {
      nav.style.transform = "translateY(0%)"
      nav.classList.remove("active_Nav")
   }
   else {
      nav.style.transform = "translateY(-100%)"
   }
   windowProgress = e.currentTarget.scrollY
}
)



function myFilter(e) {
   Array.from(filters).forEach((e) => e.classList.remove("active_filter"))
   e.classList.add("active_filter")
   showWorks(e.id)
   console.log(e.id)
}



/*
Array.from(filters).forEach((e)=> e.addEventListener("click",(e)=>{
 myFilter(e)
}));*/
Array.from(filters).forEach((e) => e.addEventListener("click", () => {
   myFilter(e)
}));


const works = [
   {
      src: "/assets/images/renny_luxe.png",
      group: "fun projects",
      title: "Renny Luxe",
      github: "https://github.com/victorjayeoba/renny-luxe",
      link: "https://renny-luxe.vercel.app/",
      about: "Renny-Luxe is a dynamic e-commerce platform designed to provide a seamless shopping experience with a focus on modern design and responsive performance. Built with Next.js for a powerful frontend, Firebase as the backend, and Tailwind CSS for intuitive styling, this project reflects my commitment to crafting efficient, user-friendly applications. I implemented Framer Motion animations to enhance user interactions, and I use FireCMS to manage product data effectively ",
   },
   
   {
      src: "/assets/images/meritai.png",
      group: "real works",
      title: "Merit AI",
      github: "https://github.com/femix300/Merit",
      link: "https://github.com/femix300/Merit",
      about: "Merit is a full-stack project, built with React, Vite, TailwindCSS, Python, SQL, and REST APIs, it is an innovative platform leveraging artificial intelligence to enhance productivity and streamline decision-making for <mark>Nigerian sudents</mark>. As part of a talented development team, I contributed to the project by leading frontend development. I implemented a responsive, user-centric interface that seamlessly integrates with the platform’s advanced backend systems. ",
   },
   {
      src: "/assets/images/sunnydangaps.png",
      group: "real works",
      title: "Sunnydangaps Plumbing Solutions ",
      github: "https://sunnydangaps.com/wp-admin",
      link: "https://sunnydangaps.com/",
      about: "Sunnydangaps Plumbing Solutions is a <mark>WordPress-based</mark> website designed for a professional plumbing company. The platform highlights the company’s expertise in delivering reliable plumbing services for residential, commercial, and industrial needs. With a user-friendly interface, the website makes it easy for clients to explore services, request quotes, and connect with the team for quick and efficient solutions. Sunny Danga Plumbing Solutions stands as a digital hub for quality plumbing services and customer satisfaction.",
   },
   {
      src: "/assets/images/getlinkedai.png",
      group: "real works",
      title: "GetLinked AI Hackathon Project",
      github: "https://github.com/victorjayeoba/getlinkedchallenge",
      link: "https://getlinkedaichallenge.vercel.app/",
      about: "GetLinked AI is a hackathon-driven project where a team of developers was challenged to replicate a sophisticated design in record time. The project combined creativity, technical expertise, and collaboration, showcasing the team’s ability to turn a static design into an interactive and fully functional application. Built under the constraints of tight deadlines, GetLinked AI represents the spirit of innovation, problem-solving, and teamwork that defines hackathons.",
   },


]


function showWorks(filter) {
   var li = ""
   works.map((e, id) => {
      if (filter == e.group || filter == "all") {

         if (id % 2 == "1") {
            li += `<div class="work_wrapper_full_width row_reverse">
      <div class="work_wrapper row_reverse">
         <div class="image_wrapper">
            <img src="${e?.src}" alt="" />
  
         </div>
         <div class="details_on_work ">
            <div class="nain_details">
               <p class="custom_font"> ${e?.title} 
               <p>
               <p><span class="info" id="about">About : </span>
                  <span>${e?.about}</span>
               </p>
  
               <div class="flex_link">
     
               <a class="website_link " href="${e.link}" target="_blank">View Website </a>
               <a class="website_link " href="${e.github}" target="_blank"> <img src="/assets/images/github.png" class="icons" alt=""
               /> </a>
</div>
            </div>
         </div>
      </div>
   </div>`
         } else {
            li += `<div class="work_wrapper_full_width">
      <div class="work_wrapper ">
         <div class="image_wrapper">
            <img src="${e?.src}" alt="" />
  
         </div>
         <div class="details_on_work ">
            <div class="nain_details">
               <p class="custom_font"> ${e?.title} 
               <p>
               <p><span class="info" id="about">About : </span>
                  <span>${e?.about}</span>
               </p>
  
               <div class="flex_link">
     
               <a class="website_link " href="${e.link}" target="_blank">View Website </a>
               <a class="website_link " href="${e.github}" target="_blank"> <img src="/assets/images/github.png" class="icons" alt=""
               /> </a>
</div>
            </div>
         </div>
      </div>
   </div>`
         }



      }

   })
   works_wrapper.innerHTML = li
}


window.addEventListener("DOMContentLoaded", () => {
   var li = ""
   works.map((e, id) => {

      if (id % 2 == "1") {
         li += `<div class="work_wrapper_full_width row_reverse">
      <div class="work_wrapper row_reverse">
         <div class="image_wrapper hidden">
            <img src="${e?.src}" alt="" />
  
         </div>
         <div class="details_on_work hidden">
            <div class="nain_details">
               <p class="custom_font"> ${e?.title} 
               <p>
               <p><span class="info" id="about">About : </span>
                  <span>${e?.about}</span>
               </p>
  
               <div class="flex_link">
     
               <a class="website_link " href="${e.link}" target="_blank">View Website </a>
               <a class="website_link " href="${e.github}" target="_blank"> <img src="/assets/images/github.png" class="icons" alt=""
               /> </a>
                </div>
            </div>
         </div>
      </div>
   </div>`
      } else {
         li += `<div class="work_wrapper_full_width">
      <div class="work_wrapper ">
         <div class="image_wrapper hidden">
            <img src="${e?.src}" alt="" />
  
         </div>
         <div class="details_on_work hidden ">
            <div class="nain_details">
               <p class="custom_font"> ${e?.title} 
               <p>
               <p><span class="info" id="about">About : </span>
                  <span>${e?.about}</span>
               </p>
  <div class="flex_link">
     
                  <a class="website_link " href="${e.link}" target="_blank">View Website </a>
                  <a class="website_link " href="${e.github}" target="_blank"> <img src="/assets/images/github.png" class="icons" alt=""
                  /> </a>
  </div>
            </div>
         </div>
      </div>
   </div>`
      }



   })
   works_wrapper.innerHTML = li
})



document.onreadystatechange = function () {
   if (document.readyState == "complete") {
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add("show")
            }
         })
      })
      const element = document.querySelectorAll('.hidden');
      element.forEach((el) => observer.observe(el));

      const menuBar = document.querySelector('.animated_menu_bar');
      const navLinks = document.querySelector('.top__links');

      function hideLinks(e) {
         if (navLinks.classList.contains('showMenu') && e.target.className == 'link') {
            navLinks.classList.toggle("showMenu");
            menuBar.classList.toggle("active");
         }
      }


      function show() {
         menuBar.classList.toggle("active");
         navLinks.classList.toggle("showMenu");
      }
      menuBar.addEventListener("click", show)
      navLinks.addEventListener("click", (e) => {
         hideLinks(e)

      })

   }

}


/*
       <div class="work_wrapper hidden">
               <div class="image_wrapper">
                  <img src="/assets/images/shapes.png" alt="" />
                  <div class="overlay">
                     <h3 class="image_overlay_info"> E-splash Clone App </h3>	
                  </div>
               </div>
               <div class="details_on_work hidden">
                  <div class="nain_details">
                     <p><span class="info " id="title">Title : </span><span>E-Splash Clone App</span></p>
                     <p><span class="info"  id="about">About : </span>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, laboriosam.</span></p>
                     <p><span class="info"  id="category">Category : </span><span>E-commerce , Photography</span></p>
                     <a class="website_link" href="">View Website</a>
                  </div>
               	
               </div>
            </div>
      */
