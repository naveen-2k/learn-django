
const carouselText = [
    {text: "Technology", color: "green"},
    {text: "Learning", color: "orange"},
    {text: "Coding", color: "yellow"}
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text");

    $('.resume-link-call').click(function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Check if the screen width is greater than 768px
        if ($(window).width() > 1300) {
            // Redirect to resume1.html for desktop
            window.location.href = '/portfolio/resume1/';
        } else {
            // Redirect to resume.html for mobile
            window.location.href = '/portfolio/resume/';
        }
    });
    // $('.resume-link-call').click(function(event) {
    //     event.preventDefault(); // Prevent the default link behavior
        
    //     // Get the screen width
    //     let screenWidth = $(window).width();
        
    //     // Make an AJAX request to Django with the screen width
    //     $.ajax({
    //         url: '/portfolio/cresume/',
    //         type: 'GET',
    //         data: { screen_width: screenWidth }, // Send screen width as a parameter
    //         success: function(response) {
    //             // Redirect to the returned URL (if needed)
    //             window.location.href = response.url;
    //             console.log({response});
    //         }
    //     });
    // });
    

    // var currentPage = window.location.pathname;

    // // Function to check window size and redirect if needed
    // function checkWindowSize() {
    //     var width = $(window).width();
    //     var targetPage;

    //     if (width > 1350) {
    //         targetPage = 'resume1.html';
    //     } else {
    //         targetPage = 'resume.html';
    //     }

    //     // Redirect only if the current page is not the target page
    //     if (currentPage !== '/' + targetPage) {
    //         window.location.href = targetPage;
    //     }
    // }

    // // Initial check on page load
    // // checkWindowSize();

    // // Bind the resize event to the check function
    // $(window).resize(function() {
    //     checkWindowSize();
    // });

    $('#footer').html(`
        <footer class="bg-grey py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto">
                        <div class="small m-0">
                            Copyright &copy; Naveen M portfolio Website 2024 
                            <img id="qr-code-image" src="/static/portfolio/assets/frame.png" alt="QR Code" 
                                 style="width: 50px; height: 50px; cursor: pointer; filter: brightness(0.8); transition: filter 0.3s ease;">
                        </div>
                    </div>
                    <div class="col-auto">
                        <a class="small text-white" href="#!">Privacy</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small text-white" href="#!">Terms</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small text-white" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
        <div id="qr-modal" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 1000; justify-content: center; align-items: center;">
            <div style="background-color: #fff; padding: 20px; border-radius: 8px; text-align: center;">
                <img src="/static/portfolio/assets/frame.png" alt="QR Code" style="width: 300px; height: 300px;">
                <br>
                <button id="close-qr-modal" style="margin-top: 10px; padding: 8px 16px; background-color: #ff7e5f; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
                <br>
                <div style="margin-top: 10px;">
                    <a class="text-gradient" href="https://www.facebook.com/sharer/sharer.php?u=https://naveen-2k.github.io/portfolio/" target="_blank">
                        <i class="bi bi-facebook"></i> Facebook
                    </a>
                    <a class="text-gradient" href="https://twitter.com/intent/tweet?url=https://naveen-2k.github.io/portfolio/&text=Check out this QR code!" target="_blank">
                        <i class="bi bi-twitter"></i> Twitter
                    </a>
                    <a class="text-gradient" href="https://www.linkedin.com/shareArticle?mini=true&url=https://naveen-2k.github.io/portfolio/" target="_blank">
                        <i class="bi bi-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    `);
    

    $('.bi-share').click(function(){
        $('#qr-modal').css('display', 'flex');
    })

    $('#qr-code-image').click(function() {
        $('#qr-modal').css('display', 'flex');
    });

    // Close modal when close button is clicked
    $('#close-qr-modal').click(function() {
        $('#qr-modal').hide();
    });

    // Add hover effect to the QR code image
    $('#qr-code-image').hover(
        function() { // on mouse over
            $(this).css('filter', 'brightness(1.2)');
        },
        function() { // on mouse out
            $(this).css('filter', 'brightness(0.8)');
        }
    );
});





  $(document).ready(function() {
    // Animate the dots-1 div from the right
    $('.dots-1').animate({
        right: '1vw',   // Final position for dots-1
        opacity: 1        // Fade it in
    }, 1000); // 

    // Animate the dots-2 div from the right
    $('.dots-2').animate({
        right: '-2.5vw',    // Final position for dots-2
        opacity: 1        // Fade it in
    }, 1000); //

    // Animate the dots-3 div from the left
    $('.dots-3').animate({
        left: '1vw',    // Final position for dots-3
        opacity: 1        // Fade it in
    }, 1000); //

    // Animate the dots-4 div from the left
    $('.dots-4').animate({
        left: '-2.5vw',     // Final position for dots-4
        opacity: 1        // Fade it in
    }, 1000); // 
});


  $(document).ready(function() {
    const experienceData = [
        {
            dateRange: "May 2023 - July 2023",
            role: "Back-end Developer Intern",
            company: "Analytical Algorithms",
            location: "Chennai",
            description: "Worked in project named Engage. This is a mobile app developed using react native and I created APIs required for the"
            +"application like insert,update,delete we used phpmyadmin Mysql and the API is created using python Flask webframework"
            +""
        },
      
        {
            dateRange: "January 2023 - April 2023",
            role: "Developer",
            company: "Puducherry Technological University",
            location: "Puducherry",
            description: "Created a e-commerce website for bus reservation booking using php and phpmyadmin mysql database, implemented session handling using java servlets. Implemented all required CRUD opertion in the website."
        },
        {
            dateRange: "January 2023",
            role: "App Developer Intern",
            company: "ONGC LTD",
            location: "Karaikal, Puducherry",
            description: "Developed an Android application using Java in Android Studio, enabling staff to circulate event occurrences and locations. The app allows users with login credentials to view event details shared by colleagues. Used firebase to store the details"
        }
    ];
    const educationData = [
        {
            dateRange: "2020 - 2024",
            degree: "B.Tech in Computer Science Engineering",
            institution: "Puducherry Technological University",
            location: "Puducherry",
            description: "Completed coursework in various computer science disciplines with a focus on software development, data analysis, and cloud computing. Gained hands-on experience through projects such as the Cloud-Based Smart Traffic Management System."
        },
        {
            dateRange: "2017 - 2019",
            degree: "Intermediate",
            institution: "Jawahar Navodaya Vidyalaya",
            location: "Karaikal",
            description: "Pursued studies in science with a focus on mathematics, physics chemistry, and biology. Developed foundational knowledge that supported advanced studies in engineering."
        },
        {
            dateRange: "2012 - 2017",
            degree: "Grade 5 - Grade 10",
            institution: "Cauvery Public School",
            location: "Karaikal",
            description: "Excelled in academics, with a focus on mathematics and science subjects. Actively participated in extracurricular activities, laying a strong foundation for higher education."
        }
    ];
    // Assuming you have the extracted data already in variables
var codingLanguage = [
    "C", "C++", "MYSQL", "Java15", "C#", 
    "Android Studio", "React JS", 
    "Python3.8", "HTML5", "CSS3", "Javascript","jQuery"
  ];
  var skillSet=[
    "Problem-solving", "Teamwork", "Time management", "Adaptability", "Creativity","Quick Learner"
  ];
  var professionalSkillSet=[
    "Database Management", "Web Development", "Mobile App Development", "API Development", 
    "Object-Oriented Programming","Data Analysis","ML/AI"
  ];
  var certifications = [
    {"Intro to javascript": "LearnTube by CareerNinja, May 2023"},
    {"Theoretical understanding of SQL": "Sololearn, May 2023"},
    {"Theoretical understanding of PHP": "Sololearn, July 2022"},
    {"Air Pollution and Control": "NPTEL online Certification, Jan-Apr 2022"},
    {"Environment and Development": "NPTEL online Certification, Jul-Oct 2022"}
  ];
  
  var projects = {
    "Cloud Based Smart Traffic management System": {
        "description": "Created a dynamic tool using Python to regulate traffic signal timing, deployed on Google Cloud.",
        "date": "January 2023"
    },
    "App developer as Intern at ONGC LTD": {
        "description": "Created an app using Android Studio in Java for staff event communication.",
        "date": "July 2022"
    },
    "BMI Calculator": {
        "description": "User interface using HTML5, CSS3, and JavaScript to calculate BMI.",
        "date": "March 2022"
    },
    "Just Call Application": {
        "description": "Android app in Java to contact various service providers, with SQLite for data storage.",
        "date": "May 2022"
    },
    "Database Management System for Blood Donation System": {
        "description": "Created and managed database for blood donation using MySQL.",
        "date": "August 2021"
    },
    "Simple ATM console": {
        "description": "Console-based ATM machine simulation using C#.",
        "date": "November 2021"
    }
};
        $('.navee-projects').html('');
        $.each(projects, function(name, details) {
            var projectHTML = `
                <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div class="card-body p-0">
                        <div class="d-flex align-items-center">
                            <div class="p-5">
                                <h2 class="fw-bolder">${name}</h2>
                                <p>${details.description}</p>
                                <p><small class="text-muted">Duration: ${details.date}</small></p>
                            </div>
                            <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="${name}" />
                        </div>
                    </div>
                </div>
            `;
            $('.navee-projects').append(projectHTML);
        });
  
 
  
  // Now you have the skills, projects, and certifications in dictionaries
  
  console.log("Projects:", projects);
  console.log("Certifications:", certifications);
  console.log({skillSet},{professionalSkillSet},{codingLanguage});
  
    $('#navee-experience').html(' ');
    experienceData.forEach(function(item) {
        const cardHtml = `
            <div class="card shadow border-0 rounded-4 mb-5">
                <div class="card-body p-5">
                    <div class="row align-items-center gx-5">
                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                            <div class="bg-light p-4 rounded-4">
                                <div class="text-secondary fw-bolder mb-2">${item.dateRange}</div>
                                <div class="small fw-bolder">${item.role}</div>
                                <div class="small text-muted">${item.company}</div>
                                <div class="small text-muted">${item.location}</div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div>${item.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('#navee-experience').append(cardHtml);
    });


    $('.navee-education').html(' ');
    educationData.forEach(function(item) {
        const cardHtml = `
            <div class="card shadow border-0 rounded-4 mb-5">
                <div class="card-body p-5">
                    <div class="row align-items-center gx-5">
                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                            <div class="bg-light p-4 rounded-4">
                                <div class="text-secondary fw-bolder mb-2">${item.dateRange}</div>
                                <div class="small fw-bolder">${item.degree}</div>
                                <div class="small text-muted">${item.institution}</div>
                                <div class="small text-muted">${item.location}</div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div>${item.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('.navee-education').append(cardHtml);
    });

    // function generateContent(container, items, title, iconClass) {
    //     var contentHTML = `
    //         <div class="card shadow border-0 rounded-4 mb-5">
    //             <div class="card-body p-5">
    //                 <div class="mb-5">
    //                     <div class="d-flex align-items-center mb-4">
    //                         <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
    //                             <i class="${iconClass}"></i>
    //                         </div>
    //                         <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">${title}</span></h3>
    //                     </div>
    //                     <div class="d-grid gap-3 grid-cols">`;
    
    //     $.each(items, function(index, item) {
    //         var itemContent = item instanceof Object ? 
    //             `${Object.keys(item)[0]} - ${Object.values(item)[0]}` : item;
    //         contentHTML += `
    //             <div class="p-3 bg-light rounded-4">${itemContent}</div>`;
    //     });
    
    //     contentHTML += `</div></div></div></div>`;
    
    //     $(container).append(contentHTML);
    // }
    function generateContent(container, items, title, iconClass) {
        var contentHTML = `
            <div class="card shadow border-0 rounded-4 mb-5">
                <div class="card-body p-5">
                    <div class="mb-5">
                        <div class="d-flex align-items-center mb-4">
                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                <i class="${iconClass}"></i>
                            </div>
                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">${title}</span></h3>
                        </div>
                        <div class="d-grid gap-2 grid-cols">`;
    
        $.each(items, function(index, item) {
            var itemContent = item instanceof Object ? 
                `${Object.keys(item)[0]} - ${Object.values(item)[0]}` : item;
            contentHTML += `
                <div class="p-2 bg-light rounded-4">${itemContent}</div>`;
        });
    
        contentHTML += `</div></div></div></div>`;
    
        $(container).append(contentHTML);
    }
    
    let currentPath = window.location.pathname;
     // Check if the URL is '/portfolio/resume/' and not '/portfolio/resume1/'
     if (currentPath === '/portfolio/resume/') {
        // Arrays
       

        // Function to append items to the list
        function appendToSection(sectionId, items) {
            items.forEach(function(item) {
                $(sectionId).append(
                    `<div class="col mb-4 mb-md-0">
                        <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            ${item}
                        </div>
                    </div>`
                );
            });
        }

        // Populate Professional Skills
        appendToSection("#professional-skills", professionalSkillSet);

        // Populate Languages
        appendToSection("#languages", codingLanguage);

        // Populate Soft Skills
        appendToSection("#soft-skills", skillSet);

        // Populate Certifications
        certifications.forEach(function(cert) {
            $.each(cert, function(title, provider) {
                $("#certifications").append(
                    `<li>${title} - ${provider}</li>`
                );
            });
        });
    }

    // Detect the current page and apply the content accordingly
    if (window.location.href.includes("resume")) {
        // Generate content for resume1.html (two-column layout)
        $('#right-column,#left-column').html('');
        generateContent("#left-column", professionalSkillSet, "Professional Skills", "bi-tools");
        generateContent("#left-column", certifications, "Certifications", "bi-award");
        generateContent("#right-column", skillSet, "Skill Set", "bi-lightbulb");
        generateContent("#right-column", codingLanguage, "Coding Languages", "bi-code-slash");
    } else {
        // Generate content for resume.html (single-column layout)
        $('#main-content').html('');
        generateContent("#main-content", professionalSkillSet, "Professional Skills", "bi-tools");
        generateContent("#main-content", certifications, "Certifications", "bi-award");
        generateContent("#main-content", skillSet, "Skill Set", "bi-lightbulb");
        generateContent("#main-content", codingLanguage, "Coding Languages", "bi-code-slash");
    }
    
    
});
    function helloworld(){
        alert("Hello world"); 
    }
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }