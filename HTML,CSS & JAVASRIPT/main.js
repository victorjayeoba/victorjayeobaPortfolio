const works_wrapper = document.getElementById("works_wrapper");
const filters = document.getElementsByClassName("filter")
const nav = document.getElementById("nav")
const header = document.getElementById('home')

var windowProgress = 0;
var headerHeight = header.offsetHeight
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
      group: "real works",
      title: "Renny Luxe",
      github: "https://github.com/victorjayeoba/renny-luxe",
      link: "https://renny-luxe.vercel.app/",
      about: "Renny-Luxe is a dynamic e-commerce platform designed to provide a seamless shopping experience with a focus on modern design and responsive performance. Built with Next.js for a powerful frontend, Firebase as the backend, and Tailwind CSS for intuitive styling, this project reflects my commitment to crafting efficient, user-friendly applications. I implemented Framer Motion animations to enhance user interactions, and I use FireCMS to manage product data effectively ",
   },
   {
      src: "/assets/images/merit.jpeg",
      group: "real works",
      title: "Merit AI",
      github: "https://github.com/femix300/Merit",
      link: "https://github.com/femix300/Merit",
      about: "Merit AI is an innovative project developed to harness the power of artificial intelligence for enhancing productivity and decision-making. Collaborating with a team of skilled developers, I took charge of the frontend development, focusing on creating a responsive and user-friendly interface that aligns with the platform’s sophisticated backend capabilities. My contributions included implementing seamless user interactions and ensuring consistent performance across devices. This project highlights my ability to work effectively in a team, translating complex requirements into intuitive, accessible user experiences.",
   },
   {
      src: "/assets/images/lookup.png",
      group: "fun projects",
      title: "LookUp Search Engine",
      github: "https://github.com/victorjayeoba/lookup-engine",
      link: "https://lookupsearch.vercel.app/",
      about: "This is a search engine built with <mark>NextJs (typesript)</mark>, <mark>TailwindCSS</mark> and <mark>Apis</mark>. <br/> It has different backend functionalities like dynamic routing and improved SEO, with this application you can search for anything on the internet and view recommended Profiles on dynamic pages. ",
   },
   {
      src: "/assets/images/gym_website.png",
      group: "fun projects",
      title: "Fitlab",
      github: "https://github.com/victorjayeoba/Gym",
      link: "https://fitlabgym.netlify.app/",
      about: "A gym landing page developed with <mark>ReactJs</mark> and <mark>Framer Motion</mark> with the primary purpose of convincing website visitors to patronize fitlab gym.",
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
