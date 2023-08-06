const mongoose = require('mongoose') //install mongodb first along side node.js, then npm i mongoose
const Professor = require('./schemas/professors')
const User = require('./schemas/users')
const Post = require('./schemas/posts')
const Announcement = require('./schemas/announcements')

mongoose
    .connect('mongodb://127.0.0.1:27017/mco2')//connects to database, for some reason localhost:27017 doesnt work, but 127.0.0.1 does??
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));



// switcher()
async function switcher(){
    const lever = 2; //for deleting n stuff, sometimes it gets corrupted?
    switch(lever){
        case 0:{
            professor_delete()
            users_delete()
            posts_delete()
            announcements_delete()
        } break;
            
        case 1:{
            professor_populate()
            users_populate()
            posts_populate()
            announcements_populate()
        } break;
            
        default:
            break;
    }
}

async function users_delete(){
    try{
        User.deleteMany({})
        .then((result) => {
        console.log(`Refreshed ${result.deletedCount} documents`);
      })
        .catch((error) => {
        console.error("Error deleting documents:", error);
      })
    } catch(e){
        console.log(e.message)
    }
}

async function users_populate(){
    try{
        //registering new users
        User.insertMany([
            {username: "Marion Jose S. Manipol", profile_picture: "profile-1.jpeg", profile_banner: "banner-1.jpeg", intro: "Oui oui, I play Dislyte.", id: "12182680"},
            {username: "Pierre Cabinbin", profile_picture: "profile-2.jpeg", profile_banner: "banner-2.jpeg", intro: "Dragons are cool | 20", id: "12134152"},
            {username: "Edward James Tan", profile_picture: "profile-3.jpeg", profile_banner: "banner-3.jpeg", intro: "Author of California Eden", id: "12153412"},
            {username: "Chel Diokno", profile_picture: "profile-4.jpeg", profile_banner: "banner-4.jpeg", intro: "Chairman, Free Legal Assistance Group. Human rights lawyer. Teacher. Father. ", id: "09135742"},
            {username: "Lazada", profile_picture: "profile-5.jpeg", profile_banner: "banner-5.jpeg", intro: "Add to Cart. Add to Life.  ✨", id: "Sponsor"},
        ])
        } catch(e){
            console.log(e.message)
        }
}

async function professor_delete(){
    try{
        Professor.deleteMany({})
        .then((result) => {
        console.log(`Refreshed ${result.deletedCount} documents`);
      })
        .catch((error) => {
        console.error("Error deleting documents:", error);
      })
    } catch(e){
        console.log(e.message)
    }
}

async function professor_populate() {
    try{
    //remove any other professors
    /**/
    //registering new professors
    Professor.insertMany([
        {username: "Professor Mordaut", class: "CSARCH1 - S12", id: 12101234, asset:"MrMordaut.PNG"},
        {username: "Professor Harold Grifter", class: "GEPCOMM - Y13", id: 12101234, asset: "Coach.PNG"},
        {username: "Professor Abbet", class: "STALGCM - S12", id: 12101234, asset: "ProfessorAbbet.PNG"},
        {username: "Professor Lion", class: "GESPORTS - S15", id: 12101234, asset: "Lion.PNG"},
        {username: "Mr. Sensei", class: "LCENWRD - Y61", id: 12101234, asset:"Sensei.PNG"}
    ])
    } catch(e){
        console.log(e.message)
    }
}

async function posts_delete(){
    try{
        Post.deleteMany({})
        .then((result) => {
        console.log(`Refreshed ${result.deletedCount} documents`);
      })
        .catch((error) => {
        console.error("Error deleting documents:", error);
      })
    } catch(e){
        console.log(e.message)
    }
}

async function posts_populate() {
    try {
        Post.insertMany([
            {username: "Marion Jose S. Manipol", profile_picture: "profile-1.jpeg", likes: 6, comments: 2, date: '06/19/2023', content: "I wish I could play Digimon rn :<" },
            {username: "Chel Diokno", profile_picture: "profile-4.jpeg", likes:2010, comments:11, date: '06/18/2023', content:"Happy Father's Day to my mentor, inspiration, and role model! <br><br> \"[I]n your calculus of power you have forgotten one vital element: the greatness of the Filipino soul. Once that power is aroused, nothing can or will stop it.\"", media_content:"content-4.jpeg"},
            {username: "Lazada", profile_picture: "profile-5.jpeg", likes: 49, comments: 6, date:'06/17/2023', content: "Spice up your kitchen at home! Share 👇 which one will you checkout? 🏠✨ <br><br> Shop at #PhilipsOnLazMall now and enjoy up to 60% OFF, plus free shipping! <br><br> Check out now🛒", media_content: "content-5.jpeg"},
            {username: "Pierre Cabinbin", profile_picture: "profile-2.jpeg", likes: 12, comments: 5, date: '06/02/2023', media_content: "content-2.png"},
            {username: "Edward James Tan", profile_picture: "profile-3.jpeg", likes: 9, comments: 4, date:'06/01/2023', content: "New build of California Eden is out now!", media_content:"content-3.jpeg"}
        
        ])
    } catch (error) {
        console.log(error.message)
    }
}

async function announcements_populate(){
    try {
        Announcement.insertMany([
            {title: "[PINNED ANNOUNCEMENT: Welcome, Lasallian!🏹]", 
            content: "We're thrilled to have you as part of our community, created exclusively for DLSU-M students (with exceptions for STC students). This group serves as a platform where you can seek insights and opinions from fellow students about professors, enabling you to make informed decisions that best suit your needs and preferences. Before you dive into the discussions, we kindly ask all members to adhere to the guidelines and principles that foster a positive and constructive environment. Please be respectful in your comments and responses, keeping in mind that constructive criticism is allowed, while prof bashing is strictly prohibited.", 
            date: "June 25, 2023", likesCount: 1032, commentsCount: 11},
            {title: "[ANNOUNCEMENT: Membership Criteria]", 
            content: "This group was created exclusively for DLSU-M students, providing a platform for students to ask about professors and make informed choices. Exceptions will be given to STC students, ensuring inclusivity within the community. Non-DLSU student members will be promptly removed from the group to maintain its intended purpose.", 
            date: "June 25, 2023", likesCount: 871, commentsCount: 9},
            {title: "[ANNOUNCEMENT: Respectful Communication]", 
            content: "We encourage respectful and constructive dialogue among members. While critical feedback is allowed, it is important to refrain from blindly bashing professors. We value the exchange of thoughtful and constructive comments that will assist students in selecting the most suitable professors for their needs.", 
            date: "June 25, 2023", likesCount: 101, commentsCount: 14},
            {title: "[ANNOUNCEMENT: Utilize the Search Function]", 
            content: "To enhance the efficiency of the group and reduce redundancy, we kindly request members to utilize the search function located on the upper-right hand of the group page, near the \"+ Create Group\" button. This feature will help minimize repetitive questions about the same professors, allowing for a more streamlined discussion.", 
            date: "June 25, 2023", likesCount: 77, commentsCount: 2},
            {title: "[ANNOUNCEMENT: Advertising Guidelines]", 
            content: "In order to maintain a balanced and informative environment, we have established advertising guidelines. Org-related events may be posted once a day, discouraging excessive reposting. Members who repeatedly violate this rule will be sanctioned with a warning, followed by removal from the group for subsequent offenses. However, exceptions will be made for enrollment schedules, emergency announcements, and other special cases. Additionally, advertising anything unrelated to DLSU is strictly prohibited without prior permission from the admins. We do, however, allow advertising of academic-related matters such as Market2 and Markeve, provided we are informed in advance. The selling of graphing kits or any academic items is also allowed within the group's scope.", 
            date: "June 25, 2023", likesCount: 421, commentsCount: 58},
            {title: "[ANNOUNCEMENT: Additional Note]", 
            content: "Please be aware that the administration reserves the right to update the group's terms without prior notice. It is important to note that this group is not an official University group or organization. The views and opinions expressed by students in this group do not represent De La Salle University or its stance on any matter or issue. We appreciate your understanding and cooperation as we strive to maintain a positive and informative community.", 
            date: "June 25, 2023", likesCount: 73, commentsCount: 58},
        ])
    } catch (error) {
        console.log(error.message)
    }
}

async function announcements_delete(){
    try{
        Announcement.deleteMany({})
        .then((result) => {
        console.log(`Refreshed ${result.deletedCount} documents`);
      })
        .catch((error) => {
        console.error("Error deleting documents:", error);
      })
    } catch(e){
        console.log(e.message)
    }
}

//to check if new prof registered
async function checker(professor, Professor){ //cannot put this in professors.js sadly, need await, put somewhere else later
    try{
        const professorDB = await Professor.findOne({id: professor.id});
        if (professorDB){
            console.log("Professor already exists!")
        } else {
            professor.save().then(()=>console.log("Professor Saved"))
        }
    } catch (error){
        console.error("Error saving Professor:", error)
    }
}
